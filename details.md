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
Dưới đây là cách viết tài liệu này thành một file Markdown để sử dụng trên GitHub:


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

![QR Code](data:image/png;base64,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)

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

```
