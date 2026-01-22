---
sidebar_position: 9
---

# V2 3DS API Status Codes

## HTTP 3DS Response Codes

The table below describes the possible HTTP 3DS Status Codes that you may receive.

| Code| Description| 
|:----|:-----------|
| 200| OK| 
| 401| Unauthorized| 
| 404| Bad Request| 
| 500| Service Unavailable| 

## NetValve Common 3DS Error Codes

```jsx
// 1000 series for Approval,
THREE_DS_SUCCESS("3DS_1000", "Three DS Transaction Successful."),
THREE_DS_REQUEST_SUCCESS("3DS_1001", "Request Successful."),

// 2000 series for error
THREE_DS_ERROR("3DS_2000", "Three DS Transaction Processing Error. "),
THREE_DS_REQUIRED_CALL_BACK_URL("3DS_2001", "Event Callback Url Is Missing. This Value Must Be Provided."),
THREE_DS_NOT_CONFIGURED("3DS_2002", "Mid Not configured for 3DS. Kindly contact Netvalve support."),
THREE_DS_INVALID_MERCHANT("3DS_2003", "Invalid Merchant ID. Kindly contact Netvalve support."),
THREE_DS_TRANSACTION_ID_REQUIRED("3DS_2004", "Three DS Transaction Id Is Missing. This Value Must Be Provided."),
THREE_DS_CHALLENGE_INDICATOR_REQUIRED("3DS_2005", "Challenge Indicator Is Missing. This Value Must Be Provided."),
THREE_DS_BROWSER_INFO_REQUIRED("3DS_2006", "Browser Info token Is Missing. This Value Must Be Provided."),
THREE_DS_DF_REF_ID_REQUIRED("3DS_2007", "DF Reference Id Is Missing. This Value Must Be Provided."),
THREE_DS_GATEWAY_ERROR("3DS_2008", "Three DS Transaction Processing Error from Gateway. Kindly contact Netvalve support."),
THREE_DS_IMPL_TYPE_REQUIRED("3DS_2009", "3DS implementation type Is Missing. This Value Must Be Provided."),
THREE_DS_DEVICE_DATA_NOT_COLLECTED("3DS_2010", "3DS device data not collected by browser or authentication attempted."),
THREE_DS_ACS_NOT_COMPLETED("3DS_2011", "3DS ACS not completed by user or authentication attempted."),
```

## 3DS Provider-specific error codes

```jsx title="CARDINAL"
('CARDINAL' , '3DS_2101' , 'Card authentication failed' )
('CARDINAL' , '3DS_2102' , 'Unknown device' )
('CARDINAL' , '3DS_2103' , 'Unsupported device' )
('CARDINAL' , '3DS_2104' , 'Exceeds authentication frequency limit' )
('CARDINAL' , '3DS_2105' , 'Expired card' )
('CARDINAL' , '3DS_2106' , 'Invalid card number' )
('CARDINAL' , '3DS_2107' , 'Invalid transaction' )
('CARDINAL' , '3DS_2108' , 'No card record' )
('CARDINAL' , '3DS_2109' , 'Security failure' )
('CARDINAL' , '3DS_2110' , 'Stolen card' )
('CARDINAL' , '3DS_2111' , 'Suspected fraud' )
('CARDINAL' , '3DS_2112' , 'Transaction not permitted for cardholder' )
('CARDINAL' , '3DS_2113' , 'Cardholder not enrolled in service' )
('CARDINAL' , '3DS_2114' , 'Transaction timed out at ACS' )
('CARDINAL' , '3DS_2115' , 'Low confidence' )
('CARDINAL' , '3DS_2116' , 'Medium confidence' )
('CARDINAL' , '3DS_2117' , 'High confidence' )
('CARDINAL' , '3DS_2118' , 'Very high confidence' )
('CARDINAL' , '3DS_2119' , 'Exceeds ACS maximum challenges' )
('CARDINAL' , '3DS_2120' , 'Non-payment transaction not supported' )
('CARDINAL' , '3DS_2121' , '3RI transaction not supported' )
('CARDINAL' , '3DS_2122' , 'ACS technical issue' )
('CARDINAL' , '3DS_2123' , 'Decoupled Authentication required by ACS but not requested by 3DS Requestor' )
('CARDINAL' , '3DS_2124' , '3DS Requestor decoupled max expiry time exceeded' )
('CARDINAL' , '3DS_2125' , 'Decoupled Authentication was provided insufficient time to authenticate cardholder. ACS will not make attempt' )
('CARDINAL' , '3DS_2126' , 'Authentication attempted but not performed by the cardholder' )
('CARDINAL' , '3DS_2180' , 'Error connecting to ACS / Returned on all Data Only authentications / PAN/Token not eligible for SafeKey' )
('CARDINAL' , '3DS_2181' , 'ACS timed out / Challenge exemption accepted / Message version number not supported by ACS for PAN/Token' )
('CARDINAL' , '3DS_2182' , 'Invalid response from ACS / Challenge Mandate requested but could not be performed' )
('CARDINAL' , '3DS_2183' , 'System Error response from ACS / DS dropped reason code received from ACS' )
('CARDINAL' , '3DS_2184' , 'VMID not eligible for requested program' )
('CARDINAL' , '3DS_2185' , 'VMID not eligible for requested program' )
('CARDINAL' , '3DS_2186' , 'Protocol version not supported by ACS' )
('CARDINAL' , '3DS_2187' , 'Transaction is excluded from Attempts Processing (includes non- reloadable pre-paid cards and non-payments (NPA)) / Device Channel is 3RI therefore did not route to Smart Authentication Stand-In' )
('CARDINAL' , '3DS_2188' , 'Requested program not supported by ACS' )
```
```jsx title="RYVYL"
('RYVYL' , '3DS_2015' , 'Card authentication failed' )
('RYVYL' , '3DS_2016' , 'Unknown Device' )
('RYVYL' , '3DS_2017' , 'Unsupported Device' )
('RYVYL' , '3DS_2018' , 'Exceeds authentication frequency limit' )
('RYVYL' , '3DS_2019' , 'Expired card' )
('RYVYL' , '3DS_2020' , 'Invalid card number' )
('RYVYL' , '3DS_2021' , 'Invalid transaction' )
('RYVYL' , '3DS_2022' , 'No Card record' )
('RYVYL' , '3DS_2023' , 'Security failure' )
('RYVYL' , '3DS_2024' , 'Stolen card' )
('RYVYL' , '3DS_2025' , 'Suspected fraud' )
('RYVYL' , '3DS_2026' , 'Transaction not permitted to cardholder' )
('RYVYL' , '3DS_2027' , 'Cardholder not enrolled in service' )
('RYVYL' , '3DS_2028' , 'Transaction timed out at the ACS' )
('RYVYL' , '3DS_2029' , 'Exceeds ACS maximum challenges' )
```
