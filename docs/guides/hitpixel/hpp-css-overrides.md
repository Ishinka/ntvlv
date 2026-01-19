---
sidebar_position: 7
---

# HPP CSS Overrides

You can override any styling on the HPP page. 
Here are some selectors you can use to target the DOM nodes.

```css
/* This file is used to override the default styles of the Netvalve Hosted Payment Page */

:root { /* Root css variables for the global color scheme */
    --netvalve-primary: #4cb3e0;
    --netvalve-secondary: #003c47;
    --netvalve-primary-hover: #3781a0;
    --netvalve-text-dark: #374151;
    --netvalve-text-light: #9ca3af;
    --netvalve-text-error: #dc2626;
    --white: #ffffff;
}

/** Element IDs */
#nv-color-bar {} /* Background color of the top bar */

#nv-form-container {} /* div container for the form */

#nv-form-inputs-container {} /* div container for the form inputs */

#nv-timer {} /* Timer element containing the digits of the timer */

#nv-payment-method {} /* The accepted card types */

#nv-payButton {}   /* The Pay button */

#nv-cancelButton {} /* The Cancel text link*/

#google-pay-button-container{} /* The Google Pay button container */

#apple-pay-button-container{} /* The Apple Pay button container */

/** Individual form input/select elements in the form */
#holderName {}
#cardNumber {}
#expiresMonth {}
#expiresYear {}
#holderName {}

/** SElECTIONS */

.nv-orderid {} /* Order ID and Amount span elements in the form header*/

img[data-testid="custom-logo"] {} /* The logo image in the form header */

form {} /* The form element */

.nv-input {} /* All input elements in the form */

.nv-input-select {} /* All select elements in the form */

.nv-form-error {}  /*  All validation error message span element s*/
```

You can download the CSS file <a href="hpp-css-overrides.css" download="hpp-css-overrides.css">here</a>. 

When modified the CSS document must be uploaded by a NetValve Admin to the HPP Payment Page Layout settings.