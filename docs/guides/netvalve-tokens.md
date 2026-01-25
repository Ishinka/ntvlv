---
sidebar_position: 36
sidebar_label: NetValve Tokens
---

# NetValve Tokens and Usage

**Tokens** in payment processing are secure, non-sensitive representations of sensitive financial information such as credit card numbers or bank account details. Instead of storing or transmitting the actual card or bank details, a token is used—this enhances security and helps with compliance (such as PCI DSS).

## Token Description

A token is a randomly generated string or number that stands in for the real data.

It is created by the payment gateway when you send payment details — either from your website, app, or POS system.

The token is linked to the sensitive data on the gateway’s secure servers and can only be used by authorized systems.

## Usage of Tokens

- **Payment Transactions**: Use the token to process payments without ever handling the actual card information again.
- **Recurring Payments/Subscriptions**: Store the token for recurring billing. The customer’s info remains safe; you use the token for future charges.
- **Reduced PCI Scope**: Your business doesn’t have to store sensitive data; only tokens, which are useless if stolen, reducing your compliance burden.

You create a token that represents your payment data (such as card details) securely, and then use that token to make payments or perform transactions without repeatedly exposing sensitive information.

Here’s a typical flow for token creation and usage:

### Option 1: Token Creation (Standalone) With Card Verification

This option allows you to create the token and validates the card by performing 0$ authorization with the issuing bank.

**Request**

```bash title="Example Request"
curl --location 'https://payment-api.uat.sandbox-netvalve.com/createToken' \
--header 'Content-Type: application/json' \
--header 'netvalve-client-id: AAAA-BBB-CCCCC-DDDD-e9adsad6d7c705' \
--header 'netvalve-api-key: XXXXXXXXXX' \
--data '{
 "cardExpireMonth": "12",
 "cardExpireYear": "2025",
 "cardSecurityCode": "996",
 "cardHolderName": "TEST2 PATIENT",
 "cardNumber": "6011000993026909",
 "currency": "USD",
 "netvalveMidId": "AAAA-YYYYY-4613-b067-29320f131686",
 "verify":true
}'
```

**Response**
```json title="Example Response"
{
    "traceID": "2a7efd6b-8769-418c-bddf-6e6e64877a6a",
    "responseTimestamp": "2025-08-28T13:48:33.380+00:00",
    "transactionID": 39725,
    "responseCode": "GTW_1000",
    "responseMessage": "Transaction Approved/ Request Successful.",
    "responseCodeType": "APPROVED",
    "paymentMethod": "CARD",
    "cardNumber": "601100******6909",
    "cardType": "DISCOVER",
    "bankTransactionId": "524013758071",
    "authCode": "DSC986",
    "midId": aaa,
    "netvalveMidId": "AAAA-YYYYY-4613-b067-29320f131686",
    "cardExpiryMonth": "12",
    "cardExpiryYear": "2025",
    "paymentToken": "23ee9bf0-0270-4752-8ced-a47a8ceeccc",
    "paymentTokenType": "GATEWAY_TOKEN",
    "transactionType": "AUTHORIZATION"
}
```

### Option 2: Token Creation (Standalone) Without Card Verification

This option allows you to create the token with basic card validation but card number will not be verified with the card issuer.

**Request**
```bash title="Example Request"
curl --location 'https://payment-api.uat.sandbox-netvalve.com/createToken' \
--header 'Content-Type: application/json' \
--header 'netvalve-client-id: xxxxx-yyyy-460e-a50a-e9asdadasd' \
--header 'netvalve-api-key: adasdadasdads' \
--data '{
 "cardExpireMonth": "12",
 "cardExpireYear": "2025",
 "cardSecurityCode": "999",
 "cardHolderName": "Test2 Patient",
 "cardNumber": "4012000098765439",
 "clientId": 1034,
 "currency": "USD",
 "netvalveMidId": "cccccddd-f955-4e29-a2c7-aaaaaa",
 "verify":false
}'
```
**Response**
```json title="Example Response"
{
    "traceID": "5640a739-0cab-4415-be25-e500e2ad3909",
    "responseTimestamp": "2025-11-18T09:23:09.292+00:00",
    "responseCode": "GTW_1000",
    "paymentToken": "f537d00b-877f-4504-a8ae-f66e8f509609",
    "paymentTokenType": "GATEWAY_TOKEN"
}
```

