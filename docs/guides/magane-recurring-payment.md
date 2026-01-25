---
sidebar_position: 38
---

# Managing Recurring Payments with NetValve

## What is Gateway Managed Recurring

NetValve enables merchants to create and manage recurring schedules, while handling the execution of recurring payments on their behalf. This allows merchants to simply subscribe customers to recurring schedules, with the payment gateway taking full care of managing and processing the recurring transactions.

## What can you do with Gateway Managed Recurring?

- Create recurring schedules
- Update or pause existing schedules
- Fetch schedule status and associated recurring transactions
- Disable schedules once they are no longer required.

## Creating a Recurring Schedule

NetValve provides multiple ways to create recurring schedules within the system.

- Clients can create a recurring schedule for an existing transaction using the **Create Subscription API**.
- Clients can set up a recurring schedule while processing an **Authorization** or **Sale** transaction.
- Clients can create a recurring schedule during **HPP Order** creation.
- Clients can also set up a recurring schedule when creating a **token**.


### Create a Subscription for Existing Transaction

API URL: paymentApiUrl **/subscription/create** <br />
HTTP Method: **POST** <br />
Request Body: **JSON**

```json title="Example Request Body"
{
  "transactionId": 12345, // Transaction ID of the Auth or Sale
  "recurringSchedule": {
    "subscriptionName": "Creative Cloud Subscription", // Name of the subscription
    "recurringPeriod": 30,                             // Time interval in days at which the recurring payment is charged
    "startDate": "2025-12-17 10:31:00",               // First rebill date
    "endDate": null,                                   // Null = perpetual; if a date is provided, the recurring schedule ends on that date
    "recurringAmount": 50.00                           // Amount to be charged in each recurring cycle
  }
}
```

```json title="Example Response"
{
  "id": 1,
  "transactionId": 12345,
  "clientId": 12,
  "status": "ACTIVE",
  "createdDatetime": "2025-12-17T05:00:59.06905048",
  "updatedDatetime": null,
  "nextAttemptDate": "2025-12-18T10:31:00",
  "recurringType": "DAYS",
  "recurringPeriod": 30,
  "recurringAmount": 50.00,
  "failureAttempts": 0,
  "subscriptionName": "Creative Cloud Subscription",
  "description": "Creative Cloud Subscription",
  "recurringTransactionStatus": "NEW",
  "endDate": null,
  "startDate": "2025-12-17 10:31:00",
  "traceID": "73754b5f-43be-454f-9076-7eef185a039d",
  "responseTimestamp": "2025-12-17 05:00:59.10",
  "responseCode": "GTW_1004",
  "responseMessage": "Managed recurring subscription created successfully.",
  "transactions": null
}
```

### Setup a Recurring Schedule while Processing Auth or Sale Transaction

API URL: paymentApiUrl **/sale** <br />
HTTP Method: **POST** <br />
Request Body: **JSON**

```json title="Example Request Body"
{
  "amount": 10.00,
  "cardExpireMonth": "08",
  "cardExpireYear": "2025",
  "cardHolderName": "John Smith",
  "cardSecurityCode": "123",
  "cardNumber": "4100000000000100",
  "clientOrderId": 12345,
  "currency": "USD",
  "customerAddress": "Skopje",
  "customerCity": "Skopje",
  "customerCountryCode": "US",
  "customerEmail": "john@smith.com",
  "customerIp": "123.123.123.123",
  "customerName": "John",
  "customerLastName" : "Smith",
  "customerPhone": "+3123123112312",
  "customerState": "Mkd",
  "customerZipCode": "1000",
  "midId": 4,  
  "recurringSchedule": {
    "subscriptionName": "Creative Cloud Subscription", // Name of the subscription
    "recurringPeriod": 30,                             // Time interval in days at which the recurring payment is charged
    "startDate": "2025-12-17 10:31:00",               // First rebill date
    "endDate": null,                                   // Null = perpetual; if a date is provided, the recurring schedule ends on that date
    "recurringAmount": 50.00                           // Amount to be charged in each recurring cycle
  }
}
```

