---
sidebar_position: 1
id: smartrouting
---

# Smart Routing

Smart Routing is a feature of the Netvale payment gateway that directs transactions to specific payment processors/mids based on defined rules.

Clients/Accounts can be associated with multiple sites, each of which can have multiple routing rules based on Currency, Country, Card Type, and BIN. Each routing rule includes configurations for Primary Mid, Retry Mid, Cascading details, Amount Limit config, etc.

:::note
Please reach out to the Netvalve Admin to enable Smart Routing configurations. For further information, please refer to the [Smart Routing Configuration](smartroutingconf.md) document.
:::

## Integration Steps

We require the addition of a new parameter (<code>siteId</code>) in the following APIs.

```json title="Example Usage"
"siteId": "0b81bdb1-d33b-48aa-8c48-a38f5cffd558"
```

Contact NetValve Admin/Support to get <code>siteId</code> and add that in your configuration the same way you use <code>midId</code> and <code>netvalveMidId</code>.

:::warning
To process transactions using smart routing, you need to send the <code>siteId</code> parameter. Do not include the parameters <code>midId</code> or <code>netvalveMidId</code> in the API request. **If either midId or netvalveMidId is included in the request, the transaction will be processed using those parameters, and smart routing will not be utilized.**
:::

### Sale / Authorization API: added <code>siteId</code> instead of <code>midId/netvalveMidId</code>

API URL: [paymentApiUrl **/sale**](/api#tag/Payment-Service/operation/saleOperation) AND [paymentApiUrl **/authorize**](/api#tag/Payment-Service/operation/authorizeOperation) <br />
HTTP Method: **POST** <br />
Request Body: **JSON**

```json title="Request Body"
{
    "amount": 100.00,
    "cardExpireMonth": "XX",
    "cardExpireYear": "XXXX",
    "cardHolderName": {{cardHolderName}},
    "cardSecurityCode": "XXX",
    "cardNumber": {{cardNumber}},
    "clientOrderId": {{clientOrderId}},
    "currency": {{currency}},
    "customerAddress": {{customerAddress}},
    "customerCity": {{customerCity}},
    "customerCountryCode": {{customerCountryCode}},
    "customerEmail": {{customerEmail}},
    "customerIp": "123.123.123.123",
    "customerName": {{customerEmail}},
    "customerFirstName": {{customerFirstName}},
    "customerLastName": {{customerLastName}},
    "customerPhone": {{customerPhone}},
    "customerState": {{customerState}},
    "customerZipCode": {{customerZipCode}},
    "siteId": "0b81bdb1-d33b-48aa-8c48-a38f5cffd558"
}
```

There is no change in the response JSON received.

### Hosted payment page to create order API: added <code>siteId</code> instead of <code>midId/netvalveMidId</code>

API URL: [hppApiUrl **/hpp/order**](/api#tag/Hosted-Payment-Page/operation/createOrder) <br />
HTTP Method: **POST** <br />
Request Body: **JSON**

```json title="Request Body"
{
  "siteId": "0b81bdb1-d33b-48aa-8c48-a38f5cffd558",
  "amount": 0,
  "currency": "string",
  "netvalveMidId": "string",
  "clientOrderId": "string",
  "orderDesc": "string",
  "successUrl": "string",
  "cancelUrl": "string",
  "failedUrl": "string",
  "slimMode": true,
  "isBillingAndShippingDetailsSame": true,
  "customerDetails": {
    "customerIp": "string",
    "customerEmail": "string",
    "customerName": "string",
    "customerLastName": "string",
    "customerAddress": "string",
    "customerZipCode": "string",
    "customerCity": "string",
    "customerState": "string",
    "customerCountryCode": "st",
    "customerPhone": "string"
  },
  "billingDetails": {
    "billingAddress": "string",
    "billingZipCode": "string",
    "billingCity": "string",
    "billingState": "string",
    "billingCountryCode": "st"
  },
  "shippingDetails": {
    "shippingAddress": "string",
    "shippingZipCode": "string",
    "shippingCity": "string",
    "shippingState": "string",
    "shippingCountryCode": "st"
  },
  "additionalParameters": {
    "property1": "string",
    "property2": "string"
  }
}
```
There is no change in the response JSON received.

### 3DS Standalone API 

1. **3DS initialization**: Added <code>siteId</code> instead of <code>midId/netvalveMidId</code>

API URL: [paymentApiUrl **/3ds/initialization**](/api#tag/Three-DS/operation/initializationOperation) <br />
HTTP Method: **POST** <br />
Request Body: **JSON**

```json title="Request Body"
{
  "siteId": "0b81bdb1-d33b-48aa-8c48-a38f5cffd558",
  "cardNumber": "string",
  "cardExpireMonth": "string",
  "cardExpireYear": "stri",
  "cardHolderName": "string",
  "amount": 0,
  "currency": "string",
  "merchantRedirectUrl": "string"
}
```
There is no change in the response JSON received.

2. **3DS authentication**: Removed <code>midId/netvalveMidId</code>
 
API URL: [paymentApiUrl **/3ds/authentication**](/api#tag/Three-DS/operation/authenticationOperation) <br />
HTTP Method: **POST** <br />
Request Body: **JSON**

```json title="Request Body"
{
  "transID": "string",
  "amount": 0,
  "currency": "string",
  "cardNumber": "string",
  "cardExpireMonth": "string",
  "cardExpireYear": "stri",
  "cardHolderName": "string",
  "challengeIndicator": "string",
  "browserInfo": "string",
  "customerIp": "string",
  "customerEmail": "string",
  "customerName": "string",
  "customerLastName": "string",
  "customerAddress": "string",
  "customerZipCode": "string",
  "customerCity": "string",
  "customerState": "string",
  "customerCountryCode": "st",
  "customerPhone": "string",
  "dfReferenceId": "string",
  "acsWindowSize": 0
}
```
There is no change in the response JSON received.

3. **3DS result**: Removed <code>midId/netvalveMidId</code>

API URL: [paymentApiUrl **/3ds/result**](/api#tag/Three-DS/operation/resultOperation) <br />
HTTP Method: **POST** <br />
Request Body: **JSON**

```json title="Request Body"
{
  "transID": "string"
}
```
There is no change in the response JSON received.