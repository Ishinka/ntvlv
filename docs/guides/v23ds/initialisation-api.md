---
sidebar_position: 2
---

# V2 Initialisation API

The initialization call must be sent to start the 3D Secure v2 authentication flow. Successful initialization responses will return the 3DS Initialisation details in response.

## API Details 

Mode: Stateless **REST** API <br />
API URL: [paymentApiUrl **/3ds/v2/initialization**](/api#tag/Three-DS/operation/initAndAuthOperation) <br />
HTTP Method: **POST** <br />
Request Body: **JSON**

### Request Body

```json title="Example Request"
{
    "netvalveMidId":{{netvalveMidId}},
    "amount": 43.10,
    "currency": "USD",
    "cardExpireMonth": "08",
    "cardExpireYear": "2025",
    "cardHolderName": "Yogesh",
    "cardNumber": "4000000000001091",
    "merchantRedirectUrl": "https://amazon.com/redirect",
    "customerIp": "123.123.123.123",
    "customerEmail": "yogesh@dahe.com",
    "customerPhone": "+919900000000",
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36",
    "browserHeader": "text/html,application/xhtml+xml,application/xml;q=0.9,/;q=0.8",
    "browserJavaEnabled": true,
    "browserLanguage": "en-US",
    "browserColorDepth": 24,
    "browserScreenHeight": 864,
    "browserScreenWidth": 1536,
    "browserTimeZone": 300
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
| merchantRedirectUrl| String| Optional(In case of redirect required)| valid merchant redirect URL | 
| customerIp| String| Yes| IP address| 
| customerPhone| String| Conditional. Required for Visa 3DS.| Customer Phone in the formate of coutrycode-phone<br /> e.g. +919900000000| 
| customerEmail| String| Conditional. Required for Visa 3DS.| Customer email| 
| userAgent| String| Yes| userAgentparam from browser data captured | 
| browserHeader| String| Yes| browserHeader param from browser data captured | 
| browserJavaEnabled| String| Yes| browserJavaEnabledparam from browser data captured | 
| browserLanguage| String| Yes| browserLanguageparam from browser data captured <br />Format: "en-US" | 
| browserColorDepth| Integer| Yes| browserColorDepthparam from browser data captured | 
| browserScreenHeight| Integer| Yes| browserScreenHeightparam from browser data captured | 
| browserScreenWidth| Integer| Yes| browserScreenWidthparam from browser data captured | 
| browserTimeZone| Integer| Yes| browserTimeZoneparam from browser data captured <br />Format: like 300|

## Generating Browser Data for the Request Body
The <code>browser</code> related parameters in the request must be fetched on the client. You can use this JavaScript function to collect this data:

```js
function fetchBrowserData(){
    return {
        userAgent: navigator.userAgent,
        browserHeader: 'text/html,application/xhtml+xml,application/xml;q=0.9,/;q=0.8',
        browserJavaEnabled: navigator?.javaEnabled() || false,
        browserLanguage: (navigator?.language || navigator?.userLanguage || '').split('-').slice(0, 2).join('-'),
        browserColorDepth: screen.colorDepth,
        browserScreenHeight: screen.height,
        browserScreenWidth: screen.width,
        browserTimeZone: new Date().getTimezoneOffset()
    };
}

const browserData = fetchBrowserData(); 
// include in the Initialization API request
```

:::note
The <code>browserHeader</code> can be the hard coded string above. This will be unnecessary in future versions.
:::

### HTTP Response Codes

| Code | Description |
|:---- |:----------- |
| 200 | Sucess |
| 401 | Unauthorised |
| 404 | Bad Request |
| 500 | Service Unavailable |

## Responses for different flows

The following indicates the response for each of the possible [3DS flows](v2-flows.md). The merchant must check the response to see which flow to take.

### FLOW A: 3DS Complete

See [V2 Flows](v2-flows.md) for a description of this flow.

#### Frictionless Flow

**Frictionless Success Criteria**: the response must contain the data listed below and the client should add those checks.

- <code>"responseCode" = "3DS_1000"</code>
- <code>"transID" = (Non Null value)</code>
- <code>"threeDs2TransactionId" = (Non Null value)</code>
- <code>"eci" = (Non Null value)</code>
- <code>"cavv" = (Non Null value)</code>
- <code>"threeDsVersion" = (Non Null value)</code>

:::note
**If the above success criteria match, skip all the next steps and use <code>eci</code>, <code>cavv</code>, <code>threeDs2TransactionId</code>,<code>threeDsVersion</code> in the payment.**
:::

```json title="Example Response: 200"
{
    "traceID": "c1228eb5-2246-4cf5-ae3d-4c19234e1acb",
    "responseTimestamp": "2024-05-28T08:04:13.503+00:00",
    "responseCode": "3DS_1000",
    "responseMessage": "Three DS Transaction Successful.",
    "threeDSProviderResponse": {
        "transID": "53d002cd-9998-4399-94b7-ad1d9e722ea2",
        "threeDs2TransactionId": "e37b458a-c171-4ad3-adb5-e70d3cb9902b",
        "eci": "05",
        "cavv": "AJkBBkhgQQAAAE4gSEJydQAAAAA=",
        "threeDsVersion": "2.2.0"
    },
    "midId": 2,
    "netvalveMidId": "289e253d-f955-4e29-a2c7-bb1805883ee0"
}
```
```json title="Example Response: Error"
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
        "status": "INITIALIZATION_FAILED"
    }
}
```

### FLOW B: Challenge Required

See [V2 Flows](v2-flows.md) for a description of this flow.

**ACS Success Criteria**: the response must contain the data listed below and the client should add those checks.

- <code>"responseCode" = "3DS_1000"</code>
- <code>"transID" = (Non Null value)</code>
- <code>"challengeRequired" = true</code>
- <code>"redirectUrl" = (Non Null value)</code>
- <code>"status" = ACS_REQUIRED</code>

:::note
**If the above success criteria match, then follow the next step as (step 4) and in sequence for the next.**
:::

```json title="Example Response: 200"
{
    "traceID": "8bd4c342-eb46-435b-b6c5-3532b11abe2a",
    "responseTimestamp": "2024-05-28T07:30:33.020+00:00",
    "responseCode": "3DS_1000",
    "responseMessage": "Three DS Transaction Successful.",
    "threeDSProviderResponse": {
        "transID": "c19d5b5b-0dd6-47f4-98ad-096f319cd8c6",
        "threeDs2TransactionId": "619eeb8c-4020-4dcd-9594-aaa53bd6a5e9",
        "challengeRequired": true,
        "redirectUrl": "https://3dsecuresuite.uat.sandbox-netvalve.com?transId=c19d5b5b-0dd6-47f4-98ad-096f319cd8c6&acsWindowSize=5&t=eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5YWRkYTQ3ZS1hNDE2LTQ2ZjgtODdhYS04OGU5ODIwNDNiYzgiLCJpYXQiOjE3MTY4ODE0MzgsImV4cCI6MTcxNjg4MjAzOCwiaXNzIjoiTkVUVkFMVkUiLCJ0eG5JZCI6ImMxOWQ1YjViLTBkZDYtNDdmNC05OGFkLTA5NmYzMTljZDhjNiIsInN0YXR1cyI6IkFDU19SRVFVSVJFRCIsInByb3ZpZGVyIjoiQ0FSRElOQUwifQ.AHW72RgzRthk1YDBWqIJy4oNcXebxeYCLEzvJUFrj9I",
        "status": "ACS_REQUIRED",
        "threeDsVersion": "2.0.0"
    },
    "midId": 2,
    "netvalveMidId": "289e253d-f955-4e29-a2c7-bb1805883ee0"
}
```
```json title="Example Response: Error"
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
        "status": "INITIALIZATION_FAILED"
    }
}
```

### FLOW C: Device Data Collection Required

See [V2 Flows](v2-flows.md) for a description of this flow.

**Success Criteria**: the response must contain the data listed below and the client should add those checks.

- <code>"responseCode" = "3DS_1000"</code>
- <code>"transID" = (Non Null value)</code>
- <code>"redirectUrl" = (Non Null value)</code>
- <code>"status" = INITIALIZED</code>

:::note
**If the above success criteria match, then follow the next step as (step 2) and in sequence of the next.**
:::

```json title="Example Response: 200"
{
    "traceID": "dbea8561-4990-4582-b370-66ab2696f39a",
    "responseTimestamp": "2023-10-17T08:52:17.845+00:00",
    "responseCode": "3DS_1000",
    "responseMessage": "Three DS Transaction Successful.",
    "threeDSProviderResponse": {
        "transID": "146f7ded-2ea9-41c1-a56a-2d182322aab7",
        "referenceId": "124cf1a9-b211-4f7f-8cf1-a9b2115f7fb0",
        "threeDs2TransactionId": "6bb67882-1562-42c0-ae06-26875c6a62e3",
        "redirectUrl": "https://gateway.sandbox-netvalve.com/threeds/ddc?transId=146f7ded-2ea9-41c1-a56a-2d182322aab7&t=eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJlOWE3OWM4My04ZTc3LTQ4MzctYjkzOS1hOTk2ODU4OWExMTMiLCJpYXQiOjE2OTc1MzI3MzgsImV4cCI6MTY5NzUzMzMzOCwiaXNzIjoiTkVUVkFMVkUiLCJ0eG5JZCI6IjE0NmY3ZGVkLTJlYTktNDFjMS1hNTZhLTJkMTgyMzIyYWFiNyIsInN0YXR1cyI6IklOSVRJQUxJWkVEIiwicHJvdmlkZXIiOiJSWVZZTCJ9.MAlQjy-aL7lYLrpEVxYtsBFkBdkoMWI7_q_p1QHCJtU",
        "status": "INITIALIZED"
    },
    "midId": 2,
    "netvalveMidId": "289e253d-f955-4e29-a2c7-bb1805883ee0"
}
```

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