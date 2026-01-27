---
sidebar_position: 15
sidebar_label: SDK Methods

---

# SDK Methods

## Accessing Methods

Depending on how chose to integrate HPF, there are 3 ways you can access the sdk’s methods

1. From <code>window.Netvalve</code>.
	```js title="Example"
	await window.Netvalve.tokenizeFields()
	```
2. From the object returned when calling <code>window.Netvalve.initFields</code> during the JS SDK setup.
	```js title="Example"
	const sdk = window.Netvalve.initFields({ })
	await sdk.tokenizeFields();
	```
3. From the &lt;netvalve-tokenfields&gt; HTML web component.
	```js title="Example"
	const sdk = document.querySelector('netvalve-tokenfields'); // GET INSTANCE
	const token = await sdk.tokenizeFields();
	```

## <code>tokenizeFields()</code> Function

<code>tokenizeFields()</code> is an asynchronous function for validating all fields and performing tokenization.

**Arguments**: None;<br />
**Returned Value**: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

- If validation and tokenization are both successful, the promise resolves to a **string token**.
- If either fails, the promise resolves to ***null***.

```js title="Example Usage"
document.querySelector('#submit-button')?.addEventListener('click', async (e) => {
    e.preventDefault(); 
    const token = await window.Netvalve.tokenizeFields(); // PERFORM TOKENIZATION
    if (token) document.querySelector('form').submit();  // TOKEN RECEIVED. SUBMITTING FORM
    else console.error('Token submission failed, received null.');
});
```

Also refer to the [Form Submission](form-submission.md) document.

## <code>allFieldsTokenized()</code> Function 

A synchronous function that checks if all required payment fields (card number, CVV, and expiry) have been successfully tokenized.

**Arguments**: None<br />
**Returned Value**: boolean

- Returns ***true*** if all the three fields have been successfully tokenized.
- Returns ***false*** if any of the fields is not yet tokenized or has failed tokenization.

```js title="Example Usage"
if (window.Netvalve.allFieldsTokenized()) {
    console.log('All fields are tokenized and ready for submission');
} else {
    console.log('Some fields still need to be tokenized');
}
```

## <code>isTokenizing()</code> Function

A synchronous function that checks if any payment field is currently in the process of being tokenized.

**Arguments**: None<br />
**Returned Value**: boolean

- Returns ***true*** if any field is currently being tokenized.
- Returns ***false*** if no fields are currently being tokenized.

```js title="Example Usage"
document.querySelector('#submit-button')?.addEventListener('click', async (e) => {
    if (window.Netvalve.isTokenizing()) {
        console.log('Please wait, tokenization in progress...');
        return;
    }
    // Proceed with tokenization
    const token = await window.Netvalve.tokenizeFields();
});
```

