---
sidebar_position: 3
sidebar_label: SDK Integration
---

# Initialize Token Fields

There are two ways to integrate the NetValve TokenFieldSDK:

- HTML Only Configuration;
- JavaScript SDK Configuration.

## HTML Only Configuration Approach

This is a minimal approach which requires no JavaScript, but doesn't support callbacks. Use this for simple form submissions where no custom handling is needed.

Simply wrap your existing payment form with the <code>netvalve-tokenfields</code> element:

```html
<netvalve-tokenfields>
    <form action="/your-payment-endpoint">
        <netvalve-cardnumber></netvalve-cardnumber>
        <netvalve-cvv></netvalve-cvv>
        <netvalve-expiry></netvalve-expiry>
        <button type="submit">Pay</button>
    </form>
</netvalve-tokenfields>
```

:::warning
**Important**: The payment &lt;form&gt; ideally should be a direct child of &lt;netvalve-tokenfields&gt;. The SDK will search for the nearest form element to intercept form submissions and handle tokenization.
:::

See all the allowed [HTML field attributes/properties](html-sdk-conf.md).

## JavaScript SDK Configuration Approach

This approach provides more control and allows you to handle callbacks. 

1. Start by providing or identifying <code>div</code> containers **where the fields will be rendered to**.

```html title="Example Code"
<form>
    <div id="card-number-container"></div>
    <div id="cvv-container"> </div>
    <div id="expiry-container"> </div>
    <button type="submit">Pay</button>
</form>
```
2. Then add a script. In the browser window there is a <code>Netvalve</code> property. Use this to call the <code>initTokenFields</code>.

```js title="Example Code"
window.Netvalve.initTokenFields({ 
  formSelector: '#payment-form', // form element, or form container div
  payButtonId: 'submitBtn', // required if using onSubmitPayment
  fields: {
      cardNumber: {
          containerSelector: '#card-number-container' 
      },
      cardCvv: {
          containerSelector: '#cvv-container'
      },
      cardExpiry: {
          containerSelector: '#expiry-container'
      }
   },
   onSubmitPayment (paymentToken) => {
     // form submission logic
     console.log('The valid payment token is: ' + paymentToken)
   }
});
```

### Script Loading Sequence 

The script containing the <code>Netvalve.initTokenFields</code> call must come AFTER the script appended in 
[Initialize Token Fields](initialization.md).

If you do not control this, or you want to ensure <code>window.Netvalve</code> is defined, use the <code>netvalve-sdk-ready</code> custom event:

```js title="Example Code"
// Wait for the SDK to be ready
window.addEventListener('netvalve-sdk-ready', function(event) {
    if (event.detail.success) {
        // Initialize the token fields with configuration
        window.Netvalve.initTokenFields({ ..//configutation })
    }
});
```

## Next Steps

View all the [JavaScript SDK configuration properties](js-sdk-conf.md).

Configure the SDK for styling, validation and form submission.

- [Styling](styling.md)
- [Validation](validation.md)
- [Form Submission](form-submission.md)

## Final Step

Use the token in place of the credit card data in the Sale API. Refer to the [Call Sale API With Token](sale-with-token.md) document.