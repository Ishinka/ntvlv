---
sidebar_position: 1
sidebar_label: Token Fields
id: tokenfields
---

# Token Fields

## Introduction

**NetValve Token Fields** is a secure payment integration solution that allows merchants to collect credit card information without sensitive card data touching their servers. It uses a combination of web components and secure iframes to create a PCI-compliant payment form while maintaining your website's look and feel.

Once all card fields are tokenized, you receive a **secure payment token** that can be safely passed to your server to complete the sale transaction.

## Implementation Steps

1. Use the payment API to initialize token fields

- [Initialize Token Fields](initialization.md)

2. Configure the SDK and its properties

- [SDK Integration Approaches](sdk-integration.md)
- [Styling](styling.md)
- [Validation](validation.md)
- [Form Submission](form-submission.md)

3. Call the Sale API with the payment token

- [Call Sale API with token](sale-with-token.md)

## Events & Messages

- [Events](events.md)
- [Event Detail / Message Data](message-data.md)

## Properties, Callbacks & Methods

- [JavaScript SDK Configuration Properties](js-sdk-conf.md)
- [HTML SDK Configuration Field Attributes](html-sdk-conf.md)
- [SDK Methods](sdk-methods.md)