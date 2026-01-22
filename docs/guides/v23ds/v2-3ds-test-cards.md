---
sidebar_position: 11
---

# V2 Netvalve 3DS Test Cards (RYVYL) - Staging Env

|Card Type | Card Number |Card Exp Month |Card Exp Year | Challenge Required| ECI |CAVV |Test Case Type| Notes|
|:---------|:----------- |:--------------|:-------------|:------------------|:----|:----|:-------------|:-----|
| **Visa** |4100000000000100 | 08 | 2030 | N | 05 | Yes | SUCCESS | Frictionless authentication.|
| **Mastercard** |5100000000000107 | 08 | 2030 | N | 02 | Yes | SUCCESS | Frictionless authentication.|
| **Visa** |4100000000005000 | 08 | 2030 | Y | 05 | Yes | SUCCESS | Challenge required. Enter password 123456 and submit to complete authentication.|
| **Mastercard** |5100000000005007 | 08 | 2030 | Y | 02 | Yes | SUCCESS | Challenge required. Enter password 123456 and submit to complete authentication.|
| **Visa** |4100000000100009 | 08 | 2030 | N | 06 | Yes | SUCCESS | Attempted authentication.|
| **Mastercard** |5100000000100006 | 08 | 2030 | N | 01 | Yes | SUCCESS |Attempted authentication.|
| **Visa** |4100000000200007 | 08 | 2030 | N | No | No | ERROR | Card not enrolled.|
| **Mastercard** |5100000000200004 | 08 | 2030 | N | No | No | ERROR | Card not enrolled.|
| **Visa** |4100000000300005 | 08 | 2030 | Y | No | No | ERROR | Challenge required. Enter password 111111 and submit to simulate a failed authentication.|
| **Mastercard** |5100000000300002 | 08 | 2030 | Y | No | No | ERROR | Challenge required. Enter password 111111 and submit to simulate a failed authentication.|
| **Visa** |4100000000400003 | 08 | 2030 | N | No | No | ERROR | Authentication unavailable due to technical errors.|
| **Mastercard** |5100000000400000 | 08 | 2030 | N | No | No | ERROR | Authentication unavailable due to technical errors.|
| **Visa** |4100000000500000 | 08 | 2030 | N | No | No | ERROR | Authentication rejected by the ACS.|
| **Mastercard** |5100000000500007 | 08 | 2030 | N | No | No | ERROR | Authentication rejected by the ACS.|
