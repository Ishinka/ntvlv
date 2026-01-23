---
sidebar_position: 25
---

# Apple Pay™ Integration

## Overview

Apple Pay™ provides an easy and secure way to make payments in your iOS, iPadOS, and watchOS apps, and on websites in Safari. And now, Apple Pay can also be used in Messages for Business and in iMessage extensions. By using Face ID, Touch ID, or double-clicking Apple Watch, users can quickly and securely provide their payment, shipping, and contact information to check out. Customers love the simplicity of Apple Pay, and you’ll love the increased conversion rates and new user adoption that come with it.

## Prerequisites

Before integrating Apple Pay into your system, ensure you meet the following prerequisites:

1. **Apple Developer Account**: You must have access to an Apple Developer account.
2. **Payment Processing Certificate**: Obtain a payment processing certificate. This certificate ensures secure communication between your server and Apple.
3. **Merchant Identity Certificate and Merchant Identity Validation**: Obtain a merchant identifier from Apple and generate certificated. This identifier links your Apple Developer account with your payment processing certificate.

## Integration Steps

Follow these steps to integrate Apple Pay into your system:

1. **Configure Payment Processing Certificate**:
	- Install the payment processing certificate on your server. This certificate ensures secure communication with Apple servers.
	- Refer to [this documentation](https://developer.apple.com/help/account/configure-app-capabilities/configure-apple-pay#create-a-payment-processing-certificate) for detailed instructions on installing the certificate.

2. **Configure Merchant Identity Certificate and Validation**:

	- Configure Merchant Identity Certificate and Validate your merchant identifier with Apple. This step confirms your identity and enables Apple Pay for your account.
	- Refer to [this documentation](https://developer.apple.com/help/account/configure-app-capabilities/configure-apple-pay#create-a-merchant-identifier) for detailed instructions regarding the merchant identity certificate and validation.

3. **Verify the Domain**:

	- Refer to [this document](https://developer.apple.com/documentation/applepaywebmerchantregistrationapi/preparing_merchant_domains_for_verification) on how to verify the domain.

4. **Share certificates with NetValve developers**:

	- Send both certificates with Netvalve developers so those can be configured within the system.

5. **Integrate it with Your Platform**:

	- Depending on your platform integrate Apple Pay into your checkout process.
	- Apple Pay returns the encrypted payment data payload once the user has successfully authorized the payment transaction. This typically occurs after the user confirms the payment on their device using Touch ID, Face ID, or passcode, depending on the authentication method they've set up.
	- Once the payment authorization process is completed on the user's device, Apple Pay securely transmits the encrypted payment data payload to your backend server for further processing. This payload contains all the necessary information to process the payment, including details about the payment method, transaction identifier, and encrypted payment data.
	- As a response, Apple Pay will provide the encrypted payload. 

```json title="Example of Apple Pay payload"
{
    "data": "j2DEV4+KvjvAVJgAYW/T2Tj0XfWHwlCH2t2swU0HX+benHAd6J+Qc63Y2CO+JsG+my8rnL6DNqNXslrplLw3ZeeBVRF1eVw93onpc5ZbfKUBRl0FQAesBmPIEYfRWiaAgq/7FWyio3a12r5IlfYBDImHDZJGmP92STH5Nl4ZhRWlIlW7N+G9ZgeqY+0V0GKiQWQyEjOrAUILUqfPctOmmXGabQuG1nFyaQJ25JEemU3KkcYMTxVs4kunnwt8TZUl/NOutV6ghis3xZfWMBF4WkjzpTll7rm3pC/7p63i9Ne7ORZBByOfOHzpHNEPq03p4ytMJzweVvdjmRgwQkJOaT4A5VUQYE7Zuv6/99+HfSbGlBPrSYFkRu8zjc1VAE/P8kxyi4uMyhlBhBDH4tjxk9rF2eTT0A5DOe81BGvmsu8=",
    "signature": "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",
    "header": {
        "publicKeyHash": "IhhPGBcPOucUmM3XS6gAYDaBSVrY+afwSf1Y+sCG9pY=",
        "ephemeralPublicKey": "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEozFHMd8s3HUYSexnYBDi7Bsu2LCnrUII/T2f7Dq4zNnrUvy73h8OC/rZwpML4HyDepBQWcAWMYxoINBEVRo2wQ==",
        "transactionId": "ad6432495110a7ebeaf8ed048efa81cec5912233ef7fbe6ceaff03ceca0cd6ab"
    },
    "version": "EC_v1"
}
```

This Apple Pay payload should be included as part of the NetValve payment request body (i.e. Sale operation):

```json title="Example Request"
{
    "amount": 100.00,
    "clientOrderId": {{clientOrderId}},
    "currency": "USD",
    "customerAddress": "Skopje",
    "customerCity": "Skopje",
    "customerCountryCode": "US",
    "customerEmail": "john.doe@netvalve.com",
    "customerIp": "123.123.123.123",
    "customerName": "John",
    "customerLastName": "Doe",
    "customerPhone": "+3123123112312",
    "customerState": "Mkd",
    "customerZipCode": "1000",
    "midId": 13,
    "paymentType": "WALLET",
    "walletType": "APPLE_PAY",
    "applePaySSL": {
        "paymentData": {
            // Insert Apple Pay payload here.
        },
        "paymentMethod": {
            "displayName": "Visa 0326",
            "network": "Visa",
            "type": "debit"
        },
        "transactionIdentifier": "ad6432495110a7ebeaf8ed048efa81cec5912233ef7fbe6ceaff03ceca0cd6ab"
    }
}
```

The full request body example should look like this:

```json title="Full Request Example"
{
    "amount": 100.00,
    "clientOrderId": {{clientOrderId}},
    "currency": "USD",
    "customerAddress": "Skopje",
    "customerCity": "Skopje",
    "customerCountryCode": "US",
    "customerEmail": "john.doe@netvalve.com",
    "customerIp": "123.123.123.123",
    "customerName": "John",
    "customerLastName": "Doe",
    "customerPhone": "+3123123112312",
    "customerState": "Mkd",
    "customerZipCode": "1000",
    "midId": 13,
    "paymentType": "WALLET",
    "walletType": "APPLE_PAY",
    "applePaySSL": {
        "paymentData": {
            "data": "j2DEV4+KvjvAVJgAYW/T2Tj0XfWHwlCH2t2swU0HX+benHAd6J+Qc63Y2CO+JsG+my8rnL6DNqNXslrplLw3ZeeBVRF1eVw93onpc5ZbfKUBRl0FQAesBmPIEYfRWiaAgq/7FWyio3a12r5IlfYBDImHDZJGmP92STH5Nl4ZhRWlIlW7N+G9ZgeqY+0V0GKiQWQyEjOrAUILUqfPctOmmXGabQuG1nFyaQJ25JEemU3KkcYMTxVs4kunnwt8TZUl/NOutV6ghis3xZfWMBF4WkjzpTll7rm3pC/7p63i9Ne7ORZBByOfOHzpHNEPq03p4ytMJzweVvdjmRgwQkJOaT4A5VUQYE7Zuv6/99+HfSbGlBPrSYFkRu8zjc1VAE/P8kxyi4uMyhlBhBDH4tjxk9rF2eTT0A5DOe81BGvmsu8=",
            "signature": "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",
            "header": {
                "publicKeyHash": "IhhPGBcPOucUmM3XS6gAYDaBSVrY+afwSf1Y+sCG9pY=",
                "ephemeralPublicKey": "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEozFHMd8s3HUYSexnYBDi7Bsu2LCnrUII/T2f7Dq4zNnrUvy73h8OC/rZwpML4HyDepBQWcAWMYxoINBEVRo2wQ==",
                "transactionId": "ad6432495110a7ebeaf8ed048efa81cec5912233ef7fbe6ceaff03ceca0cd6ab"
            },
            "version": "EC_v1"
        },
        "paymentMethod": {
            "displayName": "Visa 0326",
            "network": "Visa",
            "type": "debit"
        },
        "transactionIdentifier": "ad6432495110a7ebeaf8ed048efa81cec5912233ef7fbe6ceaff03ceca0cd6ab"
    }
}
```
6. **Test Integration**: Test the Apple Pay integration thoroughly in a sandbox environment. Ensure that payments are processed correctly and securely.

7. **Go Live**: Once testing is successful, deploy the Apple Pay integration to your live environment. Monitor transactions and performance to ensure everything functions as expected.

## Enable Apple Pay on Hosted Payment Page
In order to use Apple Pay on Hosted Payment Page, it’s required to enable the option on Backoffice and add private key and certificate

## Testing

Apple Pay™ is available for testing in a Sandbox environment. Ensure to indicate the test environment openly during the integration process. Contact Netvalve support department for assistance with Sandbox environment registration and integration involving the Apple Pay payment method.

## Additional Resources

- [Apple Pay Developer Documentation](https://developer.apple.com/documentation/passkit/apple-pay);
- [Apple Pay Developer - Setting Up Apple Pay](https://developer.apple.com/documentation/passkit/setting-up-apple-pay);
- [Apple Pay Developer - Apple Pay on the Web](https://developer.apple.com/documentation/applepayontheweb).