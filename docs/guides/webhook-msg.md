---
sidebar_position: 10
slug: webhook-msg
---

# Webhook Message

NetValve provides real-time webhook information about the status of your requests. Setting up a webhook means you automatically receive updates when there is a status change with your request.

To setup a webhook, reach out to NetValve team with your webhook URL for configuration.

## Webhook Values
The NetValve transmits the webhook message to the client server in JSON format.

### Event Name
- Possible event names

| Event | Description | 
|:----- | :---------- |
| AUTHORISED| Triggered when a payment has been authorized| 
| AUTHORISATION_FAILED| Triggered when the authorization process has failed.| 
| PURCHASED| Triggered when the Sale process has succeeded.| 
| PURCHASE_FAILED| Triggered when Sale process has failed.| 
| CAPTURED| Triggered when an AUTHORISED payment has been CAPTURED, in full.| 
| CAPTURE_FAILED| Triggered when the CAPTURE process has failed.| 
| CANCELLATION_FAILED| Triggered When the APM system declines or fails for a payment.| 
| CANCELLED| Triggered when the transaction has been cancelled.| 
| REFUNDED| Triggered when a CAPTURED payment has subsequently been refunded.| 
| REFUND_FAILED| Triggered when a REFUND request has failed.| 
| REBILLED| Triggered when a REBILL transaction is successful.| 
| REBIL_FAILED| Triggered when a REBILL transaction has failed. | 
| AUTHORISATION_PENDING| Triggered when the authorization process has PENDING as status.| 
| PURCHASE_PENDING| Triggered when the Sale process has PENDING as status. | 
| CAPTURE_PENDING| Triggered when the CAPTURE process has PENDING as status. | 
| REBILL_PENDING| Triggered when a REBILL transaction has PENDING as status. | 
| REFUND_PENDING| Triggered when a REFUND request has PENDING as status. | 
| CANCELLATION_PENDING| Triggered when a CANCEL request has PENDING as status. | 
| CHARGEBACK| Triggered when a CHARGEBACK is received. | 

## Webhook Response

### Webhook Request Handling

:::info
For successful handling, your response to the POST request should be 200. OK.

Ensure that when consuming the webhook, the response is sent promptly to prevent a timeout.

**The timeout period is set to 5 seconds.**
:::

## Sample Webhooks

```json title="PURCHASED Event"
{
    "eventName": "PURCHASED",
    "data": {
        "transactionType": "SALE",
        "clientOrderId": "XXXXXXX",
        "orderId": "111223",
        "traceId": "8e86fd12-7314-4844-965e-f080ff599dee",
        "midId": 111,
        "netvalveMidId": "",
        "responseTimestamp": "2025-10-30T06:52:46.440287045",
        "transactionId": 12334,
        "responseCode": "GTW_1000",
        "responseMessage": "Transaction Approved/ Request Successful.",
        "responseCodeType": "APPROVED",
        "amount": 10.99,
        "clientId": 123,
        "callbackConfigurationId": 123,
        "paymentType": "CARD",
        "cardNumber": "555555******1234",
        "cardType": "MASTERCARD",
        "bankTransactionId": "1234356",
        "authCode": "135226",
        "cardExpiryMonth": "01",
        "cardExpiryYear": "2029",
        "paymentToken": "",
        "siteId": "",
        "paymentTokenType": ""
    }
}
```

```json title="PURCHASE_FAILED"
{
    "eventName": "PURCHASE_FAILED",
    "data": {
        "transactionType": "SALE",
        "clientOrderId": "12334",
        "orderId": "111111",
        "traceId": "f5b79bc9-2dc7-43a4-8159-93650ef69c81",
        "midId": 111,
        "netvalveMidId": "",
        "responseTimestamp": "2025-11-04T11:45:00.74746222",
        "transactionId": 12345,
        "responseCode": "BNK_2011",
        "responseMessage": "Insufficient Funds",
        "responseCodeType": "SOFT DECLINE",
        "amount": 21.99,
        "clientId": 1,
        "callbackConfigurationId": 1,
        "paymentType": "CARD",
        "cardNumber": "411111******1234",
        "cardType": "VISA",
        "bankTransactionId": "",
        "cardExpiryMonth": "MM",
        "cardExpiryYear": "YYYY"
    }
}
```

```json title="CHARGEBACK event"
{
    "eventName": "CHARGEBACK",
    "data": {
        "transactionType": "SALE",
        "clientOrderId": "XYZ",
        "orderId": "1245",
        "traceId": "8e86fd12-7314-4844-965e-f080ff599dee",
        "midId": XX,
        "netvalveMidId": "",
        "responseTimestamp": "2025-11-03T13:40:14.217381437",
        "transactionId": 5794411,
        "responseCode": "GTW_1000",
        "responseMessage": "",
        "responseCodeType": "APPROVED",
        "amount": 10.00,
        "clientId": YY,
        "callbackConfigurationId": 1234,
        "cardNumber": "411111******1234",
        "cardType": "VISA",
        "bankTransactionId": "530306833326",
        "authCode": "135226",
        "chargebackTransactionType": "Ethoca",
        "chargebackSource": "CB-Alert",
        "cardExpiryMonth": "MM",
        "cardExpiryYear": "YYYY"
    }
}
```

```json title="List of chargeback transaction types"
Ethoca, RDR, Verify, TC40, InformAlert, Fraud, Chargeback
```

## Handling Duplicates
You might get the same webhook event multiple times. This is normal because NetValve uses a special delivery method called "at-least-once delivery." This means, NetValve will keep sending the same event until your server successfully processes it and responds.

Even if your server accepts the event, it might not always respond in time (within 5 seconds). If this happens, NetValve will assume the event wasn't handled and send it again later.

## Delivery Attempts and Retries
NetValve has two retry mechanisms when sending messages. 
The first retry mechanism is the **instant retry**. It is used when we are processing the message **for the first time**, and if its delivery fails, 3 more attempts will be made instantly. If the delivery still fails after all these attempts, the webhook message is then handled by the **scheduled retry mechanism**. It uses these intervals for delivery attempts:

- 15 minutes;
- 30 minutes;
- 1 hour;
- 2 hours;
- 4 hours;
- 8 hours;
- 16 hours;
- 24 hours.

## Suspend/Disable
If the above attempts fail to deliver the webhook message after the first 24 hours, it will be moved to a **suspend** state. NetValve has multiple suspend intervals (1 day, 3 days, 5 days, 7 days); this means that after the first suspend state, the webhook message delivery will still be retried after 1, 3, 5 and 7 days. If after all these attempts the webhook message still remains undelivered, the callback configuration will be suspended and all the new webhook messages will be put **on hold**.

## Events Order
Ideally, you should receive a webhook in the order in which the webhook events occur. However, you may not always receive the webhooks in this order.

## Authentication
There are a couple of ways to verify the authentication of the webhook.

### Custom Header / Custom Header Value

- When creating a new webhook, there is an option to provide authentication header name (<code>Custom Header</code>) and value (<code>Custom Header Value</code>).
- When the webhook request is sent to a given webhook URL, besides the request body with the transaction details, it also includes the provided custom header **name** and **value**.
- Based on those 2 parameters, it is possible to verify if the request is coming from a verified server machine.

### IP Address Restriction

- Another mechanism of preventing requests from non-verified server machines would be to whitelist the IPs of the dedicated servers.
- NetValve is capable of providing the list of IPs that could be then verified on the webhook receiver side to make sure requests are coming from a verified server machine.