```json title="Example Response"
{
    "traceID": "7db60365-9ecf-4ca5-a44b-e81436da1f22",
    "responseTimestamp": "2025-12-19T05:18:54.790+00:00",
    "transactionID": 8469,
    "responseCode": "GTW_1000",
    "responseMessage": "Transaction Approved/ Request Successful.",
    "responseCodeType": "APPROVED",
    "paymentMethod": "CARD",
    "cardNumber": "410000******0100",
    "cardType": "VISA",
    "bankTransactionId": "6944e03ea2c56",
    "authCode": "4b9f90",
    "midId": 488,
    "netvalveMidId": "336715f7-ca39-44b1-83a7-4c1502166db9",
    "transactionType": "REBILL",
    "subscriptionId": 14
}
```

### Set up a Recurring Schedule when Creating a Token

API URL: paymentApiUrl **/createToken** <br />
HTTP Method: **POST** <br />
Request Body: **JSON**

```json title="Example Request Body"
{
  "amount": 10,
  "cardExpireMonth": "12",
  "cardExpireYear": "2025",
  "cardSecurityCode": "999",
  "cardHolderName": "John Smith",
  "cardNumber": "4012881888818888",
  "currency": "USD",
  "customerAddress": "123 Main St",
  "customerCity": "Skopje",
  "customerCountryCode": "US",
  "customerEmail": "john@smith.com",
  "customerIp": "192.168.1.1",
  "customerName": "John",
  "customerLastName": "Smith",
  "customerPhone": "+11234567890",
  "customerState": "MK",
  "customerZipCode": "1000",
  "midId" : 459,
  "verify":true,
  "recurringSchedule": {
    "subscriptionName": "Creative Cloud Subscription", // Name of the subscription
    "recurringPeriod": 30,                             // Time interval in days at which the recurring payment is charged
    "startDate": "2025-12-17 10:31:00",               // First rebill date
    "endDate": null,                                   // Null = perpetual; if a date is provided, the recurring schedule ends on that date
    "recurringAmount": 50.00                           // Amount to be charged in each recurring cycle
  }
}
```

```json title="Example Response"
{
    "traceID": "7db60365-9ecf-4ca5-a44b-e81436da1f22",
    "responseTimestamp": "2025-12-19T05:18:54.790+00:00",
    "transactionID": 8469,
    "responseCode": "GTW_1000",
    "responseMessage": "Transaction Approved/ Request Successful.",
    "responseCodeType": "APPROVED",
    "paymentMethod": "CARD",
    "cardNumber": "410000******0100",
    "cardType": "VISA",
    "bankTransactionId": "6944e03ea2c56",
    "authCode": "4b9f90",
    "midId": 488,
    "netvalveMidId": "336715f7-ca39-44b1-83a7-4c1502166db9",
    "transactionType": "REBILL",
    "subscriptionId": 14
}
```

### Create a Recurring Schedule during HPP Order Creation

API URL: hppApiUrl **/hpp/order** <br />
HTTP Method: **POST** <br />
Request Body: **JSON**

```json title="Example Request Body"
{
    "amount": 44.00,
    "currency": "USD",
    "midId" : 40,
    "clientOrderId": "YD_HPP_{{clientOrderId}}",
    "orderDesc": "Order for Apple 14 pro",
    "successUrl": "https://amazon.com/succss.html",
    "cancelUrl": "https://amazon.com/cancle.html",
    "failedUrl": "https://amazon.com/failed.html",
    "recurringSchedule": {
    "subscriptionName": "subscription from HPP Create Order",     
    "recurringPeriod": 30,                 
    "startDate": "2025-10-29 00:00:00",
    "endDate": null,             
    "recurringAmount": 50.00                                      
  }
}
```

