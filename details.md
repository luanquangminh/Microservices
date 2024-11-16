# Detailed API Documentation

## Overview

This is more details about the APIs in this project.

# API Documentation: About Us Endpoint

## Request Example 

### CURL Command

```bash
curl -X 'GET' \
  'http://localhost:3000/gr1/aboutus' \
  -H 'accept: */*'
```

### Request URL

```
http://localhost:3000/gr1/aboutus
```

---

## Server Response

### HTTP Status Code

`200 OK`

### Response Body

```json
{
  "ten": "Luan Quang Minh",
  "mssv": "20225985"
}
```

### Response Headers

```
connection: keep-alive
content-length: 43
content-type: application/json; charset=utf-8
date: Sat, 16 Nov 2024 13:45:32 GMT
etag: W/"2b-K4qaeEpNODvLYw5ZL8FaaidCM"
keep-alive: timeout=5
x-powered-by: Express
```

---

## Responses Table

| HTTP Code | Description     |
|-----------|-----------------|
| 200       | Success response with user details |
| 400       | Bad Request - Invalid input        |
| 500       | Internal Server Error              |

---

## Notes

- **Connection**: This endpoint uses a `keep-alive` connection type.
- **Powered By**: The response is served using `Express.js`.

# API Documentation: Today's Date Endpoint


## Request Example 


### CURL Command

```bash
curl -X 'GET' \
  'http://localhost:3000/gr1/today' \
  -H 'accept: */*'
```

### Request URL for Get Today

```
http://localhost:3000/gr1/today
```

---

## Server Response

### HTTP Status Code

`200 OK`

### Response Body

```json
{
  "datetime": "2024-11-16T13:53:44.569Z"
}
```

### Response Headers

```
connection: keep-alive
content-length: 39
content-type: application/json; charset=utf-8
date: Sat, 16 Nov 2024 13:53:44 GMT
etag: W/"27-cIEfc6Pe9gwZuItJ57W4ZA7A5s"
keep-alive: timeout=5
x-powered-by: Express
```

---

## Responses Table

| HTTP Code | Description               |
|-----------|---------------------------|
| 200       | Returns the current date  |
| 400       | Bad Request               |
| 500       | Internal Server Error     |

---

# API Documentation: Generate Email Endpoint

## Overview

This endpoint generates an email address based on the provided `mssv` (student ID) and `ten` (name).

---

## Request Example

### CURL Command

```bash
curl -X 'GET' \
  'http://localhost:3000/gr1/gen-email?mssv=20225985&ten=Luan%20Quang%20Minh' \
  -H 'accept: */*'
```

### Request URL

```
http://localhost:3000/gr1/gen-email?mssv=20225985&ten=Luan%20Quang%20Minh
```

---

## Server Response

### HTTP Status Code

`200 OK`

### Response Body

```json
{
  "email": "minh.lq225985@sis.hust.edu.vn"
}
```

### Response Headers

```
connection: keep-alive
content-length: 43
content-type: application/json; charset=utf-8
date: Sat, 16 Nov 2024 14:05:51 GMT
etag: W/"2b-mXIt2B8F4Pv8QzNhA62MCnXeX08"
keep-alive: timeout=5
x-powered-by: Express
```

---

## Responses Table

| HTTP Code | Description                               |
|-----------|-------------------------------------------|
| 200       | Successfully generated the email address  |
| 400       | Bad Request - Missing or invalid parameters |
| 500       | Internal Server Error                    |

---

## Notes

- **Parameters**:
  - `mssv`: Student ID (e.g., `20225985`).
  - `ten`: Name (e.g., `Luan Quang Minh`).
- **Email Format**: The generated email follows the format `<name>.<mssv>@sis.hust.edu.vn`.
- **Powered By**: The response is served using `Express.js`.
- **Datetime Format**: The response uses the ISO 8601 format.
- **Connection**: The server maintains a `keep-alive` connection with a timeout of 5 seconds.
- **Powered By**: The response is served using `Express.js`.

# API Documentation: Exchange Rate Endpoint

## Overview

This endpoint provides the current exchange rates for multiple currencies.

---

## Request Example

### CURL Command

```bash
curl -X 'GET' \
  'http://localhost:3000/gr1/tigia' \
  -H 'accept: */*'
```

### Request URL

```
http://localhost:3000/gr1/tigia
```

---

## Server Response

### HTTP Status Code

`200 OK`

### Response Body

