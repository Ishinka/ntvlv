---
sidebar_position: 1
id: v23dsstandalone
---

# 3DS Standalone V2 Apis

The following describes the integration steps for **NetValve Standalone 3DS**. 

Contact the NetValve team to ensure the 3DS configuration steps have been followed, and you have credentials for the [API authentication](../hitpixel/api-authentication.md).

## Flow

See below the required sequence of Netvalve 3DS API calls, and the iframes/redirects to be configured on the merchant sites. See the [outline for each flow here](v2-flows.md), and a detailed description for each step in the pages below.

## Integration Steps

- [V2 Initialisation Api](initialisation-api.md) <br />Initiate the 3DS flow by calling this API. The response will indicate which flow to take - A, B, C.
- [V2 3DS Auth API (Flow C)](v2-3ds-auth.md) **Conditional**<br />Using the transID call the Auth API. If response shows challengeRequired, proceed to Step 4
- [V2 ACS challenge (Flows B, C)](v2-acs-challenge.md) **Conditional**<br />Setup the ACS challenge using an iframe or page-redirect, and wait for completion.
- [V2 3DS Result API (Flows B, C)](v2-3ds-result.md) **Conditional** <br />After being notified that the challenge is complete, call the Result API to access 3DS values.
- [V2 Add 3DS fields in Sale API (Flows A, B, C)](v2-add-3ds-fields.md) <br /> Use the 3DS values in the request body of the Sale API

## API Status Codes

Please refer to the document below for a list of API response codes and descriptions.

[V2 API Status Codes](v2-api-status-codes.md)

## Swagger API

Swagger API documentation is also available at the link below:

[NetValve Merchant Documentation](/api)

## V2 Demo Video & Source Code

Follow [this link](demo-video.md) for a demo video and a demo website source code.