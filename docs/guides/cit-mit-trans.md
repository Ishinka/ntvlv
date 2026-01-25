---
sidebar_position: 37
---

# CIT and MIT Transactions

**CIT (Customer Initiated Transaction)** and **MIT (Merchant Initiated Transaction)** are classification types used in payments to help card networks, payment gateways, and merchants distinguish how a transaction was initiated. These terms are important for recurring billing, card-on-file, and compliance with card network rules.

## CIT (Customer Initiated Transaction)

**Definition**: The transaction is started by the customer (cardholder) themselves.

**Typical Use Cases**: Standard e-commerce checkout, first payment in a subscription, adding a card to file, making a payment via a website/app.

**Authorization**: Requires active cardholder authentication (entry of card details, 3DSecure, etc.).

**Network Treatment**: Treated as a “fresh” or original payment, often with stronger authentication.

**Gateway Example**: <br />When using NetValve Token, you can indicate CIT with:

```json
"additionalData": {
  "requestTransactionType": "RECURRING",
  "recurringScheduleType": "CIT_COF",
  "recurrenceMode": "Initial"
}
```

## MIT (Merchant Initiated Transaction):

**Definition**: The transaction is started by the merchant without direct customer interaction at the time of charge.

**Typical Use Cases**: Recurring billing (subscriptions), automatic rebills, installments, delayed/capture, no-show, credential-on-file (COF) charges.

**Authorization**: Based on an agreement between customer and merchant, the customer’s credentials are stored securely (tokenized).

**Network Treatment**: May be exempt from certain types of authentication (PSD2/SCA), but must reference the original CIT.

**Gateway Example**:<br />In NetValve API calls, you indicate MIT with:

```json
"additionalData": {
  "requestTransactionType": "RECURRING",
  "recurringScheduleType": "MIT_SUBSCRIPTION",
  "recurrenceMode": "Repeated"
}
```

## How to Use CIT and MIT in NetValve Integration

**First Payment**: Process as a CIT (customer is present, card is verified).

**Subsequent Recurring Payments**: Process as MIT, referencing the original CIT, "requestTransactionType": "RECURRING".

## Why Is This Important?

- Meets requirements for card network rules and regulatory compliance (like PSD2 in Europe).
- Reduces likelihood of declined recurring or unscheduled merchant-initiated payments.
- Ensures correct liability shift and chargeback rights.

### <code>RecurringScheduleType</code> Values

| Value | Description|
|:------|:-----------| 
| CIT_COF| Customer Initiated - Credential on File| 
| CIT_STANDING_ORDER| Customer Initiated - Standing Order (variable amount, fixed frequency)| 
| CIT_SUBSCRIPTION| Customer Initiated - Subscription (fixed amount and fixed frequency)| 
| MIT_UNSCHEDULED_COF| Merchant Initiated - Unscheduled Credential on File| 
| MIT_STANDING_ORDER| Merchant Initiated - Standing Order (variable amount, fixed frequency)| 
| MIT_SUBSCRIPTION| Merchant Initiated  - Subscription (fixed amount and fixed frequency)|

### <code>RequestTransactionType</code> Values

| Value | Description|
|:------|:-----------| 
| RECURRING | Recurring transaction type| 
| ECOMMERCE| eCommerce transaction type |