```json title="Example Response"
{
    "traceID": "1a37fb72-b4eb-4bdb-b18e-aa685a3d2e56",
    "responseTimestamp": "2025-12-19T05:52:06.535+00:00",
    "orderId": 7191,
    "transactionID": 8470,
    "responseCode": "GTW_1000",
    "responseMessage": "Transaction Approved/ Request Successful.",
    "orderState": "CREATED",
    "redirectUrl": "https://checkout.dev.sandbox-netvalve.com?paymentToken=eyJlcGsiOnsia3R5IjoiRUMiLCJjcnYiOiJQLTI1NiIsIngiOiJUdXpNdUtzcVlwaXB2TUFqNVdleFJ1NGo4R0d1c0VhZm03OFM1bGEydDA0IiwieSI6InFWZmZ1eFlGX3Y5NmlSYlFZSXVJNkFaX0UzSzVPU0VaTWE3bWtPWXhKZTgifSwiZW5jIjoiQTI1NkdDTSIsImFsZyI6IkVDREgtRVMrQTI1NktXIn0.FJjWQtSRIgx-vc39IV2KXZx9wrota7ggp1eiz2Tx16Rz7QCzMw4W2w.8oJDHM-qN7tJBgLT.G4j8J2Dy8LHFvx4MxhWXJeISi8fWWMRa94x1a1ootQ8Qzy-kr6LL35wRw5yMdasyX5VTKRBcHUeffvtjM58B5iQi53LEdRTY8PmnNFWYjNjgNGi5MpLA3e391L8M4ebpHPpB-B7BfIZmtjKm2EubjlhWqdUZnnBWC5hdVtLY5fYRoMSPLFdjQPxTiB9Rf4dT_iM2tn-sKi8lRTsi-s7ZEAOFxb-EWUy3hBfPV-d_cy9BB5zGECJpOoc2ScdJfFhAsDJpqkImSRTROiKElf9uCcaxUmoN7q8zOZ9WGSA5-1lruzLQgNB348AKiwMvBKsYnphJZrgtZqXDenL4JicYKIQrx7aIroTst6sn8ScHqwUdz8fleLYbxrYgxqDFKqggmXE3gl5LfiHkyRhPk9mx9IOnUfMqm39Oq8erkTCR5EyGaxsJJunuA0hhNmntkm8oGdnOuQNA_uDeC3MEX49PRqANdTMfUjc2Kn4ol4mslJOTmDzGxEVksTH6ZcV9RyPtBlJmWtJkJPHbG60Nqz4dY_x9kQOwmcczrSpD97Cn-L-A4vKGoEL_Eu1uH4O4I61xST7qxr_IV9O-fAvF5kDdq9yiIg9n7rGFKmbLirtVI3_sooDUFZ7On5wNIUGRBsilcHm3eZeKmyTqszVxU1nI45ldJmI7ORETcotN95LzHiFAi9autb2TuNbDOiZPuQB-mGc72WQzc_xVsndjpVchVUoeB0pXUFEk_6LWCkyHgy_Kj4jNEP8Kq5VU87HxTQf1bh93d8Htql36aRjfvI9hQ4zvVnc3zL8zwpoCQdQ8S8g7kKNQ4UeDubvxlIcIBePbVLNhH0UktAgTPwqGe7HGuOobGSxqtMnzmlUcdy9oHlfTXwuEQeSn7va8Z41L_klqSSIvS2EqbcBbOAQf8z1uc2Ya8vlS5q2Md7Vw1qeKPcaMoEORsJosrmYw-lpg6PSef_KdMlS8i4C6WjX6icJ4DDF9xXeeT8pBH9vQyVxVXWCqopvnh6T9aS8WRVNeZqGWLT1_Zgri2_zSvMJs7wb5KfA_J7PW4H35ipCaG4Wznly5-hDfc5uE6JaDvo7PCMzsLniqlWnIM0RFH0DYyg8gqoWLz5xn4UhWqpdeDJeu91etmiW9EzXZdczaK1rgmg7LTue83w_LKSD2i0vjLD3pDaN3CbR3A09qnMN0lGZAuWdHo1DP-bUZ54-5oWBAmbiAylR2UMslkgR6V5wVzsQ4MresNzVf8n-KjAmGV1D82UA.a_80V49h2SsoqQbMr5ye0Q&language=en",
    "midId": 488,
    "netvalveMidId": "336715f7-ca39-44b1-83a7-4c1502166db9",
    "subscriptionId": 14
}
```

## Update a Recurring Schedule

API URL: paymentApiUrl **/subscription/update** <br />
HTTP Method: **PUT** <br />
Request Body: **JSON**

```json title="Example Request Body"
{
  "subscriptionId": 13,
  "reason": "Updates to Creative Cloud schedule",
   "recurringSchedule": {
    "subscriptionName": "Updated creative cloud subscription",
    "recurringPeriod": 15,
    "dateNextAttempt": "2026-01-10 00:00:00",        
    "endDate": null,                  
    "recurringAmount": 41.00,
    "status": "ACTIVE"                                
  }
}
```

