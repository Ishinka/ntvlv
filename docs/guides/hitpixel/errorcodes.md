---
sidebar_position: 1
description: Netvalve API Error Codes list 
id: errorcodes
---

# Netvalve API Error Codes

This page lists down the Response Codes for NetValve. Response codes tell you a lot about what happened during an API request. After sending an API request, you will receive a response containing:

- an HTTP status code;
- a response object containing a “Prefix” and “Code” that indicates the status of the request.

| Application Layer  | Prefix | Description | Example of an Error |
|:-------------------|:-------|:------------|:--------------------|
| BANK / PROCESSORS | BNK | Bank related response code. | BNK_1000, BNK_2000, etc. |
| GATEWAY| GTW| Response code from Netvalve gateway.| GTW_1000, GTW_2000, etc. |
| 3DS| 3DS| Response code related to 3DS.| 3DS_1000, GTW_3000, etc.| 
| FRAUD| FRD| Response code related to Fraud.| FRD_1000, FRD_4000, etc.|

## Defined Code Ranges

| Response Code Type | Code Range| Description| 
|:-------------------|:-------|:------------|
| APPROVED| 1000 - 1999| The request was successful/ Transaction has been approved.| 
| SOFT DECLINE| 2000 - 2999| The request was declined, though subsequent attempts may be successful.| 
| HARD DECLINE| 3000 - 3999| The request was declined. Most hard declines require the issuer or cardholder to rectify the outstanding issue(s) before a subsequent attempt can be made.| 
| RISK RESPONSES| 4000 - 4999| The request triggered a risk response.| 
| SMART ROUTING RESPONSES| 6000 - 6999| responses related to smart routing| 
