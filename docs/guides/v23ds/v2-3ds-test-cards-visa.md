---
sidebar_position: 12
---

# V2 Netvalve 3DS Test Cards (VISA Cardinal) - Staging Env

:::note 
If you are testing end-to-end integration with payment (3DS+Sale/Auth) then Some of the below test cards will not work as they are specific to the 3DS Provider only and the processor staging has other test cards.
:::

**Use the below cards for full-flow**

For the expiration year field cardExpireYear, use the current year +3 (for example, when testing in 2025, you’d use 2028).

- Frictionless:<br />
cardNumber: 4000000000002701<br />
cardExpireYear: Current Year + 3  Such as 2028<br />
cardExpireMonth: 01 or in MM format.<br />
cardSecurityCode: 999/123

- Challenge Flow:<br />
cardNumber: 4000000000001091<br />
cardExpireYear: Future Year - YYYY Format such as 2028<br />
cardExpireMonth: Future Month - MM Format as 08<br />
cardSecurityCode: 999/123

## Frictionless Test Cases

### Test Case 1: Successful Frictionless Authentication

|3DS Version | Card Number |Card Exp Month |Card Exp Year |ECI |CAVV |Test Case Type|
|:--------------------- |:-------------------|:--------------|:-------------|:---|:----|:-------------|
| **Visa** 			|			|			|			| || |
| v2.1.0 | 4000000000001000  | 08 | 2028 | 05 | Yes | SUCCESS | 
| v2.2.0 | 4000000000002701 | 08 | 2028 | 05 | Yes | SUCCESS | 
| **Mastercard**	|			|			|			| || |
| v2.1.0 | 5200000000001005 | 08 | 2028 | 02 | Yes | SUCCESS | 
| v2.2.0 | 5200000000002235 | 08 | 2028 | 02 | Yes | SUCCESS |

### Test Case 2: Failed Frictionless Authentication

|Card Type | Card Number |Card Exp Month |Card Exp Year |ECI |CAVV |Test Case Type|
|:--------------------- |:-------------------|:--------------|:-------------|:---|:----|:-------------|
| **Visa** 			|			|			|			| || |
| v2.1.0 | 4000000000001018  | 08 | 2028 | 07 | No | ERROR | 
| v2.2.0 | 4000000000002925 | 08 | 2028 | 07 | No | ERROR | 
| **Mastercard**	|			|			|			| || |
| v2.1.0 | 5200000000001013 | 08 | 2028 | 00 | No | ERROR | 
| v2.2.0 | 5200000000002276 | 08 | 2028 | 00 | No | ERROR |

### Test Case 3: Attempts Stand-In Frictionless Authentication

|Card Type | Card Number |Card Exp Month |Card Exp Year |ECI |CAVV |Test Case Type|
|:--------------------- |:-------------------|:--------------|:-------------|:---|:----|:-------------|
| **Visa** 			|			|			|			| || |
| v2.1.0 | 4000000000001026  | 08 | 2028 | 06 | Yes | SUCCESS | 
| v2.2.0 | 4000000000002719 | 08 | 2028 | 06 | Yes | SUCCESS | 
| **Mastercard**	|			|			|			| || |
| v2.1.0 | 5200000000001021 | 08 | 2028 | 01 | Yes | SUCCESS | 
| v2.2.0 | 5200000000002482 | 08 | 2028 | 01 | Yes | SUCCESS |

### Test Case 4: Unavailable Frictionless Authentication from the Issuer

|Card Type | Card Number |Card Exp Month |Card Exp Year |ECI |CAVV |Test Case Type|
|:--------------------- |:-------------------|:--------------|:-------------|:---|:----|:-------------|
| **Visa** 			|			|			|			| || |
| v2.1.0 | 4000000000001034  | 08 | 2028 | 07 | No | ERROR | 
| v2.2.0 | 4000000000002313 | 08 | 2028 | 07 | No | ERROR | 
| **Mastercard**	|			|			|			| || |
| v2.1.0 | 5200000000001039 | 08 | 2028 | 00 | No | ERROR | 
| v2.2.0 | 5200000000002268 | 08 | 2028 | 00 | No | ERROR |

### Test Case 5: Rejected Frictionless Authentication by the Issuer

|Card Type | Card Number |Card Exp Month |Card Exp Year |ECI |CAVV |Test Case Type|
|:--------------------- |:-------------------|:--------------|:-------------|:---|:----|:-------------|
| **Visa** 			|			|			|			| || |
| v2.1.0 | 4000000000001042  | 08 | 2028 | 07 | No | ERROR | 
| v2.2.0 | 4000000000002537 | 08 | 2028 | 07 | No | ERROR | 
| **Mastercard**	|			|			|			| || |
| v2.1.0 | 5200000000001047 | 08 | 2028 | 00 | No | ERROR | 
| v2.2.0 | 5200000000002185 | 08 | 2028 | 00 | No | ERROR |

### Test Case 6: Authentication Not Available on Lookup

|Card Type | Card Number |Card Exp Month |Card Exp Year |ECI |CAVV |Test Case Type|
|:--------------------- |:-------------------|:--------------|:-------------|:---|:----|:-------------|
| **Visa** 			|			|			|			| || |
| v2.1.0 | 4000000000001059  | 08 | 2028 | 07 | No | ERROR | 
| v2.2.0 | 4000000000002990 | 08 | 2028 | 07 | No | ERROR | 
| **Mastercard**	|			|			|			| || |
| v2.1.0 | 5200000000001054 | 08 | 2028 | 00 | No | ERROR | 
| v2.2.0 | 5200000000002409 | 08 | 2028 | 00 | No | ERROR |

