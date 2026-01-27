---
sidebar_position: 2
sidebar_label: Initialization
---

# Initialize Token Fields

The first step is to use the NetValve Payment API to generate the SDK url, which can be used to create a &lt;script&gt; element on the payment page. 

This is a serverside/backend operation.

## API Details

Mode:- Stateless REST API
API URL: paymentApiUrl **//hpf/initializeSession** <br />
HTTP Method: **GET** <br />
Authentication: uses netvalve client ID, apiKey and basic auth. [See here](/guides/hitpixel/api-authentication).<br />
Request Body: **JSON**

```json title="Example Response"
{
    "traceID": "120d2e14-e768-4b28-a4ae-32740c27d2f2",
    "responseTimestamp": "2024-12-20T08:37:25.059+00:00",
    "responseCode": "GTW_1003",
    "responseMessage": "Hosted Payment Fields Token Created Successful.",
    "netvalveScriptSrc": "https://tokenfieldsdk.dev.sandbox-netvalve.com/index.D-XdwYDH.js?version=D-XdwYDH&paymentToken=735be51c-350a-4d91-af8a-f26300804a9b&jwtToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJmMzhkYzE5MC02ZDQ2LTRiYTAtYTlhYi00ODI0NmE4MjViYjIiLCJpYXQiOjE3MzQ2ODM4NDUsImlzcyI6Ik5FVFZBTFZFIiwiZXhwIjoxNzM0Njg0MTQ1fQ.bEwrZ0rpPK_3ZEitx24-CBSgmOqAX1ZhOGYCualNRGg",
    "version": "D-XdwYDH",
    "integrity": "a9d74bfb-12d6-422c-a230-fdcc351afc52",
    "paymentToken": "735be51c-350a-4d91-af8a-f26300804a9b"
}
```

## Actions After a Successful Response

Use the <code>netvalveScriptSrc</code> to construct a &lt;script&gt; HTML element on your payment page. This script will be used to load the NetValve SDK.

It must contain the following attributes:

| Attribute |Value |  
|:------ |:------------------- |
| <code>src</code>| &lcub;&lcub;netvalveScriptSrc&rcub;&rcub;| 
| <code>integrity</code>| &lcub;&lcub;integrity&rcub;&rcub;| 
| <code>crossorigin</code>| "anonymous"| 
| <code>type</code>| "text/javascript"|

```html title="Example HTML"
<script 
  type="text/javascript" 
  integrity={{integrity}} 
  crossorigin="anonymous" 
  src={{netvalveScriptSrc}}>
</script>
```

:::note
Values displayed between double curly brackets &lcub;&lcub;&nbsp;&rcub;&rcub; indicate properties from the API response.
:::

