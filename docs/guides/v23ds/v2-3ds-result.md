---
sidebar_position: 7
---

# V2 3DS Result API (Flows B, C)

## API Details 

Mode: Stateless **REST** API <br />
API URL: paymentApiUrl **/3ds/result** <br />
HTTP Method: **POST** <br />
Request Body: **JSON**

### Request Body

```json title="Example Request"
{
    "netvalveMidId":{{netvalveMidId}},
    "transID":"732b4368-d69a-4d74-885e-35b5d402824e"
}
```

### Request Parameters

| Parameter| Type| Required| Description|
|:---------|:----|:---------|:----------| 
| netvalveMidId| String| Yes| Netvalve Mid Id configured with merchant profile.<br />e.g. aa09538b-2148-4e0b-8418-28391caa6af2| 
| transID| String | Yes| transID Id - An unique 3DS Transaction ID from the init/auth call. <br />Refer to [ThreeDSProviderResponse parameters](#threedsproviderresponse-parameters). | 

### HTTP Response Codes

| Code| Description| 
|:----|:-----------|
| 200| OK| 
| 401| Unauthorized| 
| 404| Bad Request| 
| 500| Service Unavailable| 

## API Response in JSON

### **Frictionless Flow (Challenge Not Required)**

```json title="200"
{
    "traceID": "07ae6fb6-4aa7-4464-a700-d8c0d529522e",
    "responseTimestamp": "2023-09-26T16:42:24.551+00:00",
    "responseCode": "3DS_1000",
    "responseMessage": "Three DS Transaction Successful.",
    "threeDSProviderResponse": {
        "transID": "f88c9f24-ad5c-472c-a9cc-d61437ab7b80",
        "threeDs2TransactionId": "bWK59U04KRGhxfhZSAn0",
        "eci": "05",
        "cavv": "MTIzNDU2Nzg5MDEyMzQ1Njc4OTA=",
        "threeDsVersion": "2.1.0"
    },
    "midId": 2,
    "netvalveMidId": "289e253d-f955-4e29-a2c7-bb1805883ee0"
}
```

```json title="Error"
{
    "traceID": "8f2348b0-12f2-44c5-91f9-989124c74220",
    "responseTimestamp": "2023-11-01T11:43:50.647+00:00",
    "responseCode": "3DS_2003",
    "responseMessage": "Invalid Merchant ID. Kindly contact Netvalve support."
}
{
    "traceID": "d14726d6-8a00-4555-b2e0-f6fea3b944c5",
    "responseTimestamp": "2023-11-01T14:19:54.461+00:00",
    "responseCode": "3DS_2000",
    "responseMessage": "Three DS Transaction Processing Error. ",
    "threeDSProviderResponse": {
        "referenceId": "0fb6d85d-0a4e-4e1f-b6d8-5d0a4ece1fe7",
        "errorCode": "9400",
        "errorMessage": "Field 'mid_q' validation error: 'must not be empty' rejected value ''; Field 'mid_q' validation error: 'must not be blank' rejected value ''; Field 'mid_q' validation error: 'size must be between 1 and 8' rejected value ''; ",
        "challengeRequired": false,
        "status": "RESULT_FAILED"
    }
}
```

### **Success Criteria**: paymentApiUrl/3ds/result response must contain the data below

- <code>"responseCode" =  "3DS_1000" </code>
- <code>"transID" = (Non Null value)</code>
- <code>threeDs2TransactionId = (Non Null value)</code>
- <code>"eci" = (Non Null value)</code>
- <code>"cavv" = (Non Null value)</code>
- <code>threeDsVersion = (Non Null value)</code>

### Response Parameters

| Parameter | Type | Required | Description |
|:-----------|:-----|:-------- |:------------|
|traceID |String|Yes|Trace Id / Corellation ID - an unique id for 3DS Transaction to trace back / inquiry.<br/>e.g. dbea8561-4990-4582-b370-66ab2696f39a|
|responseTimestamp|Date|Yes|Response date and time.<br />e.g.  "2023-10-17T08:52:17.845+00:00"|
|responseCode|String|Yes|NetValve Response Code <br />e.g. 3DS_1000 SUCESS; 3DS_2000 Failure<br /> More [Error Codes](#error-codes)|
|responseMessage|String|Yes|e.g. "Three DS Transaction Successful."|
|threeDSProviderResponse|String|Optional (present in case of valid request)|TthreeDSProviderResponse JSON Object|
|midId|Long|Yes|Mid ID|
|netvalveMidId|String|Yes|NetvalveMidId|

### ThreeDSProviderResponse Parameters

| Parameter | Type | Required | Description |
|:-----------|:-----|:-------- |:------------|
| transID| String| Yes| transID Id - an unique 3DS Transaction id <br />e.g. dbea8561-4990-4582-b370-66ab2696f39a| 
| referenceId| String| Yes| Reference Id for 3DS from provider<br />e.g. "124cf1a9-b211-4f7f-8cf1-a9b2115f7fb0"| 
| threeDs2TransactionId| String| Yes| 3DS Server Transaction Id<br />e.g. 6bb67882-1562-42c0-ae06-26875c6a62e3| 
| eci| String| Yes| ECI value from 3DS Provider<br />e.g. Visa. 05; Mastercard. 02.<br />More [ECI Codes](v2-eci-codes.md)| 
| cavv| String| Yes| CAVV value from 3DS Provider<br />e.g.AJkBAZd0ByiAAAAAJnQHAAAAAAA=| 
| status| String| Yes| "COMPLETED" / “RESULT_FAILED“ | 
| threeDsVersion| String| Yes| Three DS Version <br /> e.g. "threeDsVersion": "2.1.0"| 
| errorCode| String| Optional| e.g. 9400| 
| errorMessage| String| Optional| e.g. “Field 'mid_q' validation error."|

### Error Codes

```js
// 1000 series for Approval,
THREE_DS_SUCCESS("3DS_1000", "Three DS Transaction Successful."),
THREE_DS_REQUEST_SUCCESS("3DS_1001", "Request Successful."),

// 2000 series for error
THREE_DS_ERROR("3DS_2000", "Three DS Transaction Processing Error. "),
THREE_DS_REQUIRED_CALL_BACK_URL("3DS_2001", "Event Callback Url Is Missing. This Value Must Be Provided."),
THREE_DS_NOT_CONFIGURED("3DS_2002", "Mid Not configured for 3DS. Kindly contact Netvalve support."),
THREE_DS_INVALID_MERCHANT("3DS_2003", "Invalid Merchant ID. Kindly contact Netvalve support."),
THREE_DS_TRANSACTION_ID_REQUIRED("3DS_2004", "Three DS Transaction Id Is Missing. This Value Must Be Provided."),
THREE_DS_CHALLENGE_INDICATOR_REQUIRED("3DS_2005", "Challenge Indicator Is Missing. This Value Must Be Provided."),
THREE_DS_BROWSER_INFO_REQUIRED("3DS_2006", "Browser Info token Is Missing. This Value Must Be Provided."),
THREE_DS_DF_REF_ID_REQUIRED("3DS_2007", "DF Reference Id Is Missing. This Value Must Be Provided."),
THREE_DS_GATEWAY_ERROR("3DS_2008", "Three DS Transaction Processing Error from Gateway. Kindly contact Netvalve support."),
THREE_DS_IMPL_TYPE_REQUIRED("3DS_2009", "3DS implementation type Is Missing. This Value Must Be Provided.");
```