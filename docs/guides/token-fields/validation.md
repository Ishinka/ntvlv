---
sidebar_position: 5
sidebar_label: Validation
---

# Token Fields Validation

The SDK includes built-in validation that prevents form submission if any of the fields contains invalid data.

View all the [emitted events](events.md).

## Default Behavior

The form will not submit unless all fields pass validation

Invalid fields will display in red (unless overridden in style properties)

Validation occurs on the input blurevent, as well as after the submit button is clicked.

## Custom Validation Handling

For more control over validation, you have two options:

1. Validation Callback
```js
function customValidate(message) {
    if (!message.success) {
        // Handle invalid field
        console.log(`${message.fieldName} - validation failed)
    }
}

Netvalve.initTokenFields({
    formId: 'paymentForm',
    onValidate: customValidate
});
```
2. Custom Event Handler

Event Name: <code>field-validation</code>

```js
window.addEventListener('field-validation', (event) => {
  const message = event.detail;
  // Handle validation result
});
```
The message has this object structure:

```js
  {
      type: 'field-validation',
      fieldName: 'cardNumber' | 'cardCvv' | 'cardExpiry',
      success: boolean,
      message: string,
      paymentToken: string
  }
```

## Handling Failed Tokenization

In rare cases where tokenization fails on the Netvalve server, the form will not submit even if the validation . You can handle these cases using the tokenization event:

Event Name: <code>field-tokenization</code>
```js
window.addEventListener('field-tokenization', (event) => {
        const result = event.detail;
        // result structure:
        {
            type: 'field-tokenization',
            fieldName: 'cardNumber' | 'cardCvv' | 'cardExpiry',
            success: boolean,
            message: string,
            paymentToken: string
        }
        if (!result.success) {
            showError('Failed to process card details.');
        }
});
```

## Additional Documentation

- [SDK Integration](sdk-integration.md)
- [Styling](styling.md)
- [Form Submission](form-submission.md)