```json title="Example Response"
{
  "id": 13,
  "transactionId": 8466,
  "clientId": 65,
  "status": "ACTIVE",
  "createdDatetime": "2025-12-19T04:47:41",
  "updatedDatetime": "2025-12-19T04:52:44.620326713",
  "nextAttemptDate": "2026-01-10T00:00:00",
  "recurringType": "DAYS",
  "recurringPeriod": 15,
  "recurringAmount": 41.0,
  "failureAttempts": 0,
  "subscriptionName": "Updated creative cloud subscription",
  "description": "Updates to Creative Cloud schedule",
  "recurringTransactionStatus": "NEW",
  "endDate": null,
  "startDate": "2025-12-19T12:31:00",
  "traceID": "7ad56918-e203-4e70-b57d-ec76bda5face",
  "responseTimestamp": "2025-12-19T04:52:44.699+00:00",
  "responseCode": "GTW_1005",
  "responseMessage": "Managed recurring subscription updated successfully.",
  "transactions": null
}

```


## Cancel a Recurring Schedule

API URL: paymentApiUrl **/subscription/cancel** <br />
HTTP Method: **PUT** <br />
Request Body: **JSON**

```json title="Example Request Body"
{
  "subscriptionId": 13,
  "reason": "Subscription not required"
}
```

```json title="Example Response"
{
    "id": 13,
    "transactionId": 8466,
    "clientId": 65,
    "status": "INACTIVE",
    "createdDatetime": "2025-12-19T04:47:41",
    "updatedDatetime": "2025-12-19T05:01:24.725072003",
    "nextAttemptDate": "2026-01-10T00:00:00",
    "recurringType": "DAYS",
    "recurringPeriod": 15,
    "recurringAmount": 41.00,
    "failureAttempts": 0,
    "subscriptionName": "Updated creative cloud subscription",
    "description": "Subscription not required",
    "recurringTransactionStatus": "NEW",
    "endDate": null,
    "startDate": "2025-12-19T12:31:00",
    "traceID": "8b800021-349b-4fcb-86a8-4bcd85f085f2",
    "responseTimestamp": "2025-12-19T05:01:24.750+00:00",
    "responseCode": "GTW_1006",
    "responseMessage": "Managed recurring subscription cancelled successfully.",
    "transactions": null
}
```

## Instant Payment of Managed Recurring Schedule

API URL: paymentApiUrl **/subscription/pay** <br />
HTTP Method: **PUT** <br />
Request Body: **JSON**

```json title="Example Request Body"
{
    "subscriptionId": 14,
    "amount": 50.00,
    "nextAttemptDate": "2026-01-17 10:42:00"                                      
}
```

```json title="Example Response"
{
    "traceID": "e4699a9a-ecf3-44ef-b129-67e51d26f469",
    "responseTimestamp": "2025-12-19T05:16:43.258+00:00",
    "transactionID": 8468,
    "responseCode": "GTW_1000",
    "responseMessage": "Transaction Approved/ Request Successful.",
    "responseCodeType": "APPROVED",
    "paymentMethod": "CARD",
    "cardNumber": "410000******0100",
    "cardType": "VISA",
    "bankTransactionId": "6944dfbb232cc",
    "authCode": "8ec7d1",
    "midId": 488,
    "netvalveMidId": "336715f7-ca39-44b1-83a7-4c1502166db9",
    "transactionType": "REBILL",
    "subscriptionId": 14
}
```

## Fetch Details for Subscription

### Get Details for a Specific Subscription

NetValve allows clients to retrieve details of a specific subscription that has been created. Clients must provide **either** the <code>subscriptionId</code> **or** the <code>transactionId</code> associated with the subscription to fetch its details.

Additionally, NetValve provides the ability to view recurring transactions that have been executed as part of the subscription’s recurring schedule. Clients can choose whether or not to include these transactions in the response by using the <code>showRelatedTransactions</code> parameter in the request.

API URL:<br /> paymentApiUrl **/subscription?transactionId=682&subscriptionId=14&showRelatedTransactions=true** <br />
HTTP Method: **GET** <br />
Request Body: **JSON**

