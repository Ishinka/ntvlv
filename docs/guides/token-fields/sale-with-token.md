---
sidebar_position: 7
sidebar_label: Call Sale API With Token
---

# Call Sale API With Token

The token has been provided in 2 ways:

1. In the body of the form submitted.
2. As an argument to the onSubmitPayment callback, if supplied in the JavaScript SDK configuration.

This token can now be used to call the Sale API.

## API Details

Mode: Stateless **REST** API <br />
API URL: paymentApiUrl **/sale** <br />
HTTP Method: **POST** <br />
Request Body: **JSON**<br />
Authentication: uses netvalve client ID, apiKey and basic auth.

**Request**

```json title="Example Request Body"
{
    "amount": 12.00,
    "cardHolderName": "Yogesh Dahe",
    "clientOrderId": "{{clientOrderId}}",
    "currency": "USD",
    "customerAddress": "India",
    "customerCity": "Pune",
    "customerCountryCode": "IN",
    "customerEmail": "yogesh@dahe.com",
    "customerIp": "123.123.123.123",
    "customerName": "Yogesh",
    "customerLastName": "Dahe",
    "customerPhone": "+3123123112312",
    "customerState": "PUN",
    "customerZipCode": "1000",
    "midId": {{midId}}, // Use either midId or siteId
    "siteId": {{siteId}},
    "paymentToken": "e9d74bfb-12d6-422c-a230-fdcc351afc52"
}
```

**Response**

```json title="Example Response Body"
{
    "traceID": "267d8adf-8077-49b1-af95-321252545981",
    "responseTimestamp": "2024-11-26T04:09:49.657+00:00",
    "transactionID": 1,
    "responseCode": "GTW_1000",
    "responseMessage": "Transaction Approved/ Request Successful.",
    "responseCodeType": "APPROVED",
    "paymentMethod": "CARD",
    "cardNumber": "401200******5439",
    "cardType": "VISA",
    "bankTransactionId": "432604500812",
    "authCode": "TAS639",
    "midId": 2,
    "netvalveMidId": "289e253d-f955-4e29-a2c7-bb1805883ee0"
}
```

