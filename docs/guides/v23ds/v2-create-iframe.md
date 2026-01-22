---
sidebar_position: 4
sidebar_label: Data Collection Iframe
---

# V2 Create Device Data Collection Iframe (Flow C)

## Insert a Hidden Iframe 

The response from the [3DS Initialisation API](initialisation-api.md) includes a <code>redirectUrl</code> property. Use this URL to create a hidden iframe.

This iframe will allow the 3DS provider to perform device/browser data collection. Example iframe HTML code:

```html
<iframe
    src={redirectUrl}
    title="Device Data Collection"
    height="10"
    width="10"
    style="display: none">
</iframe>
```

## Create a POST Message Event Listener

The merchant site needs to know when the device data collection step is complete, and can proceed to call the [3DS Auth API](v2-3ds-auth). A message event is received via a [window.postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) from the iframe.

Create an event listener on the page to receive this event. For security purposes, make sure to check the origin of the message and that is comes from the NetValve's domain.

```js
// SANDBOX URL
const netvalveSandboxUrl = 'https://3dsecuresuite.uat.sandbox-netvalve.com';
// PRODUCTION URL
// const netvalveSandboxUrl = 'https://3dsecuresuite.com';

const handlePostEvent = (event) => {
  if (event.origin === netvalveSandboxUrl) {
      const data = event.data;
      // Use the data to call the Auth API
  }
};

// Be sure to attach the listener
window.addEventListener('message', handlePostEvent, false);
```

## Extract the Message Data

Inside the <code>event.data</code> is the following object:

```js
{
    result: 'SUCCESS',
    threeDsResponse: {
        status: 'INITIALIZED',
        transID: 'abc',
        providerErrorMessage: ''
    };
};
```

## Expected Properties and Values

<code>result :  'SUCCESS' | 'ERROR'</code>  Use this for error handling. 

:::note
SUCCESS refers to the success of the 3DS initialization step. It does not mean that the 3DS values have been retrieved.
:::


<code>status  :  'INITIALIZED' | 'ERROR' | 'CALLBACK_PROCESSING_ERROR' | 'TIMEOUT' 'INVALID_TRANS_ID' | 'MAX_IFRAME_RELOADS'</code>

<code>transID</code> is the required transaction ID for the [3DS Auth API](v2-3ds-auth.md).

<code>providerErrorMessage</code> will contain the error message from the 3DS provider, if any.


## Proceed to call 3DS Auth API

If the data collection step is complete and a <code>transID</code> has been received, call the [3DS Auth API](v2-3ds-auth.md).
