---
sidebar_position: 9
sidebar_label: Events
---

# Events

## Custom Events
Here is a list of custom events that can be listened for.

| Event| Description|
|:-----|:-----------| 
| <span class="nwrp">field-validation</span> | Emitted on the blur event when the user types. Event detail indicates success or fail.| 
| <span class="nwrp">field-tokenization</span>| Emitted after a field attempts to tokenize on the Netvalve server. Event detail indicates success or fail. |
| <span class="nwrp">field-initiated</span>| Emitted when the input inside the iframe has finished rendering. Each field emits this.| 
| <span class="nwrp">all-fields-ready</span>| Emitted once when all 3 fields have finished rendering.| 
| <span class="nwrp">all-fields-tokenized</span>| Emitted to indicate if all 3 fields have finished tokenization. It will emit with the latest state if the <code>allFieldsTokenized()</code> [value](sdk-methods.md) changes. Event detail contains a success property to indicate if fields are tokenized or not.| 
| <span class="nwrp">card-type</span>| Emitted when the credit card type has been detected from user input. Inside the event <code>detail</code> is a property called <code>typeData</code> - see [CardTypeData](message-data#cardtypedata).| 
| <span class="nwrp">netvalve-sdk-ready</span>| Emitted once when the window.Netvalve property is globally available. Event detail contains a single object property: success. |

## Event Detail

The event detail object structure is the same for each event. See [Event Detail / Message Data](message-data.md). 

## Example Usage
```js
// Listen for all 3 fields rendered to the screen.
window.addEventListener('all-fields-ready', () => {
  console.log('Card fields have been rendered.')
});

// Listen for when all fields are tokenized
window.addEventListener('all-fields-tokenized', (event: CustomEvent) => {
    const { detail } = event;
    
    if (detail.success) {
        // All fields were successfully tokenized
        console.log('All fields tokenized successfully');
        const paymentToken = detail.paymentToken;
        submitPaymentForm(paymentToken);
    } else {
        // Tokenization failed for one or more fields
        console.error('Field tokenization failed:', detail.message);
        displayError(detail.message);
    }
});

// Listen for validation events
window.addEventListener('field-validation', (event) => {
    const { success, message, fieldName } = event.detail;
    if (!success) {
        console.log(`Validation failed for ${fieldName}: ${message}`);
    }
});

// Listen for individual field tokenization events
window.addEventListener('field-tokenization', (event) => {
    const { success, message, fieldName } = event.detail;
    if (success) {
        console.log(`${fieldName} successfully tokenized`);
    } else {
        console.log(`Failed to tokenize ${fieldName}: ${message}`);
    }
});

// Listen for individual field initialization
window.addEventListener('field-initiated', (event) => {
    const { success, message } = event.detail;
    if (success) {
        console.log('TokenFieldSDK initialized successfully');
    }
});

// Listen for card type
window.addEventListener('card-type', (e) => {
      console.log(e.detail.typeData.type); // visa
});
```