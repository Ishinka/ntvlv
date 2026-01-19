---
sidebar_position: 6
sidebar_label: API Error Codes
description: NetValve API Error Codes list 
id: errorcodes
---

# NetValve API Error Codes

This page lists down the Response Codes for NetValve. Response codes tell you a lot about what happened during an API request. After sending an API request, you will receive a response containing:

- an [HTTP status code](http-status-codes.md);
- a response object containing a “Prefix” and “Code” that indicates the status of the request.

| Application Layer  | Prefix | Description | Example of an Error |
|:-------------------|:-------|:------------|:--------------------|
| BANK / PROCESSORS | BNK | Bank related response code. | BNK_1000, BNK_2000, etc. |
| GATEWAY| GTW| Response code from NetValve gateway.| GTW_1000, GTW_2000, etc. |
| 3DS| 3DS| Response code related to 3DS.| 3DS_1000, GTW_3000, etc.| 
| FRAUD| FRD| Response code related to Fraud.| FRD_1000, FRD_4000, etc.|

## Defined Code Ranges

| Response Code Type | <span class="nwrp">Code Range</span>| Description| 
|:-------------------|:-------|:------------|
| APPROVED| <span class="nwrp">1000 - 1999</span>| The request was successful/ Transaction has been approved.| 
| SOFT DECLINE| <span class="nwrp">2000 - 2999</span>| The request was declined, though subsequent attempts may be successful.| 
| HARD DECLINE| <span class="nwrp">3000 - 3999</span>| The request was declined. Most hard declines require the issuer or cardholder to rectify the outstanding issue(s) before a subsequent attempt can be made.| 
| RISK RESPONSES| <span class="nwrp">4000 - 4999</span>| The request triggered a risk response.| 
| SMART ROUTING RESPONSES| <span class="nwrp">6000 - 6999</span>| responses related to smart routing| 

## NetValve Error Codes

