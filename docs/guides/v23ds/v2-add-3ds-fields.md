---
sidebar_position: 8
---

# V2 Add 3DS Fields in Sale API (Flows A, B, C)

At this point, the required 3DS values for the Sale API have been received either from:

- The [Initialisation API](initialisation-api.md) response;
- The [Auth API](v2-3ds-auth.md) response;
- The [Get Result API](v2-3ds-result.md) response.

## The required Sale 3DS fields

The required 3ds properties to go inside the [Sale](/api#tag/Payment-Service/operation/saleOperation) payload are

1. <code>dsTransactionId</code> 
2. <code>eci</code> 
3. <code>cavv </code>
4. <code>version</code>

This is how they are mapped to the 3DS values in either the Auth API response, or the Get Result API response.

- <code>dsTransactionId</code> >> <code>threeDs2TransactionId</code>
- <code>eci</code> >> <code>eci</code>
- <code>cavv</code> >> <code>cavv</code>
- <code>version</code> >> <code>threeDsVersion</code>

Here is a handy Javascript function to map the response:

```js
function mapThreeDsVals(response){
    const eci = response.threeDSProviderResponse.eci;
    const cavv = response.threeDSProviderResponse.cavv;
    const dsTransactionId = response.threeDSProviderResponse.threeDs2TransactionId;
    const version = response.threeDSProviderResponse.threeDsVersion;
    const threeDsVals = { dsTransactionId, eci, cavv, version };
    return threeDsVals;
}
```

## Create the Sale API Request Payload

To perform the SALE, read the [API docs here](/api#tag/Payment-Service/operation/saleOperation).

Add the 3DS values into the [Sale API request payload](/api#tag/Payment-Service/operation/saleOperation) like so:

```js
const threeDsVals = mapThreeDsVals(resultResponse); 

const salePayload = {
 ... // the required sale api fields
 3DS: threeDsVals
}
```

Example:

```json
{
  // the required sale api fields
  "3DS": {
    "dsTransactionId":"cadd2f53-9401-498c-9306-8ca28bca1a6a",
    "eci": "05",
    "cavv": "AJkBBQiQcSiQAAAAJ5BxAAAAAAA=",
    "version": "2.1.0"
  }
}
```