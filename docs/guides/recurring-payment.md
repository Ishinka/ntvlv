---
sidebar_position: 35
---

# Recurring and Subscription Payments

NetValve offers robust options for subscription and recurring payments for the merchant. 

## How Subscription & Recurring Payments Work with NetValve

Merchants can use the options listed below to process subscription or recurring payments.

## Option 1: Use the Rebill API to process subscription or recurring payments

In this option, Credit card data is stored with the bank/processor. You can use Auth/Sale to setup a recurring transaction. Once Auth/Sale is approved, You can use netvalve transaction id to process rebills.

For each recurring/subscription cycle (e.g., monthly), initiate a payment request using netvalve transaction id using rebill API. 

**Step 1**: Use the [Auth/Sale API](/api#tag/Payment-Service/operation/saleOperation) to setup the recurring transaction. 

**Step 2**: Use the [Rebill API](/api#tag/Payment-Service/operation/rebillOperation) to process a recurring/subscription payment.

## Option 2: Use a NetValve Token to process subscription/recurring payments

In this option, Credit card data is securely stored with NetValve token vault. You need to request NetValve team to enable this option. Once configured, you can create the token with NetValve and use these tokens to process subscription or recurring payments.

To create NetValve tokens, you can use below options:

- Option A: [Token Creation with verification](netvalve-tokens#option-1-token-creation-standalone-with-card-verification);
- Option B: [Token Creation without verification](netvalve-tokens#option-2-token-creation-standalone-without-card-verification);
- Option C: [Token Creation as part of Auth/Sale](netvalve-tokens#option-3-token-creation-as-part-of-authsale).

Once a payment token is created with NetValve then you can use it to process the recurring or subscription transactions.

For more details refer to [NetValve Tokens and usage](netvalve-tokens.md) document.
 

For this option, merchant needs to follow CIT and MIT framework from Visa and Mastercard. Refer to the 
[CIT and MIT Transactions](cit-mit-trans.md) document.
 

## Option 3: NetValve Gateway managed subscription/recurring payment

In this option, the NetValve gateway will be storing the credit card data and recurring schedule. Merchant will setup the recurring schedule as part of Auth/Sale or the standalone subscription API.

Once created then NetValve gateway will be charging the customer based on the schedule.

| Option | Credit Card Storage | Merchant Flow Steps| API Reference| 
|:------ |:------------------- | :------------------| :----------- |
| 1| Bank/Processor| Auth/Sale → use transaction ID for rebill| /sale<br />/rebill| 
| 2| NetValve Token Vault| Request enablement → Token Create options, then use the token to process the payment.| /createToken, <br />/sale| 
| 3| NetValve Token Vault| Set up schedule → automatic charges as part of Auth/Sale or standalone API| /subscription/create|