# API Spec - Authentication

## Sections

- [API Spec - Authentication](#api-spec---authentication)
  - [Sections](#sections)
  - [Register](#register)
    - [Method](#method)
    - [URL](#url)
    - [URL Params](#url-params)
    - [Payload](#payload)
    - [Success Response](#success-response)
      - [Code](#code)
      - [Content](#content)
    - [Error Response](#error-response)
      - [Code](#code-1)
      - [Content](#content-1)
    - [Sample Call](#sample-call)
  - [Login](#login)
    - [Method](#method-1)
    - [URL](#url-1)
    - [URL Params](#url-params-1)
    - [Payload](#payload-1)
    - [Success Response](#success-response-1)
      - [Code](#code-2)
      - [Content](#content-2)
    - [Error Response](#error-response-1)
      - [Code](#code-3)
      - [Content](#content-3)
    - [Sample Call](#sample-call-1)

## Register

### Method  

`POST`

### URL

`/auth/register/`

### URL Params

`None`

### Payload

| key       | value  |
| --------- | ------ |
| firstname | string |
| lastname  | string |
| email     | string |
| password  | string |

### Success Response

#### Code

`201`

#### Content

```json
{
    "id": "jvyoUHeAZrYvEdHWpLjGI",
    "email": "johndoe@gmail.com", 
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imp2eW9VSGVBWnJZdkVkSFdwTGpHSSIsImlhdCI6MTYxNDQwMDg3Nn0.piZTH3diqgK0wi3pZThmd-HwrfNas_9qL5VWSgOCq0E"
}
```

### Error Response

#### Code

`401`

#### Content

```json
{
    "error": "Invalid attributes or values for user registration"
}
```

### Sample Call

```javascript
axios.post('/api/auth/register', {
    firstname: "John",
    lastname: "Doe",
    email: "johndoe@gmail.com",
    password: "Password123"
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

## Login

### Method  

`POST`

### URL

`/auth/login/`

### URL Params

`None`

### Payload

| key      | value  |
| -------- | ------ |
| email    | string |
| password | string |

### Success Response

#### Code

`200`

#### Content

```json
{
    "id": "jvyoUHeAZrYvEdHWpLjGI",
    "email": "johndoe@gmail.com", 
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imp2eW9VSGVBWnJZdkVkSFdwTGpHSSIsImlhdCI6MTYxNDQwMDg3Nn0.piZTH3diqgK0wi3pZThmd-HwrfNas_9qL5VWSgOCq0E"
}
```

### Error Response

#### Code

`401`

#### Content

```json
{
    "error": "Invalid attributes or values for user login"
}
```

### Sample Call

```javascript
axios.post('/api/auth/login', {
    email: "johndoe@gmail.com",
    password: "Password123"
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```