```json
{
  "ExrateList": {
    "DateTime": "11/16/2024 9:09:59 PM",
    "Exrate": [
      {
        "$": {
          "CurrencyCode": "AUD",
          "CurrencyName": "AUSTRALIAN DOLLAR   ",
          "Buy": "15,965.78",
          "Transfer": "16,127.05",
          "Sell": "16,644.42"
        }
      },
      {
        "$": {
          "CurrencyCode": "CAD",
          "CurrencyName": "CANADIAN DOLLAR     ",
          "Buy": "17,607.85",
          "Transfer": "17,785.71",
          "Sell": "18,356.29"
        }
      },
      {
        "$": {
          "CurrencyCode": "CHF",
          "CurrencyName": "SWISS FRANC         ",
          "Buy": "27,830.10",
          "Transfer": "28,111.22",
          "Sell": "29,013.05"
        }
      },
      {
        "$": {
          "CurrencyCode": "CNY",
          "CurrencyName": "YUAN RENMINBI       ",
          "Buy": "3,425.24",
          "Transfer": "3,459.84",
          "Sell": "3,570.83"
        }
      },
      {
        "$": {
          "CurrencyCode": "DKK",
          "CurrencyName": "DANISH KRONE        ",
          "Buy": "-",
          "Transfer": "3,521.01",
          "Sell": "3,655.85"
        }
      },
      {
        "$": {
          "CurrencyCode": "EUR",
          "CurrencyName": "EURO                ",
          "Buy": "26,070.92",
          "Transfer": "26,334.26",
          "Sell": "27,500.42"
        }
      },
      {
        "$": {
          "CurrencyCode": "GBP",
          "CurrencyName": "POUND STERLING      ",
          "Buy": "31,340.05",
          "Transfer": "31,656.61",
          "Sell": "32,672.19"
        }
      },
      {
        "$": {
          "CurrencyCode": "HKD",
          "CurrencyName": "HONGKONG DOLLAR     ",
          "Buy": "3,180.68",
          "Transfer": "3,212.80",
          "Sell": "3,315.87"
        }
      },
      {
        "$": {
          "CurrencyCode": "INR",
          "CurrencyName": "INDIAN RUPEE        ",
          "Buy": "-",
          "Transfer": "299.93",
          "Sell": "311.92"
        }
      },
      {
        "$": {
          "CurrencyCode": "JPY",
          "CurrencyName": "YEN                 ",
          "Buy": "156.74",
          "Transfer": "158.32",
          "Sell": "165.85"
        }
      },
      {
        "$": {
          "CurrencyCode": "KRW",
          "CurrencyName": "KOREAN WON          ",
          "Buy": "15.62",
          "Transfer": "17.36",
          "Sell": "18.84"
        }
      },
      {
        "$": {
          "CurrencyCode": "KWD",
          "CurrencyName": "KUWAITI DINAR       ",
          "Buy": "-",
          "Transfer": "82,452.28",
          "Sell": "85,748.60"
        }
      },
      {
        "$": {
          "CurrencyCode": "MYR",
          "CurrencyName": "MALAYSIAN RINGGIT   ",
          "Buy": "-",
          "Transfer": "5,601.59",
          "Sell": "5,723.76"
        }
      },
      {
        "$": {
          "CurrencyCode": "NOK",
          "CurrencyName": "NORWEGIAN KRONER    ",
          "Buy": "-",
          "Transfer": "2,233.34",
          "Sell": "2,328.16"
        }
      },
      {
        "$": {
          "CurrencyCode": "RUB",
          "CurrencyName": "RUSSIAN RUBLE       ",
          "Buy": "-",
          "Transfer": "242.93",
          "Sell": "268.92"
        }
      },
      {
        "$": {
          "CurrencyCode": "SAR",
          "CurrencyName": "SAUDI RIAL          ",
          "Buy": "-",
          "Transfer": "6,748.19",
          "Sell": "6,996.23"
        }
      },
      {
        "$": {
          "CurrencyCode": "SEK",
          "CurrencyName": "SWEDISH KRONA       ",
          "Buy": "-",
          "Transfer": "2,264.05",
          "Sell": "2,360.17"
        }
      },
      {
        "$": {
          "CurrencyCode": "SGD",
          "CurrencyName": "SINGAPORE DOLLAR    ",
          "Buy": "18,402.38",
          "Transfer": "18,588.26",
          "Sell": "19,184.59"
        }
      },
      {
        "$": {
          "CurrencyCode": "THB",
          "CurrencyName": "THAILAND BAHT       ",
          "Buy": "642.56",
          "Transfer": "713.95",
          "Sell": "741.29"
        }
      },
      {
        "$": {
          "CurrencyCode": "USD",
          "CurrencyName": "US DOLLAR           ",
          "Buy": "25,160.00",
          "Transfer": "25,190.00",
          "Sell": "25,512.00"
        }
      }
    ],
    "Source": "Joint Stock Commercial Bank for Foreign Trade of Vietnam - Vietcombank"
  }
}
```

### Response Headers

```
connection: keep-alive
content-length: 2562
content-type: application/json; charset=utf-8
date: Sat, 16 Nov 2024 14:09:59 GMT
etag: W/"a02-G/2oySZUaWVN1Li6CZNpM3EJeY"
keep-alive: timeout=5
x-powered-by: Express
```

---

