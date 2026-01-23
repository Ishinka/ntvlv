---
sidebar_position: 5
---

# V2 3DS Auth API (Flow C)

## API Details 

Mode: Stateless **REST** API <br />
API URL: paymentApiUrl **/3ds/authentication** <br />
HTTP Method: **POST** <br />
Request Body: **JSON**

### Request Body

```json title="Example Request"
{
    "netvalveMidId":{{netvalveMidId}},
    "amount":43.10,
    "currency": "USD",
    "cardExpireMonth": "08",
    "cardExpireYear": "2025",
    "cardHolderName": "Test",
    "cardNumber": "4100000000000100",
    "customerIp": "123.123.123.123",
    "customerName": "Test",
    "customerLastName": "Test", 
    "customerAddress": "Test Address",
    "customerCity": "Dubai",
    "customerCountryCode": "VA",
    "customerEmail": "yogesh@dahe.com",
    "customerPhone": "+919900000000",
    "customerState": "VA",
    "customerZipCode": "85284",
    "transID":"732b4368-d69a-4d74-885e-35b5d402824e"
}
```

:::note
As a new 3DS Visa mandate, the customer needs to send an email and phone in the below format to avoid 3DS compliance issues.
:::

```json title="3DS Visa Compliance Parameters"
    "customerEmail": "yogesh@dahe.com",
    "customerPhone": "+919900000000", (Customer Phone in the format of coutrycode-phone . e.g +919900000000)
```

### Request Parameters