### Option 3: Token Creation as part of Auth/Sale

This option allows you to create the tokens as part of the Auth/Sale transactions.

**Endpoint**: paymentApiUrl/sale

**Request**
```json title="Example Request Body"
{
    "amount": 12.00,
    "cardExpireMonth": "12",
    "cardExpireYear": "2025",
    "cardHolderName": "Yogesh Dahe",
    "cardSecurityCode": "999",
    "cardNumber": "4012000098765439",
    "clientOrderId": "YD_{{clientOrderId}}",
    "currency": "USD",
    "customerAddress": "AAA",
    "customerCity": "BVVV",
    "customerCountryCode": "US",
    "customerEmail": "test@test.com",
    "customerIp": "123.123.123.123",
    "customerName": "John",
    "customerLastName": "Doe",
    "customerPhone": "+3123123112312",
    "customerState": "Mkd",
    "customerZipCode": "1000",
    "netvalveMidId": "{{netvalveMidId}}"
}
```
**Response**
```json title="Example Response"
{
    "traceID": "49e90eb9-55f8-497c-b4b2-eb8574deb204",
    "responseTimestamp": "2025-11-18T09:26:25.898+00:00",
    "transactionID": 64023,
    "responseCode": "GTW_1000",
    "responseMessage": "Transaction Approved/ Request Successful.",
    "responseCodeType": "APPROVED",
    "paymentMethod": "CARD",
    "cardNumber": "401200******5439",
    "cardType": "VISA",
    "bankTransactionId": "532209502238",
    "authCode": "TAS757",
    "midId": AAAA,
    "netvalveMidId": "aaaaaa-69f2-4e2e-b75e-aaaaaa",
    "cardExpiryMonth": "12",
    "cardExpiryYear": "2025",
    "paymentToken": "38a5f789-7ca8-45c4-bc9f-1114d2d706b",
    "paymentTokenType": "GATEWAY_TOKEN",
    "transactionType": "SALE"
}
```

## Comparison

| Method | Card Verification| Typical Usage| Response Token Type| 
|:------ |:---------------- |:------------ |:------------------ |
| Standalone Token Create (verify:true)| Yes| First-time tokenization| GATEWAY_TOKEN| 
| Standalone  Token Create (verify:false)| No| Fast/tokenize-only| GATEWAY_TOKEN| 
| Part of Auth/Sale| Yes| Immediate charge + token| GATEWAY_TOKEN|

## Token Usage

### Payment Using a Token

1. When you want to process a payment, you can send the token (instead of raw card data) to NetValve payment endpoint.
2. NetValve validates the token and processes the transaction against the underlying card/bank account.

### Customer Initiated Transaction with Token

**Endpoint**: paymentApiUrl/sale


```json title="Example Request Body"
{
    "amount": 1.00,
    "clientOrderId": "WR_{{clientOrderId}}",  // Your order id
    "cardHolderName": "John Doe",   // Card holder name
    "customerName": "John",
    "customerLastName": "Doe",
    "currency": "EUR",
    "cardSecurityCode": 999,    // Card CVV
    "netvalveMidId": "d9246149-e9b9-4e9a-8e96-9c733878f339",
    "additionalData": {
        "credentialOnFileTransaction": "CIT",
        "requestTransactionType": "ECOMMERCE"
    },
    "paymentType": "TOKEN",
    "paymentToken": "13104873-646d-459c-aa63-d9bc6d4ad697"
}
```

### Bank/Processor Tokens

Merchants can also opt for using bank/processor tokens. In this option the bank/processor stores the card securely and shares a transaction ID or token for processing.

In this model, NetValve will be storing the details internally and the merchant will be using the Rebill API to process recurring/subscription payments:

**Step 1: Auth/Sale to create the bank token**.

For rebill, call the [Rebill API](/api#tag/Payment-Service/operation/rebillOperation) with the amount.  

## Tokens Advantages

- **Enhanced security**: Sensitive card info is never transmitted after the first tokenization.
- **Compliance**: Easier to comply with PCI DSS and other security standards.
- **User Experience**: Faster repeat payments—user doesn’t need to re-enter details.

## CIT and MIT Framework

Visa and Mastercard has CIT/MIT framework which is required for recurring or subscription transactions. 

Refer to the [Customer Initiated Transactions (CIT) and Merchant Initiated Transactions (MIT)](cit-mit-trans.md) document. 

