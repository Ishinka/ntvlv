---
sidebar_position: 11
sidebar_label: HTML SDK Configuration
---

# HTML SDK Configuration Field Attributes

## <code>&lt;netvalve-tokenfields&gt;</code> HTMl Element

These are the allowed attributes:

| Attribute| Type | Description| 
|:---------|:-----|:-----------|
| formId| string| <em>Optional</em>. Provide the form element ID.| 
| submitButtonId| string| <em>Optional</em>. Provide the submit button element ID.| 
| style| string| <em>Optional</em>. Global CSS styles for all fields. | 
| invalidStyles| string| <em>Optional</em>. CSS styles applied when fields are invalid.| 
| interceptFormSubmit| boolean string (default “true”)| <em>Optional</em>. By default the form will intercept the form submission, and if tokenization succeeds, it will call <code>form.submit()</code>.<br />Set it to *false* if you would like to have control over the form submission, and perform tokenization using the <code>tokenizeFields</code> method on the <code>netvalve-tokenfields</code> web component. See [Form Submission](form-submission.md). |

## &lt;netvalve-cardnumber&gt;, &lt;netvalve-expiry&gt;, &lt;netvalve-cvv&gt; HTMl Elements

These are the allowed attributes:

| Attribute| Type | Description| 
|:---------|:-----|:-----------|
|style |string| <em>Optional</em>. CSS styles specific to this field. |

## Example Usage

```html
<netvalve-tokenfields 
    formId="payment-form"
    submitButtonId="submit-btn"
    style="font-size: 16px; color: #333;"
    invalidStyles="border-color: red; color: red;">
    <form id="payment-form">
        <netvalve-cardnumber style="padding: 10px; border-radius: 4px;"></netvalve-cardnumber>
        <netvalve-cvv style="padding: 10px; border-radius: 4px;"></netvalve-cvv>
        <netvalve-expiry style="padding: 10px; border-radius: 4px;"></netvalve-expiry>
        <button id="submit-btn" type="submit">Pay</button>
    </form>
</netvalve-tokenfields>
```
