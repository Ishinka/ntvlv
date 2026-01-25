---
sidebar_position: 45
---

# Partial Capture

## Partial Refund Support in NetValve

NetValve supports **partial capture** to provide flexibility and enhanced customer satisfaction in **capture** processing. A partial capture allows merchants to **capture a portion of the transaction amount** instead of the entire payment. 

## Key Features of Partial Capture in NetValve

1. **Flexible Capture Amounts**: Merchants can specify the full or partial amount to be captured, rest amount will get auto-canceled.

2. **Seamless Integration**: The feature integrates smoothly into the existing payment workflows, ensuring no disruption, the merchant can use the same capture API with new fields, like shown below:

```json
{
  "amount": 17.00,
  "transactionID":47,
  "captureOptions": {
        "finalCapture": true
    }
}
```
3. **Transaction Tracking**: Partial capture is recorded with <code>PARTIALLY_SETTLED</code> status, and rest amount with <code>CANCEL</code>.

## Prerequisites

Before using a partial capture feature client must check with NetValve Support / Admin to enable this feature. 

## Partial Capture in NetValve: Bank Support Dependency

NetValve enables partial capture only if the Bank supports this functionality. While NetValve is designed to handle partial capture efficiently, certain banks may impose restrictions on this feature.

### Key Highlights

1. **Bank-Dependent Feature**:

	- If the Bank supports partial captures, NetValve processes the capture seamlessly.
	- If the bank does not support partial capture, NetValve will throw an error response to indicate the limitation.

2. **Exception Handling**:

	- Merchants should account for this scenario in their integration.
	- When the exception is triggered, an appropriate message or full capture options can be used.

3. **API Behavior**:

	- The capture API includes validations to check for bank compatibility and capture amount  checks.
	- For unsupported banks, the below response provides details on why the capture request could not be processed. 
	```json
	{
	    "traceID": "115bef5d-f45b-4488-bf8d-bf2106873603",
	    "responseTimestamp": "2025-10-16T11:10:53.483+00:00",
	    "responseCode": "GTW_2123",
	    "responseMessage": "Partial capture not allowed for transaction.",
	    "responseCodeType": "SOFT DECLINE"
	}
	```
	- For over-amount capture requests, the below response provides details on why the capture request could not be processed. 
	```json
	{
	    "traceID": "85c38c49-943f-4613-96f9-46340fc3c089",
	    "responseTimestamp": "2025-10-16T11:07:59.183+00:00",
	    "responseCode": "GTW_2124",
	    "responseMessage": "Partial capture amount should not exceed the authorized amount.",
	    "responseCodeType": "SOFT DECLINE"
	}
	```

### Partial Capture Scenarios

1. **Valid Partial Capture** (Amount less than Authorized, finalCapture=true)

When the merchant sends a **capture request** for an amount less than the original authorized amount and includes the flag finalCapture=true, the system will:

- Capture the requested amount (e.g., $80 out of $100).
- Automatically reverse the remaining balance (e.g., $20).
- Update the transaction status to **PARTIALLY_SETTLED**.

2. **Partial Capture without finalCapture Flag** (or with finalCapture=false)

If a capture request is sent for an amount less than the authorized amount **without** the finalCapture flag or with the flag set to false:

- The system will reject the request with a **validation error**, as partial captures must explicitly indicate finalization.
- If the capture amount equals the authorized amount, the transaction will be processed successfully as a **full capture**.

3. **Invalid Amount Edge Cases**

The system performs validation on the amount field to prevent invalid inputs:

- **Zero or negative amounts** → Request is rejected with a validation error.
- **Non-numeric or blank values** (e.g., string or empty field) → Request fails with an input validation error indicating invalid amount format.

4. **Capture Request with Invalid Amount Format**

If the amount field contains an invalid data type (e.g., a string "eighty" or a blank value), the system will return a **400 Bad Request** error with a message indicating that the amount format is invalid or cannot be parsed.

### API Details ([Existing Capture API](/api#tag/Payment-Service/operation/captureOperation))

API URL: paymentApiUrl **/capture** <br />
HTTP Method: **POST** <br />
Request Body: **JSON**

```json title="Example Request"
{
  "transactionID": 6, // parent transaction id of sale/auth
  "amount" : 6 , // partial refund amount 
  "captureOptions": {
        "finalCapture": true // this is requited to get partial capture
    }
}
```