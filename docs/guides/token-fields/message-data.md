---
sidebar_position: 8
sidebar_label: Event Detail / Message Data
---

# Event Detail / Message Data

Whether inside event data, or as an argument passed to a supplied callback, the data structure will always arrive in this format:

```json
{
    type: 'validation' | 'tokenization' | 'cardType' | 'initiated'
    fieldName: 'cardNumber' | 'cardCvv' | 'cardExpiry' | 'allFields',
    success: boolean,
    message: string,
    paymentToken: string
}
```

| Parameter | Value| Description |
|:--------- |:-----| :---------- |
| type | 'validation' &#124; 'tokenization' &#124; 'cardType' &#124; 'initiated'| the type of message| 
| fieldName| 'cardNumber' &#124; 'cardCvv' &#124; 'cardExpiry' &#124; 'allFields| | 
| success| boolean| result of an action. e.g. validation or tokenization| 
| message| string| *Optional*. e.g. for validation, might include a validation error string.| 
| paymentToken| string| The same paymentToken to be used in the sale API.| 
| cardTypeData| CardTypeData| Only applies if the type is `cardType` |


## CardTypeData

This is only useful for receiving the detected card type from the user:

```json
typeData?: {
    niceType: string;      // Human-readable card type (e.g., "Visa")
    type: string;          // Card type code
    patterns: number[] | [number[]];  // Valid number patterns
    gaps: number[];        // Positions of gaps in card number
    lengths: number[];     // Valid card number lengths
    code: {
        size: number;      // CVV length
        name: string;      // CVV field name (e.g., "CVV")
    };
    matchStrength?: number; // Confidence of card type match
};

```

<code>type</code> strings

```json
  | "american-express"
  | "diners-club"
  | "discover"
  | "elo"
  | "hiper"
  | "hipercard"
  | "jcb"
  | "maestro"
  | "mastercard"
  | "mir"
  | "unionpay"
  | "visa";
```
<code>niceType</code> strings

```json
  | "American Express"
  | "Diners Club"
  | "Discover"
  | "Elo"
  | "Hiper"
  | "Hipercard"
  | "JCB"
  | "Maestro"
  | "Mastercard"
  | "Mir"
  | "UnionPay"
  | "Visa";
```