## Responses Table

| HTTP Code | Description                                    |
|-----------|------------------------------------------------|
| 200       | Successfully retrieved exchange rate data      |
| 400       | Bad Request - Invalid input                   |
| 500       | Internal Server Error                         |

---

## Notes

- **Parameters**: No parameters required for this endpoint.
- **Data Format**:
  - `currencyCode`: The ISO currency code.
  - `CurrencyName`: Full name of the currency.
  - `Buy`: Buy rate for the currency.
  - `Transfer`: Transfer rate for the currency.
  - `Sell`: Sell rate for the currency.
- **Datetime**: The date and time in the response use the format `MM/DD/YYYY HH:MM:SS AM/PM`.
- **Powered By**:
  - The data is provided by VietcomBank
  - The response is served using `Express.js`.
    
# API Documentation: Generate QR Code Endpoint

## Overview

This endpoint generates a QR code based on the provided text.

---

## Request Example

### CURL Command

```bash
curl -X 'GET' \
  'http://localhost:3000/gr1/qrcode?text=Hello' \
  -H 'accept: */*'
```

### Request URL

```
http://localhost:3000/gr1/qrcode?text=Hello
```

---

## Server Response

### HTTP Status Code

`200 OK`

### Response Body

The response body contains the QR code image. Below is an example:

![53302756-19e4-4e00-b984-137dd8679caa](https://github.com/user-attachments/assets/c49abfd5-679f-47d6-adfe-8e0189660437)


### Response Headers

```
connection: keep-alive
content-length: 763
content-type: image/png
date: Sat, 16 Nov 2024 14:15:27 GMT
etag: W/"2fb-RHEtbnj3yW47fBmQn3fs48pnGgY"
keep-alive: timeout=5
x-powered-by: Express
```

---

## Responses Table

| HTTP Code | Description                                    |
|-----------|------------------------------------------------|
| 200       | Successfully generated QR code                |
| 400       | Bad Request - Missing or invalid parameters   |
| 500       | Internal Server Error                         |

---

## Notes

- **Parameters**:
  - `text` (required): The text to be encoded in the QR code.
- **Content-Type**:
  - The response is an image in PNG format (`content-type: image/png`).
- **Powered By**: The response is served using `Express.js`.
- **Example Usage**:
  - You can save the QR code image or embed it directly in a web application.

# API Documentation: Generate VietQR Code

## Overview

This endpoint generates a VietQR code as a PNG image based on the provided payment details.

---

## Request Example

### CURL Command

```bash
curl -X 'POST' \
  'http://localhost:3000/gr1/generate-vietqr' \
  -H 'accept: image/png' \
  -H 'Content-Type: application/json' \
  -d '{
    "accountNo": "113366688888",
    "accountName": "QUỸ VẮC XIN PHÒNG CHỐNG COVID",
    "acqId": "970415",
    "amount": 79000,
    "addInfo": "Ủng Hộ Quỹ Vắc Xin",
    "format": "text",
    "template": "compact"
  }'
```

### Request URL

```
http://localhost:3000/gr1/generate-vietqr
```

### Request Body (JSON)

```json
{
  "accountNo": "113366688888",
  "accountName": "QUỸ VẮC XIN PHÒNG CHỐNG COVID",
  "acqId": "970415",
  "amount": 79000,
  "addInfo": "Ủng Hộ Quỹ Vắc Xin",
  "format": "text",
  "template": "compact"
}
```

---

## Server Response

### HTTP Status Code

`201 Created`

### Response Body

The response contains the generated QR code as a PNG image. Below is an example:

![18c3e628-98a5-4822-827b-cd7df5a8ea4d](https://github.com/user-attachments/assets/0f72cfb4-293f-465c-ab63-d8d14f03b871)


### Response Headers

```
connection: keep-alive
content-length: 66145
content-type: image/png
date: Sat, 16 Nov 2024 14:32:10 GMT
etag: W/"10261-OYurasDcSonOc4sCkZz8tFFQ0K8"
keep-alive: timeout=5
x-powered-by: Express
```

---

## Responses Table

| HTTP Code | Description                  |
|-----------|------------------------------|
| 201       | Generated QR code as PNG     |
| 400       | Bad Request - Invalid input  |
| 500       | Internal Server Error        |

---

## Notes

- **Parameters**:
  - `accountNo`: The account number to generate the QR code for.
  - `accountName`: The name associated with the account.
  - `acqId`: The acquiring institution ID.
  - `amount`: The transaction amount.
  - `addInfo`: Additional information for the QR code.
  - `format`: Specifies the data format (e.g., `text`).
  - `template`: The template style for the QR code (e.g., `compact`).
- **Content-Type**:
  - The response is a PNG image (`content-type: image/png`).
- **Example Usage**:
  - The QR code can be scanned to initiate payment or other related actions.
  - The error message will return if errors occur in inputing phase.
```