### Test Case 7: Error on Lookup

|Card Type | Card Number |Card Exp Month |Card Exp Year |ECI |CAVV |Test Case Type|
|:--------------------- |:-------------------|:--------------|:-------------|:---|:----|:-------------|
| **Visa** 			|			|			|			| || |
| v2.1.0 | 4000000000001067  | 08 | 2028 | 07 | No | ERROR | 
| v2.2.0 | 4000000000002446 | 08 | 2028 | 07 | No | ERROR | 
| **Mastercard**	|			|			|			| || |
| v2.1.0 | 5200000000001062 | 08 | 2028 | 00 | No | ERROR | 
| v2.2.0 | 5200000000002037 | 08 | 2028 | 00 | No | ERROR |

### Test Case 8: Timeout on cmpi_lookup Transaction

|Card Type | Card Number |Card Exp Month |Card Exp Year |ECI |CAVV |Test Case Type|
|:--------------------- |:-------------------|:--------------|:-------------|:---|:----|:-------------|
| **Visa** 			|			|			|			| || |
| v2.1.0 | 4000000000001075  | 08 | 2028 | 07 | No | ERROR | 
| v2.2.0 | 4000000000002354 | 08 | 2028 | 07 | No | ERROR | 
| **Mastercard**	|			|			|			| || |
| v2.1.0 | 5200000000001070 | 08 | 2028 | 00 | No | ERROR | 
| v2.2.0 | 5200000000002326 | 08 | 2028 | 00 | No | ERROR |

## Challenge Test Cases

### Test Case 9: Successful Step Up Authentication

|Card Type | Card Number |Card Exp Month |Card Exp Year |ECI |CAVV |Test Case Type|
|:--------------------- |:-------------------|:--------------|:-------------|:---|:----|:-------------|
| **Visa** 			|			|			|			| || |
| v2.1.0 | 4000000000001091  | 08 | 2028 | 05 | Yes | SUCCESS | 
| v2.2.0 | 4000000000002503 | 08 | 2028 | 05 | Yes | SUCCESS | 
| **Mastercard**	|			|			|			| || |
| v2.1.0 | 5200000000001096 | 08 | 2028 | 02 | Yes | SUCCESS | 
| v2.2.0 | 5200000000002151 | 08 | 2028 | 02 | Yes | SUCCESS |

### Test Case 10: Failed Step Up Authentication

|Card Type | Card Number |Card Exp Month |Card Exp Year |ECI |CAVV |Test Case Type|
|:--------------------- |:-------------------|:--------------|:-------------|:---|:----|:-------------|
| **Visa** 			|			|			|			| || |
| v2.1.0 | 4000000000001109  | 08 | 2028 | 07 | No | ERROR | 
| v2.2.0 | 4000000000002370 | 08 | 2028 | 07 | No | ERROR | 
| **Mastercard**	|			|			|			| || |
| v2.1.0 | 5200000000001104 | 08 | 2028 | 00 | No | ERROR | 
| v2.2.0 | 5200000000002490 | 08 | 2028 | 00 | No | ERROR |

### Test Case 11: Step Up Authentication is UNovailable

|Card Type | Card Number |Card Exp Month |Card Exp Year |ECI |CAVV |Test Case Type|
|:--------------------- |:-------------------|:--------------|:-------------|:---|:----|:-------------|
| **Visa** 			|			|			|			| || |
| v2.1.0 | 4000000000001117  | 08 | 2028 | 07 | No | ERROR | 
| v2.2.0 | 4000000000002420 | 08 | 2028 | 07 | No | ERROR | 
| **Mastercard**	|			|			|			| || |
| v2.1.0 | 5200000000001112 | 08 | 2028 | 00 | No | ERROR | 
| v2.2.0 | 5200000000002664 | 08 | 2028 | 00 | No | ERROR |

### Test Case 12: Error On Authentication

|Card Type | Card Number |Card Exp Month |Card Exp Year |ECI |CAVV |Test Case Type|
|:--------------------- |:-------------------|:--------------|:-------------|:---|:----|:-------------|
| **Visa** 			|			|			|			| || |
| v2.1.0 | 4000000000001125  | 08 | 2028 | 07 | No | ERROR | 
| v2.2.0 | 4000000000002644 | 08 | 2028 | 07 | No | ERROR | 
| **Mastercard**	|			|			|			| || |
| v2.1.0 | 5200000000001120 | 08 | 2028 | 00 | No | ERROR | 
| v2.2.0 | 5200000000002656 | 08 | 2028 | 00 | No | ERROR |

### Test Case 13: Bypassed Authentication

|Card Type | Card Number |Card Exp Month |Card Exp Year |ECI |CAVV |Test Case Type|
|:--------------------- |:-------------------|:--------------|:-------------|:---|:----|:-------------|
| **Visa** 			|			|			|			| || |
| v2.1.0 | 4000000000001083  | 08 | 2028 | 07 | No | ERROR | 
| v2.2.0 | 4000000000002560 | 08 | 2028 | 07 | No | ERROR | 
| **Mastercard**	|			|			|			| || |
| v2.1.0 | 5200000000001088 | 08 | 2028 | 00 | No | ERROR | 
| v2.2.0 | 5200000000002508 | 08 | 2028 | 00 | No | ERROR |

### Test Case 14: MethodURL Implementation Check

|Card Type | Card Number |Card Exp Month |Card Exp Year |ECI |CAVV |Test Case Type|
|:--------------------- |:-------------------|:--------------|:-------------|:---|:----|:-------------|
| **Visa** 			|4000100000000000|08|2028|05 |Yes| SUCCESS|