| Parameter| Type| Required| Description|
|:---------|:----|:---------|:----------| 
| netvalveMidId| String| Yes| Netvalve Mid Id configured with merchant profile.<br />e.g. aa09538b-2148-4e0b-8418-28391caa6af2| 
| amount| BigDecimal| Yes| Transaction Amount<br />e.g.  100.50| 
| currency| String| Yes| Currency with matching ISO-4217 currency standard e.g. "USD"| 
| cardExpireMonth| String| Yes| regexp = "^(0[1-9]|1[0-2])$"<br />e.g. "08"| 
| cardExpireYear| String| Yes| @Size(max = 4, min = 4)<br />e.g. "2025"| 
| cardHolderName| String| Yes| @Size(max = 128)| 
| cardNumber| String| Yes| Valid card number| 
| customerEmail| String| Conditional. Required for Visa 3DS.| Customer email| 
| customerIp| String| Yes| IP address| 
| customerName| String| Yes| Customer First Name| 
| customerLastName| String| Yes| Customer Last Name| 
| customerAddress| String| Optional| Customer Address| 
| customerCity| String| Optional| Customer City| 
| customerCountryCode| String| Yes| Customer Country Code <br />Format: US, 2 digits code|
| customerPhone| String| Conditional. Required for Visa 3DS.| Customer Phone in the formate of coutrycode-phone<br /> e.g. +919900000000| 
| customerState| String| Optional| Customer State | 
| customerZipCode| String| Optional| Customer Zip/Postal Code | 
| transID| String | Yes| transID Id - An unique 3DS Transaction ID from the init/auth call. <br />Refer to [ThreeDSProviderResponse parameters](#threedsproviderresponse-parameters). | 

### HTTP Response Codes

| Code| Description| 
|:----|:-----------|
| 200| OK| 
| 401| Unauthorized| 
| 404| Bad Request| 
| 500| Service Unavailable| 

## API Response in JSON

### Frictionless Flow (Challenge Not Required)

**Frictionless Success Criteria**: the response must contain the data listed below and the client should add those checks.

- <code>"responseCode" = "3DS_1000"</code>
- <code>"transID" = (Non Null value)</code>
- <code>"threeDs2TransactionId" = (Non Null value)</code>
- <code>"eci" = (Non Null value)</code>
- <code>"cavv" = (Non Null value)</code>
- <code>"threeDsVersion" = (Non Null value)</code>

```json title="200"
{
    "traceID": "eb603c99-cdd3-4cb4-801e-94e8c46e2059",
    "responseTimestamp": "2023-09-26T16:02:25.587+00:00",
    "responseCode": "3DS_1000",
    "responseMessage": "Three DS Transaction Successful.",
    "threeDSProviderResponse": {
        "transID": "e0cc7f76-2d85-4f2d-a284-96df7f59d5bb",
        "threeDs2TransactionId": "nDgrHKNMWMJbj3pSn710",
        "eci": "05",
        "cavv": "Y2FyZGluYWxjb21tZXJjZWF1dGg=",
        "challengeRequired": false,
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
        "status": "AUTHENTICATED_FAILED"
    }
}
```

### ACS/Challenge Flow (Challenge Required)

```json title="200"
{
    "traceID": "a6fbf18f-c7e4-4fa6-8392-3e95948bca39",
    "responseTimestamp": "2023-10-12T15:56:16.116+00:00",
    "responseCode": "3DS_1000",
    "responseMessage": "Three DS Transaction Successful.",
    "threeDSProviderResponse": {
        "transID": "9f202d2e-6a0e-4f70-b478-f8b0203b9e54",
        "threeDs2TransactionId": "19sOi7k4JQTjnBLcQRb1",
        "challengeRequired": true,
        "redirectUrl": "https://gateway.sandbox-netvalve.com/callback?transId=9f202d2e-6a0e-4f70-b478-f8b0203b9e54&t=eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJmOTdhM2FlYi03M2IyLTRiM2YtODJkNi1iZTcxMGNjZjI4MDMiLCJpYXQiOjE2OTcxMjYxNzcsImV4cCI6MTY5NzEyNjc3NywiaXNzIjoiTkVUVkFMVkUifQ.qPi3Ss_n1YtZCfxvNY2gsliMEKoZ_tZjqjl5dO9ewyY",
        "status": "ACS_REQUIRED"
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
        "status": "AUTHENTICATED_FAILED"
    }
}
```

**ACS Success Criteria**: the response must contain the data listed below and the client should add those checks.

- <code>"responseCode" = "3DS_1000"</code>
- <code>"transID" = (Non Null value)</code>
- <code>"challengeRequired" = true</code>
- <code>"redirectUrl" = (Non Null value)</code>
- <code>"status" = ACS_REQUIRED</code>

### Response Parameters

| Parameter | Type | Required | Description |
|:-----------|:-----|:-------- |:------------|
|traceID |String|Yes|Trace Id / Corellation ID - an unique ID for 3DS Transaction to trace back / inquiry.<br/>e.g. dbea8561-4990-4582-b370-66ab2696f39a|
|responseTimestamp|Date|Yes| Response date and time.<br />e.g.  "2023-10-17T08:52:17.845+00:00"|
|responseCode|String|Yes|NetValve Response Code <br />e.g. 3DS_1000 SUCESS; 3DS_2000 Failure<br /> More [Error Codes](#error-codes)|
|responseMessage|String|Yes|e.g. "Three DS Transaction Successful."|
|threeDSProviderResponse|String|Optional (present in case of valid request)|TthreeDSProviderResponse JSON Object|
|midId|Long|Yes|Mid ID|
|netvalveMidId|String|Yes|NetvalveMidId|

### ThreeDSProviderResponse Parameters

| Parameter | Type | Required | Description |
|:-----------|:-----|:-------- |:------------|
| transID| String| Yes| transID Id - an unique 3DS Transaction ID <br />e.g. dbea8561-4990-4582-b370-66ab2696f39a| 
| referenceId| String| Yes| Reference Id for 3DS from provider<br />e.g.  "124cf1a9-b211-4f7f-8cf1-a9b2115f7fb0"| 
| threeDs2TransactionId| String| Yes| 3DS Server Transaction Id<br />e.g. 6bb67882-1562-42c0-ae06-26875c6a62e3| 
| eci| String| Yes| ECI value from 3DS Provider<br />e.g. Visa. 05; Mastercard. 02.<br />More [ECI Codes](v2-eci-codes.md)| 
| cavv| String| Yes| CAVV value from 3DS Provider<br />e.g.AJkBAZd0ByiAAAAAJnQHAAAAAAA=| 
| challengeRequired| Boolean| Optional| true/false| 
| redirectUrl| String| Optional| NetValve URL to do Iframe/redirect challenge flow. For more details see the documentation [V2 ACS Challenge](v2-acs-challenge.md) and receive the challenge result.| 
| status| String| Yes| "AUTHENTICATED" / “AUTHENTICATED_FAILED“ / “ACS_REQUIRED" / “INITIALIZATION_FAILED“| 
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