---
sidebar_position: 50
---

# Partial Refund

## Partial Refund Support in NetValve
NetValve supports partial refunds to provide flexibility and enhanced customer satisfaction in refund processing. A partial refund allows merchants to return a portion of the transaction amount to the customer instead of the entire payment. 

## Key Features of Partial Refund in NetValve:
Flexible Refund Amounts: Merchants can specify the exact amount to be refunded, tailored to the situation.

Seamless Integration: The feature integrates smoothly into the existing payment workflows, ensuring no disruption, the merchant can use the same refund API with a new field amount 

Transaction Tracking: Every partial refund is recorded, making it easy to track and reconcile.

## Prerequisites
Before using the partial refund feature, the client should contact the NetValve Support / Admin and ask them to enable it. 

## Partial Refunds in NetValve: Bank Support Dependency
NetValve enables partial refunds only if the Bank supports this functionality. While NetValve is designed to handle partial refunds efficiently, certain banks may impose restrictions on this feature.

### Key Highlights:
1. **Bank-Dependent Feature**:
	- If the Bank supports partial refunds, NetValve processes the refund seamlessly.
	- If the bank does not support partial refunds, NetValve will throw an error response to indicate the limitation.

2. **Exception Handling**:
	- Merchants should account for this scenario in their integration.
	- When the exception is triggered, an appropriate message or full refund options(no amount specified) can be used.

3. **API Behavior**:
	- The refund API includes validations to check for bank compatibility and refund amount balance checks.
	- For unsupported banks, the below response provides details on why the refund request could not be processed.
	```json
	{
	    "traceID": "da40c015-4d10-4110-8524-fb2116622835",
	    "responseTimestamp": "2025-01-07T05:54:15.700+00:00",
	    "responseCode": "GTW_2107",
	    "responseMessage": "Partial refund not allowed for transaction.",
	    "responseCodeType": "SOFT DECLINE"
	}
	```
	- For over-amount refund requests, the below response provides details on why the refund request could not be processed. 
	```json
	{
	    "traceID": "b1371d02-6754-4a29-930f-92b5bfbd8d5b",
	    "responseTimestamp": "2025-01-07T05:52:53.381+00:00",
	    "responseCode": "GTW_2108",
	    "responseMessage": "Refund amount should not exceed the remaining amount.",
	    "responseCodeType": "SOFT DECLINE"
	}
	```
## API Details ([Existing Refund API](/api#tag/Payment-Service/operation/refundOperation))

API URL: paymentApiUrl **/refund** <br />
HTTP Method: **POST** <br />
Request Body: **JSON**

```json title="Example Request"
{
  "transactionID": 6, // parent transaction id of sale/auth
  "amount" : 6 // partial refund amount 
}
```