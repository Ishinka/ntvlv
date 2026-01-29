---
sidebar_position: 1
sidebar_label: API Integration
description: Integration steps for NetValve Payment Gateway API. 
id: hitpixel
---

import DocCardList from '@theme/DocCardList';

# Hitpixel NetValve Payment gateway API Integration

This document describes the integration steps for NetValve Payment Gateway API. 
:::info
Contact the NetValve team to ensure you have credentials for the [API authentication](api-authentication.md).
:::

## Flow

Netvalve Payment Gateway API

![Netvalve Payment Gateway API](../img/payment-flow.png)

## Integration 

### Transactional APIs

- [Authorization](/api#tag/Payment-Service/operation/authorizeOperation) transaction
- [Capture/Settlement](/api#tag/Payment-Service/operation/captureOperation) transaction
- [Sale](/api#tag/Payment-Service/operation/saleOperation) transaction
- [Refund](/api#tag/Payment-Service/operation/refundOperation) transaction
- [Rebill/Recurring](/api#tag/Payment-Service/operation/rebillOperation) transaction
- [Cancel/Void](/api#tag/Payment-Service/operation/cancelOperation) transaction

### Enquiry APIs

- [Get All Orders](/api#tag/Payment-Service/operation/exportOrders)
- [Get Order](/api#tag/Payment-Service/operation/getOrderById)
- [Get All Transactions](/api#tag/Payment-Service/operation/exportTransactions)
- [Get Transaction](/api#tag/Payment-Service/operation/getTransactionById)
- [Get Transaction result (inquiry)](/api#tag/Payment-Service/operation/inquiry)

For any reason, if you are not able to get a valid response or transaction status from the gateway like below, you can call [Inquiry API](/api#tag/Payment-Service/operation/inquiry) for transaction result status.

```json title="Example Response"
{
    "traceID": "8baeb75c-044f-43bb-a874-ce71049533a6",
    "responseTimestamp": "2024-11-08T12:38:58.140+00:00",
    "transactionID": 18747,
    "responseCode": "GTW_1000",
    "responseMessage": "Transaction Approved/ Request Successful.",
    "responseCodeType": "APPROVED",
    "paymentMethod": "CARD",
    "cardNumber": "401200******5439",
    "cardType": "VISA",
    "bankTransactionId": "431312503613",
    "authCode": "TAS390",
    "midId": 2,
    "netvalveMidId": "289e253d-f955-4e29-a2c7-bb1805883ee0"
}
```

For detailed information on the request and response structure for the aforementioned APIs, please refer to our [Swagger API](/api) documentation.

### API Error Codes

Please refer to [this document](errorcodes.md) for a list of all API response codes and their description.