```jsx
TRANSACTION_SUCCESSFULLY_COMPLETED("GTW_1000", "Transaction Approved/ Request Successful."),
REQUEST_SUCCESS("GTW_1001", getSuccessResponseMessage()),
TRANSACTION_PENDING("GTW_1002", "Transaction status is Pending."),

INVALID_MERCHANT("GTW_2000", "Invalid Merchant ID. Kindly contact NetValve support."),
REQUIRED_CVV("GTW_2001", "Missing CVV Value, Required For e-Commerce Transaction."),
INVALID_AMOUNT("GTW_2002", "Amount Value Missing /Invalid Value/ Amount Does Not Match"),
INVALID_DECIMALS_AMOUNT("GTW_2003", "Amount Value Should Be With Two Decimals."),
AMOUNT_MUST_BE_A_POSITIVE_INTEGER("GTW_2004", "Amount Value Must Be A Positive Integer."),
INVALID_CARD_NUMBER("GTW_2005", "Invalid Card Number Format."),
INVALID_CVV("GTW_2006", "Card Verification Code (CVC) or Card Verification Value (CVV) Must Be 3 or 4 Digits."),
INVALID_CUSTOMER_IP("GTW_2007", "Invalid Customer IP. Customer IP Address Must Match The Regular IP Address Format."),
AMOUNT_SMALLER_THAN_DEFINED_LOWER_LIMIT("GTW_2008", "Amount Value Incorrect. The Amount Is Smaller Than The Defined Lower Limit."),
AMOUNT_GREATER_THAN_DEFINED_LOWER_LIMIT("GTW_2009", "Amount Value Incorrect. The Amount Is Greater Than The Defined Upper Limit."),
REQUIRED_ADDRESS("GTW_2010", "Address Missing. This Value Must Be Provided."),

REQUIRED_ZIP("GTW_2011", "ZIP Code Missing. This Value Must Be Provided."),
REQUIRED_COUNTRY_CODE("GTW_2012", "Country Code Missing. This Value Must Be Provided."),
INVALID_TRANSACTION_OPERATION("GTW_2013", "Invalid Gateway Transaction Operation/ Invalid  GTO."),
CITY_LENGTH("GTW_2014", "City Name Can Have 128 Characters Max."),
STATE_LENGTH("GTW_2015", "State Name Can Have 30 Characters Max."),
PHONE_LENGTH("GTW_2016", "Phone Number Can Have 20 Characters Max."),
ZIP_LENGTH("GTW_2017", "Customer ZIP Code Can Have 10 Characters Max."),
CURRENCY_VALUE_IS_REQUIRED("GTW_2018", "Currency Value Missing. This Value Must Be Provided."),
INVALID_CURRENCY_CODE("GTW_2019", "Invalid Currency Code."),
CLIENT_ORDER_CHARACTERS("GTW_2020", "Client Order Can Have 100 Characters Max."),

REQUIRED_CARD_HOLDER_NAME("GTW_2021", "Card Holder Name Is Missing. This Value Must Be Provided."),
CARD_HOLDER_NAME_LENGTH("GTW_2022", "Card Holder Name Can Have 128 Characters Max."),
REQUIRED_CARD_EXPIRE_MONTH("GTW_2023", "Card Expiry Month Is Missing. This Value Must Be Provided."),
CARD_EXPIRE_MONTH_VALUE("GTW_2024", "Card Expiry Month Should Be Between 01 And 12."),
REQUIRED_CUSTOMER_NAME("GTW_2025", "Customer First Name Is Missing. This Value Must Be Required."),
CUSTOMER_NAME_LENGTH("GTW_2026", "Customer First Name Can Have 128 Characters Max."),
CUSTOMER_ADDRESS_LENGTH("GTW_2027", "Customer Address Can Have 128 Characters Max."),
EMAIL_LENGTH("GTW_2028", "Email Address Must Have Less Than 128 Characters."),
INVALID_EMAIL("GTW_2029", "Email Address Invalid."),
INVALID_CUSTOMER_COUNTRY_CODE("GTW_2030", "Country Code Invalid."),

CUSTOMER_COUNTRY_CODE_LENGTH("GTW_2031", "Country Code Must Have 2 Characters."),
REQUIRED_CARD_NUMBER("GTW_2032", "Card Number Is Missing. This Value Must Be Provided."),
CARD_NUMBER_LENGTH("GTW_2033", "Card Number Can Have 40 Characters Max."),
VALID_CARD_NUMBER("GTW_2034", "Card Number Invalid."),
REQUIRED_CARD_EXPIRE_YEAR("GTW_2035", "Card Expiry Year Is Missing. This Value Must Be Provided."),
REQUIRED_CUSTOMER_LAST_NAME("GTW_2036", "Customer Last Name Is Missing. This Value Must Be Provided."),
CUSTOMER_LAST_NAME_LENGTH("GTW_2037", "Customer Last Name Can Have 128 Characters Max."),
INVALID_CAPTURE_AMOUNT("GTW_2038", "Invalid Value/ Amount Does Not Match/ Captured Amount Must Be Equal To Reference Transaction Amount."),
EMPTY_ACCOUNT_NAME("GTW_2039", "Account Name Is Missing. This Value Must Be Provided."),
ACCOUNT_NAME_LENGTH("GTW_2040", "Account Name Can Have 20 Characters Max."),

EMPTY_DESCRIPTOR("GTW_2041", "Descriptor Is Missing. This Value Must Be Provided."),
DESCRIPTOR_LENGTH("GTW_2042", "Descriptor Name Can Have 20 Characters Max."),
INPUT_FIELD_VALUE("GTW_2043", "This Field Is Required! It May Contain Alphanumeric Characters, Lowercase Or Uppercase. Special Characters Are Not Allowed!"),
INVALID_SETTLEMENT_AMOUNT("GTW_2044", "Invalid Value/ Amount Does Not Match/ Settlement Amount Must Be less than Reference Transaction Amount."),
TRANSACTION_ALREADY_REFUNDED("GTW_2045", "Transaction Already Refunded."),
TRANSACTION_ALREADY_CAPTURED("GTW_2046", "Transaction Already Captured."),
TRANSACTION_ALREADY_CANCELED("GTW_2047", "Transaction Already Cancelled."),
MANDATORY_TRANSACTION_ID("GTW_2048", "Transaction ID Is Missing. This Value Must Be Provided."),
TRANSACTION_ALREADY_IN_PENDING("GTW_2049", "Transaction Status Pending."),
BANK_CREDENTIALS_ERROR("GTW_2050", "Band Credentials Invalid/ Bank Credentials Are Empty."),

EMP_TRANSACTION_ERROR("GTW_2051", "Transaction Failed On EMERCHANTPAY (EMP) Server."),
TSYS_TRANSACTION_ERROR("GTW_2052", "Transaction Failed On TSYS Server."),
EPX_TRANSACTION_ERROR("GTW_2053", "Transaction Failed On EPX Server."),
TRANSACTION_TIMEOUT("GTW_2054", "Transaction Response Timeout."),
NON_EXISTING_CODE("GTW_2055", "Undefined."),
TRANSACTION_REFUND_ALREADY_CAPTURED("GTW_2056", "Refund Transaction Is Already Captured."),
INVALID_RECURRING_SCHEDULING_TYPE_ENUM("GTW_2057", "Recurring schedule type must be any of this values {enumValues}"),
INVALID_INDUSTRY_CODE_ENUM("GTW_2058", "Industry code must be any of this values {enumValues}"),
INVALID_AMOUNT_PRECISION("GTW_2059", "Amount should be less than maximum allowed."),
INVALID_PARTIAL_AUTHORIZATION_INDICATOR("GTW_2060", "Partial authorization indicator must be any of this values {enumValues}"),

INVALID_DM_TXN_MODE_INDICATOR("GTW_2061", "Direct Marketing Txn Mode indicator must be any of this values {enumValues}"),
INVALID_TRANSACTION_TYPE_ENUM("GTW_2062", "Transaction Type/mode must be any of this values {enumValues}"),
NOT_NULL("GTW_2063", "Invalid Value / Null Value"),
TRANSACTION_RETRY_ERROR("GTW_2064", "Transaction max retry exceeded."),
DUPLICATE_CLIENT_ORDER("GTW_2065", "Client Order Id Duplicate or Invalid . Kindly contact NetValve support."),
CARD_EXPIRE_YEAR_VALUE("GTW_2066", "Card Expiry Year Should Be Between 2000 And 2999."),
STATUS_ENUM("GTW_2067", "Status must be any of this values {enumValues}"),
INVALID_PHONE_NUMBER("GTW_2068", "Invalid Phone number"),
SECURITY_TYPE_ENUM("GTW_2069", "SecurityType must be any of this values {enumValues}"),

ORDER_ALREADY_PAID("GTW_2070", "Order already paid."),
KEY_USAGE_ENUM("GTW_2071", "KeyUsage must be any of this values {enumValues}"),
DUPLICATE_CARD_DETAILS("GTW_2072", "Card details already used for this order/transaction and failed, try with different card details "),
PASSWORD_INPUT_FIELD_VALUE("GTW_2073", "This Field Is Required! It May Contain Alphanumeric Characters (Lowercase Or Uppercase) and Special Characters!"),
PAGE_LAYOUT_FILE_TYPE_ENUM("GTW_2074", "File type must be any of this values {enumValues}"),
URL_FIELD_VALUE("GTW_2075", "This Field is not valid URL!"),
CARD_NOT_ALLOWED("GTW_2076", "{card} card not allowed for this operation!"),
INPUT_FIELD_VALIDATION("GTW_2079", "This Field Is Required! It May Contain Alphanumeric Characters, Lowercase Or Uppercase. Some Special Characters Are Not Allowed!"),

RYVYL_TRANSACTION_ERROR("GTW_2080", "Transaction Failed On RYVYL Server."),
RECURRING_NOT_ALLOWED("GTW_2081", "Recurring not allowed as parent transaction not marked for Recurring"),
INVALID_CLIENT("GTW_2082", "Invalid Client ID. Kindly contact NetValve support."),

RANK_REQUIRED("GTW_2083", "Rank field is required."),
PERCENTAGE_DISTRIBUTIONS_REQUIRED("GTW_2084", "Percentage distributions field is required."),
MID_ID_REQUIRED("GTW_2085", "MID id field is required."),
MAX_TICKET_AMOUNT_REQUIRED("GTW_2086", "Max ticket amount field is required."),
OVERALL_LIMIT_REQUIRED("GTW_2087", "Overall limit field is required."),
PCT_REQUIRED("GTW_2088", "PCT field is required."),
BIN_VALIDATION("GTW_2089", "BIN should be of min 6 and max 8 length."),

MOCK_TRANSACTION_ERROR("GTW_2090", "Transaction Failed On Mock Bank Server."),

TRUEVO_TRANSACTION_ERROR("GTW_2091", "Transaction Failed On Truevo Server."),

PAYMENT_TYPE_REQUIRED("GTW_2092", "Payment Type field is required."),
PAYMENT_TYPE_ENUM("GTW_2093", "PaymentType must be any of this values {enumValues}"),
WALLET_TYPE_ENUM("GTW_2094", "WalletType must be any of this values {enumValues}"),

APPLE_PAY_WALLET_ERROR("GTW_2095", "Error while processing Apple pay payload"),
GOOGLE_PAY_WALLET_ERROR("GTW_2096", "Error while processing Google pay payload"),
SAMSUNG_PAY_WALLET_ERROR("GTW_2097", "Error while processing Samsung pay payload"),

SITE_URL_REQUIRED("GTW_2098", "Site URL field is required."),
SITE_URL_REQUIRED_CHARACTERS("GTW_2099", "Site URL Can Have 1000 Characters Max."),

TRANSACTION_OPERATION_NOT_ALLOWED_FOF_PROVIDER("GTW_2100", "Transaction operation not allowed for provider."),

WALLET_TYPE_REQUIRED("GTW_2101", "Wallet Type field is required."),
NAME_FIELD_VALUE("GTW_2102", "This field is missing or not valid. It may contain lowercase or uppercase letters. Some special characters , numbers and leading or ending spaces are not allowed."),
REFERENCE_TRANSACTION_NOT_FOUND("GTW_2103", "Reference Transaction Not Found ."),
ICARD_TRANSACTION_ERROR("GTW_2104", "Transaction Failed On iCard Server."),
TOKENIZATION_TYPE_ENUM("GTW_2105", "Tokenization type must be any of this values {enumValues}"),
INVALID_EMAIL_LIST("GTW_2106", "Invalid email list format. Please enter valid emails separated by commas."),
TRANSACTION_PARTIAL_REFUND_NOT_ALLOWED("GTW_2107", "Partial refund not allowed for transaction."),
REFUND_OVER_REMAINING_AMOUNT("GTW_2108", "Refund amount should not exceed the remaining amount."),

BLOCKED_CARD("GTW_4000", "Card Is Blocked."),
BLOCKED_EMAIL("GTW_4001", "Email Address Is Blocked."),
CUSTOMER_IP_IS_BLOCKED("GTW_4002", "Customer IP Is Blocked."),
INVALID_CONFIGURATION_NAME("GTW_4003", "Invalid configuration name."),

AUTHENTICATION_FAILURE("GTW_9001", "Authentication failure! Kindly contact NetValve support."),
AUTHENTICATION_FAILURE_HPP_RESTRICTED("GTW_9002", "Authorization failure! You are not allowed to access the API. Kindly contact NetValve support."),
INVALID_FEATURE("GTW_9003", "This payment option is not supported for your account, please contact NetValve support"),
TRANSACTION_ERROR("GTW_9999", "Transaction Processing Error"),

DECLINED_BY_ISSUER("BNK_2000", "Refer To Card Issuer."),
AMOUNT_NO_LONGER_AVAILABLE("BNK_2001", "Amount No Longer Available."),
INVALID_CARD("BNK_2002", "Invalid Account/Card Number (no such number exists)."),
AUTHORIZATION_DECLINED("BNK_2003", "Authorization Declined."),
CARD_EXPIRED("BNK_2004", "Expired Card."),
HIGHER_REFERENCING_TRANSACTION("BNK_2010", "Invalid Value/ Amount Does Not Match."),

  // 1000 is only for Approval,
THREE_DS_SUCCESS("3DS_1000", "Three DS Transaction Successful."),
THREE_DS_REQUEST_SUCCESS("3DS_1001", getSuccessResponseMessage()),

// 2000 series for error
THREE_DS_ERROR("3DS_2000", "Three DS Transaction Processing Error. "),
THREE_DS_INVALID_MERCHANT_CALLBACK_URL("3DS_2001", "Merchant Callback Url Is Missing / Not Valid."),
THREE_DS_NOT_CONFIGURED("3DS_2002", "Mid Not configured for 3DS. Kindly contact NetValve support."),
THREE_DS_INVALID_MERCHANT("3DS_2003", "Invalid Merchant ID. Kindly contact NetValve support."),
THREE_DS_TRANSACTION_ID_REQUIRED("3DS_2004", "Three DS Transaction Id Is Missing / Not Valid . This Value Must Be Provided."),
THREE_DS_CHALLENGE_INDICATOR_REQUIRED("3DS_2005", "Challenge Indicator Is Missing. This Value Must Be Provided."),
THREE_DS_BROWSER_INFO_REQUIRED("3DS_2006", "Browser Info Is Missing / Not Valid. This Value Must Be Provided."),
THREE_DS_DF_REF_ID_REQUIRED("3DS_2007", "DF Reference Id Is Missing / Not Valid. This Value Must Be Provided."),
THREE_DS_GATEWAY_ERROR("3DS_2008", "Three DS Transaction Processing Error from Gateway. Kindly contact NetValve support."),
THREE_DS_IMPL_TYPE_REQUIRED("3DS_2009", "3DS implementation type Is Missing. This Value Must Be Provided."),
THREE_DS_DEVICE_DATA_NOT_COLLECTED("3DS_2010", "3DS device data not collected by browser or authentication attempted."),
THREE_DS_ACS_NOT_COMPLETED("3DS_2011", "3DS ACS not completed by user or authentication attempted."),


// Rule Engine 1000 is only for Approval,
RULE_REQUEST_SUCCESS("SMR_1000", getSuccessResponseMessage()),
RULE_REQUEST_SUCCESS_NETVALVE_MID("SMR_1001", "Request Successful:- Fetched NetValve Default Mid"),
RULE_REQUEST_SUCCESS_SITE_DEFAULT_MID("SMR_1002", "Request Successful:- Fetched Site Default Mid"),

// Rule Engine 2000 series for error
RULE_REQUEST_ERROR("SMR_2000", "Rule Processing Error. "),
RULE_MISSING_MANDATORY_PARAM_ERROR("SMR_2001", "Rule Processing Error:- ClientId or Site Id Is Missing. This Value Must Be Provided. "),
RULE_NO_SITE_ERROR("SMR_2002", "Rule Processing Error:-  Site or default site not present for given client.");
```

