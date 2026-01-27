---
sidebar_position: 4
sidebar_label: Styling
---

# Token Fields Styling

The TokenFieldSDK includes an intelligent style detection system that automatically captures your existing form styles. This means you might not need to provide any additional styling configuration.

## Parent-Level Styling - Applied to All Fields

Styles applied to the <code>netvalve-tokenfields</code> element will cascade to all three card input fields.

### HTML Approach

```html title="Example HTML"
<netvalve-tokenfields style="color: black; font-size: 16px;">
    <!-- form content -->
</netvalve-tokenfields>
```

### JavaScript Approach

```js title="Example JS Code"
Netvalve.initTokenFields({
    inputStyles: {
        color: 'black',
        'font-size': '16px',
        padding: '8px',
        border: '1px solid #ccc',
        'border-radius': '4px'
    }
});
```

## Individual Field Styling

You can override the parent styles for specific fields.

### HTML Approach

```html title="Example HTML"
<netvalve-tokenfields style="color: black; font-size: 16px;">
    <netvalve-cardnumber style="color: blue;"></netvalve-cardnumber>
    <netvalve-cvv></netvalve-cvv>
    <netvalve-expiry></netvalve-expiry>
</netvalve-tokenfields>
```
Here, the rendered card number input will have a blue color with font-size 16px. The other inputs will have a black color with font size 16px.

### JavaScript Approach

```js title="Example JS Code"
Netvalve.initTokenFields({
    fields: {
        cardNumber: {
            inputStyles: { color: 'blue' }
        }
    }
});
```

## Invalid State Styling

The SDK includes built-in validation if any fields have invalid input data. By default, invalid fields will display in red text, but this can be customized using the invalidation styles:

Invalid state styles **can only be set at the parent level**.

### HTML Approach

```html title="Example HTML"
<netvalve-tokenfields invalidstyles="color: coral; border-color: red;">
    <!-- form content -->
</netvalve-tokenfields>
```

### JavaScript Approach

```js title="Example JS Code"
Netvalve.initTokenFields({
    invalidStyles: {
        color: 'coral',
        'border-color': 'red'
    }
});
```

## Additional Documentation

Configure the SDK for validation and form submission.

- [Validation](validation.md)
- [Form Submission](form-submission.md)