```json title="Example Response"
[
    {
        "id": 14,
        "transactionId": 8467,
        "clientId": 65,
        "status": "ACTIVE",
        "createdDatetime": "2025-12-19T05:16:22",
        "updatedDatetime": "2025-12-19T05:18:55",
        "nextAttemptDate": "2026-01-17T10:42:00",
        "recurringType": "DAYS",
        "recurringPeriod": 30,
        "recurringAmount": 50.00,
        "failureAttempts": 0,
        "subscriptionName": "Spotify Subscription",
        "description": "Spotify Subscription",
        "recurringTransactionStatus": "COMPLETED",
        "endDate": null,
        "startDate": "2025-12-19T12:31:00",
        "transactions": [
            {
                "createdDate": "2025-12-19T05:18:53",
                "transactionType": "REBILL",
                "amount": 50.0,
                "status": "Rebilled",
                "settlementStatus": null,
                "transactionId": 8469,
                "currency": "USD",
                "authCode": "4b9f90",
                "responseCode": "GTW_1000",
                "responseMessage": "Transaction Approved/ Request Successful.",
                "responseCodeType": "APPROVED",
                "bankTransactionId": "6944e03ea2c56",
                "bankResponseCode": "00",
                "bankResponseMessage": "SUCCESS",
                "transactionReference": 8467,
                "sourceOfTransaction": "API",
                "threeDsTransaction": false,
                "smartRoutingTransaction": false
            },
            {
                "createdDate": "2025-12-19T05:16:41",
                "transactionType": "REBILL",
                "amount": 50.0,
                "status": "Rebilled",
                "settlementStatus": null,
                "transactionId": 8468,
                "currency": "USD",
                "authCode": "8ec7d1",
                "responseCode": "GTW_1000",
                "responseMessage": "Transaction Approved/ Request Successful.",
                "responseCodeType": "APPROVED",
                "bankTransactionId": "6944dfbb232cc",
                "bankResponseCode": "00",
                "bankResponseMessage": "SUCCESS",
                "transactionReference": 8467,
                "sourceOfTransaction": "API",
                "threeDsTransaction": false,
                "smartRoutingTransaction": false
            }
        ]
    }
]
```

### Get All Subscriptions Associated with the Client

NetValve allows clients to fetch a paginated list of subscriptions based on the provided filter criteria.
The API supports optional query parameters to filter subscriptions by date range, status, transaction ID, and subscription ID. If no filter parameters are provided, all subscriptions are returned based on pagination.

API URL: paymentApiUrl **/subscriptions?page=0&pageSize=10** <br />
HTTP Method: **GET** <br />
Request Body: **JSON**

```json title="Example Response"
{
    "content": [
        {
            "id": 13,
            "transactionId": 8466,
            "clientId": 65,
            "status": "ACTIVE",
            "createdDatetime": "2025-12-19T04:47:41",
            "updatedDatetime": "2025-12-19T05:06:03",
            "nextAttemptDate": "2026-01-10T00:00:00",
            "recurringType": "DAYS",
            "recurringPeriod": 25,
            "recurringAmount": 41.00,
            "failureAttempts": 0,
            "subscriptionName": "Updated creative cloud subscription",
            "description": "Updates to Creative Cloud schedule",
            "recurringTransactionStatus": "FAILED",
            "endDate": null,
            "startDate": "2025-12-19T12:31:00",
            "transactions": null
        },
        {
            "id": 14,
            "transactionId": 8467,
            "clientId": 65,
            "status": "ACTIVE",
            "createdDatetime": "2025-12-19T05:16:22",
            "updatedDatetime": "2025-12-19T05:18:55",
            "nextAttemptDate": "2026-01-17T10:42:00",
            "recurringType": "DAYS",
            "recurringPeriod": 30,
            "recurringAmount": 50.00,
            "failureAttempts": 0,
            "subscriptionName": "Spotify Subscription",
            "description": "Spotify Subscription",
            "recurringTransactionStatus": "COMPLETED",
            "endDate": null,
            "startDate": "2025-12-19T12:31:00",
            "transactions": null
        }
    ],
    "pageable": {
        "sort": {
            "unsorted": true,
            "sorted": false,
            "empty": true
        },
        "pageNumber": 0,
        "pageSize": 10,
        "offset": 0,
        "paged": true,
        "unpaged": false
    },
    "totalPages": 1,
    "totalElements": 2,
    "last": true,
    "numberOfElements": 2,
    "size": 10,
    "number": 0,
    "sort": {
        "unsorted": true,
        "sorted": false,
        "empty": true
    },
    "first": true,
    "empty": false
}
```