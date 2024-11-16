

# Introduction

The **Graduation 1** project is a NestJS application using microservices to provide various APIs, including:
- Retrieve student information (name + student ID).
- Return the current date and time on the server.
- Get an email address with student ID and student name.
- Fetch exchange rates from Vietcombank.
- Transform the text to QRCode.
- Generate the Banking QRCode for Online Banking.

# [More details about APIs](./details.md)

### Step 1: Clone the project

Use the following command to clone the project from GitHub to your local machine:

```bash
git clone https://github.com/luanquangminh/Microservices.git
```

### Step 2: Install dependencies

Navigate to the `gr1` project directory and install the dependencies:

```bash
cd gr1
npm install
```

### Step 3: Run the application

After installing the dependencies, run the application with the following command:

```bash
npm run start
```

The application will run on `http://localhost:3000`.

## 2. Main Features

### 2.1. Retrieve student information

- **Endpoint**: `/gr1/aboutus`
- **Method**: GET
- **Function**: Return the student's name and student ID.
- **Example**:

```
http://localhost:3000/api#/default/Gr1Controller_getAboutus
```

- **Response**:

```json
{
  "name": "Nguyen Van A",
  "mssv": "20221111"
}
```

### 2.2. Get the current date and time

- **Endpoint**: `/gr1/today`
- **Method**: GET
- **Function**: Return the current date and time from the server.
- **Example**:

```
http://localhost:3000/api#/default/Gr1Controller_getTodayDateTime
```

- **Response**:

```json
{
  "currentDateTime": "2024-09-28T14:25:36.123Z"
}
```

### 2.3. Generate an email address from student ID and name

- **Endpoint**: `/gr1/generate-email`
- **Method**: GET
- **Parameters**:
  - `mssv`: The student ID.
  - `name`: The student's name.
- **Function**: Generate an email address following the format `<firstName>.<lastInitialAndMiddleInitial>+6digitsOfStudentID@sis.hust.edu.vn`.
- **Example**:

```
http://localhost:3000/api#/default/Gr1Controller_generateEmail
```

- **Response**:

```json
{
  "email": "a.nv221111@sis.hust.edu.vn"
}
```

### 2.4. Fetch exchange rates from Vietcombank

- **Endpoint**: `/gr1/vcb-exchange-rate`
- **Method**: GET
- **Function**: Fetch exchange rates from Vietcombank's API.
- **Example**:

```
http://localhost:3000/api#/default/Gr1Controller_layTigia
```

- **Response**:

```json
{
  "rates": {
    "USD": {
      "buy": "23,000",
      "sell": "23,200"
    },
    "EUR": {
      "buy": "25,500",
      "sell": "26,000"
    }
  }
}
```

### 2.5. Return a QRCode of a given text

- **Endpoint**: `/gr1/qrcode`
- **Method**: GET
- **Parameter**: `text` - The text to be encoded into a QR code.
- **Function**: Return a QR code image for the given text.
- **Example**:

```
http://localhost:3000/api#/default/Gr1Controller_genQR
```

- **Response**: A PNG image of the QR code will be returned and displayed in the browser.

### 2.6. Return a NAPAS QRCode

- **Endpoint**: `/gr1/generate-vietqr`
- **Method**: POST
- **Parameter**: `text` - The text to be encoded into a QR code.
- **Function**: Return a QR code image for the given text.
- **Example**:

```
http://localhost:3000/api#/default/Gr1Controller_generateVietQR
```

- **Response**: A PNG image of the QR code will be returned and displayed in the browser.
```
# [More details about Vietnamese Banks Provided by The State Bank of Vietnam](./nhnn.json)
