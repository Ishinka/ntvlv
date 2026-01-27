---
sidebar_position: 12
sidebar_label: JS SDK Configuration
---

# JavaScript SDK Configuration Properties

## Basic Usage

This is the minimum configuration required, without any additional styling, callbacks, or field element placement in the HTML markup.

```js
window.Netvalve.initTokenFields({ 
  formSelector: '#payment-form',
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
   }
});
```

## Required Fields

- `formId` (string) OR `formSelector`; 
- `fields` (if `<netvalve-cardnumber>`, `<netvalve-cvv>` and `<netvalve-expiry>` have not been placed in the HTML markup).

## Allowed Properties and Methods

| Property | Type | Required | Description | Format/Example |
|:-------- |:---- |:-------- |:----------- |:-------------- |
| formId | string| Y*| Provide the form element id.| "paymentForm"| 
| formSelector| string| Y *| | "#checkout form"| 
| payButtonId| string| Y | The submit button element id| "payButton"|
| fields | object| Y | A configuration object for each field. See Field Config below.| ``` { cardNumber: {},  cardCVV: {},  cardExpiry: {} }```| 
|inputStyles|object|N|Object of CSS styles. Applies to all fields. Note: CSS properties are not camelcase. Example: use “border-color", not borderColor. |``` { 'font-weight': 'bold' } ``` |
|invalidStyles |object|N|Object of CSS styles. Applies to all field inputs. Note: CSS properties are not camelcase. Example: use “border-color", not borderColor.|``` { border: '2px solid red', 'font-weight': 'bold' } ```|
| placeholderStyles| object | N | Applies to all field input placeholders. Note CSS properties are not camelcase. Example: use “border-color", not borderColor. | ``` {  color: 'black', 'font-weight': 'bold' } ``` |
| defaultIframeHeight| string| N| The initial height of the iframe before the form’s input styles are calculated and applied to the form. Default is 46px | “48px”| 
| interceptFormSubmit| boolean. Default = true| N| By default the form will intercept the form submission, and if tokenization succeeds, it will either call the `onSubmitPayment` callback, or call `form.submit()`. <br /> Set it to `false` if you would like control over the form submission, and perform tokenization using the `tokenizeFields` method returned by `window.Netvalve.initTokenFields`.| true / false|
| onSubmitPayment | function| N| The callback function invoked after all fields have been encrypted and the payment token ready. <br />**Parameters**: `paymentToken` <br />The string token will be passed to the callback.| ```(paymentToken) => { // form submit logic goes here } ``` |
| onValidate | function | N | The callback function invoked for each field after validation occurs (success and fail).<br /> **Parameters**: `fieldData` <br /> You can view the structure of the field data here. | ```(fieldData) => { // check field validation success or fail } ``` |


## Field Configuration

This applies to the individual field objects under the `fields` property, see above.
```json
{
  cardNumber: {}, // Field Configuration
  cardCvv: {},  // Field Configuration
  cardExpiry: {}  // Field Configuration
}
```

| Property | Type | Required | Description | Format/Example |
|:-------- |:---- |:-------- |:----------- |:-------------- |
| containerSelector | string| Y*| A CSS selector for the div container where the field element will be rendered.| ".cvv-container"| 
| inputStyles| object| N| Object of CSS styles. Overrides the global/parent inputStyles. Note CSS properties are not camelcase. Example: use “border-color", not borderColor. | ```{'font-weight':'bold'}``` |

## Advanced Implementation Using Callbacks

```js title="Example Code"
window.Netvalve.initTokenFields({
    formSelector: '#checkout .payment-form form',
    payButtonId: 'submit-button',
    inputStyles: {
        'font-size': '16px',
        padding: '8px',
        'border-radius': '4px',
        border: '1px solid #ccc'
    },
    invalidStyles: {
        border: '1px solid red'
    },
    fields: {
        cardNumber: {
          containerSelector: '#card-number-container',
          inputStyles: {
            'letter-spacing': '1px'
          }
        },
        cardCvv: {
          containerSelector: '#cvv-container'
        },
        cardExpiry: {
          containerSelector: '#expiry-container'
        }
    },
    onValidate: (fieldMessage) => {
        console.log('Field validation:', fieldMessage);
    },
    onSubmitPayment: (paymentToken) => {
        // Send token to your server
        console.log('Payment token:', paymentToken);
    }
});
```

## Manually Calling Tokenization of Fields

```js title="Example Code"
window.Netvalve.initTokenFields({
    formSelector: '#checkout',
    interceptFormSubmit: false, \\ SET TO FALSE TO HAND OVER THE FORM SUBMIT RESPONSIBILITY
    fields: {
        cardNumber: {
          containerSelector: '#card-number-container',
        },
        cardCvv: {
          containerSelector: '#cvv-container'
        },
        cardExpiry: {
          containerSelector: '#expiry-container'
        }
    },
});

document.querySelector('#submit-button')?.addEventListener('click', async (e) => {
    e.preventDefault();
    const token = await window.Netvalve.tokenizeFields(); // PERFORM TOKENIZATION
    
    if (token) document.querySelector('form')?.submit()  // TOKEN RECEIVED. SUBMITTING FORM
    else console.log('^^^^Token submission failed, received null when expecting a payment token');
});
```