### Bank Errors

Transaction declined by the banks are having errors starting with <code>BNK_</code>.

| <code>responseCode</code> | <code>responseMessage</code> |
|:------------|:----------------| 
| BNK_2000 | Refer To Card Issuer | 
| BNK_2009 | Invalid Merchant or Service Provider| 
| BNK_3002 | Lost Card - Pick Up| 
| BNK_2005 | Do not honour | 
| BNK_3003 | Stolen Card - Pick Up| 
| BNK_2002 | Invalid Card Number| 
| BNK_2011 | Insufficient Funds| 
| BNK_3004 | Suspected Fraud | 
| BNK_3501 | Declined - CVV2 MISMATCH | 
| BNK_3500 | Declined - Max transaction failure limit exceeded |

## NetValve Common 3DS Error Codes

```jsx
// 1000 series for Approval,
THREE_DS_SUCCESS("3DS_1000", "Three DS Transaction Successful."),
THREE_DS_REQUEST_SUCCESS("3DS_1001", "Request Successful."),
// 2000 series for error
THREE_DS_ERROR("3DS_2000", "Three DS Transaction Processing Error. "),
THREE_DS_REQUIRED_CALL_BACK_URL("3DS_2001", "Event Callback Url Is Missing. This Value Must Be Provided."),
THREE_DS_NOT_CONFIGURED("3DS_2002", "Mid Not configured for 3DS. Kindly contact NetValve support."),
THREE_DS_INVALID_MERCHANT("3DS_2003", "Invalid Merchant ID. Kindly contact NetValve support."),
THREE_DS_TRANSACTION_ID_REQUIRED("3DS_2004", "Three DS Transaction Id Is Missing. This Value Must Be Provided."),
THREE_DS_CHALLENGE_INDICATOR_REQUIRED("3DS_2005", "Challenge Indicator Is Missing. This Value Must Be Provided."),
THREE_DS_BROWSER_INFO_REQUIRED("3DS_2006", "Browser Info token Is Missing. This Value Must Be Provided."),
THREE_DS_DF_REF_ID_REQUIRED("3DS_2007", "DF Reference Id Is Missing. This Value Must Be Provided."),
THREE_DS_GATEWAY_ERROR("3DS_2008", "Three DS Transaction Processing Error from Gateway. Kindly contact NetValve support."),
THREE_DS_IMPL_TYPE_REQUIRED("3DS_2009", "3DS implementation type Is Missing. This Value Must Be Provided."),
THREE_DS_DEVICE_DATA_NOT_COLLECTED("3DS_2010", "3DS device data not collected by browser or authentication attempted."),
THREE_DS_ACS_NOT_COMPLETED("3DS_2011", "3DS ACS not completed by user or authentication attempted."),
```

## 3DS Provider-specific Error Codes

```jsx
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