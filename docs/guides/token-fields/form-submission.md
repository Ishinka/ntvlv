---
sidebar_position: 6
sidebar_label: Form Submission
---

# Form Submission

There are 3 ways the form submission can be handled.

1. The default form submit (the SDK intercepts the submit, and then submits it again after tokenization).
2. The <code>onSubmitPayment</code> callback form submit (the sdk intercepts the submit, tokenizes and executes the callback).
3. The programmatic form submit (the sdk does not intercept the submit at all. It provides a method for tokenization).

## The Default Form Submit

Upon form submission, as a long as an <code>onSubmitPayment</code> callback has not been provided, the SDK will by default:

- Intercept and prevent the form submission;
- Validate all fields;
- Tokenize the card data;
- Add a hidden input with <code>name="paymentToken"</code> to your form;
- Call <code>form.submit</code>, which will perform a standard browser submission to the specified action and method on the form element.

Use the <code>paymentToken</code> in the body payload of the Sale API, in place of the card details. Refer to the [Call Sale APi With Token](sale-with-token.md) document.

## The <code>onSubmitPayment</code> Callback Submit

If this callback is provided in the configuration, the **SDK will not submit the form**. 

It will execute the callback instead.

This callback will be attached to the form’s <code>submit</code> event. If a <code>submitButtonId</code> is provided, then it will be attached to the <code>click</code> event of the button. 

The SDK will:

- Intercept and prevent form submission;
- Validate all fields;
- Tokenize the card data;
- Add a hidden input with <code>name="paymentToken"</code> to the form;
- Execute the <code>onSubmitPayment</code> callback, which receives the payment token as an argument.

The SDK will not submit the form, and it is up to the logic in the callback to handle this.

```js
Netvalve.initTokenFields({
    onSubmitPayment: async (paymentToken) => {
        // Show loading state
        showLoadingSpinner();
        
        // example sending the payment token inside callback
        const response = await fetch('/api/process-payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ paymentToken })
         });
    }
});
```
:::warning
**Remember**: The payment token must be included in your Sale API request body. Loading indicators and error handling are your responsibility - the SDK focuses solely on secure card data collection and tokenization.
:::

## The Programmatic Form Submit

You may want control over when the card tokenization occurs, without any form submission interceptions preventing external form submit handlers from running.

You have the option to disable the form intercept, and call the <code>tokenizeFields</code> function to validate the form and complete tokenization. 

For details on <code>tokenizeFields</code> method refer to the [SDK Methods](sdk-methods.md) document.

Follow these steps:

### If Using the JS Config Integration

Set <code>interceptFormSubmit</code> to <code>false</code> in the configuration:
```js
window.Netvalve.initTokenFields({
    formSelector: '#checkout',
    interceptFormSubmit: false, \\ SET TO FALSE TO HAND OVER THE FORM SUBMIT RESPONSIBILITY
    
    ...// other configurations
});
```
Once the SDK completes initialization, the tokenizeFields method will be added to the <code>window.Netvalve</code> instance.

Calling this function will:

- Validate all fields;
- Tokenize the card data;
- Add a hidden input with name="paymentToken" to the form (unless there already);
- If tokenization succeeds, **it will return a promise**, which resolves to a <code>string</code> token;
- If tokenization fails, **it will return a promise**, which resolves to <code>null</code>.

```js title="Example Usage"
document.querySelector('#submit-button')?.addEventListener('click', async (e) => {
    e.preventDefault();
    const token = await window.Netvalve.tokenizeFields(); // PERFORM TOKENIZATION
    if (token) document.querySelector('form')?.submit();  // TOKEN RECEIVED. SUBMITTING FORM
    else console.error('Token submission failed, received null.');
});
```

### If Using the HTML Integration

Set the <code>interceptFormSubmit</code> attribute to <code>false</code>:

```html
<netvalve-tokenfields interceptFormSubmit="false">
   <!-- fields go here --->
</netvalve-tokenfields>
```
Then, add a script with a custom submit handler, which calls the tokenizeFields method by retrieving the web component instance:

```js
document.querySelector('#submit-button')?.addEventListener('click', async (e) => {
    e.preventDefault();
    const sdk = document.querySelector('netvalve-tokenfields'); // GET INSTANCE
    const token = await sdk.tokenizeFields(); // PERFORM TOKENIZATION
    if (token) document.querySelector('form')?.submit();  // TOKEN RECEIVED. SUBMITTING FORM
    else console.error('Token submission failed, received null.');
});
```

## Additional Documentation

- [SDK Integration](sdk-integration.md)
- [Styling](styling.md)
- [Validation](validation.md)
