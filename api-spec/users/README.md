# API Spec - Users

## Sections

- [API Spec - Users](#api-spec---users)
  - [Sections](#sections)
  - [Get All Users](#get-all-users)
    - [Method](#method)
    - [URL](#url)
    - [URL Params](#url-params)
    - [Payload](#payload)
    - [Success Response](#success-response)
      - [Code](#code)
      - [Content](#content)
    - [Error Response](#error-response)
      - [Code](#code-1)
      - [Message](#message)
    - [Sample Call](#sample-call)
  - [Get Users By ID](#get-users-by-id)
    - [Method](#method-1)
    - [URL](#url-1)
    - [URL Params](#url-params-1)
    - [Payload](#payload-1)
    - [Success Response](#success-response-1)
      - [Code](#code-2)
      - [Content](#content-1)
    - [Error Response](#error-response-1)
      - [Code](#code-3)
      - [Message](#message-1)
      - [Code](#code-4)
      - [Message](#message-2)
    - [Sample Call](#sample-call-1)
  - [Update Users Profile](#update-users-profile)
    - [Method](#method-2)
    - [URL](#url-2)
    - [URL Params](#url-params-2)
    - [Payload](#payload-2)
    - [Success Response](#success-response-2)
      - [Code](#code-5)
      - [Content](#content-2)
    - [Error Response](#error-response-2)
      - [Code](#code-6)
      - [Message](#message-3)
      - [Code](#code-7)
      - [Message](#message-4)
    - [Sample Call](#sample-call-2)
  - [Delete User By ID](#delete-user-by-id)
    - [Method](#method-3)
    - [URL](#url-3)
    - [URL Params](#url-params-3)
    - [Payload](#payload-3)
    - [Success Response](#success-response-3)
      - [Code](#code-8)
      - [Content](#content-3)
    - [Error Response](#error-response-3)
      - [Code](#code-9)
      - [Message](#message-5)
      - [Code](#code-10)
      - [Message](#message-6)
    - [Sample Call](#sample-call-3)
  - [Reset User Password](#reset-user-password)
    - [Method](#method-4)
    - [URL](#url-4)
    - [URL Params](#url-params-4)
    - [Payload](#payload-4)
    - [Success Response](#success-response-4)
      - [Code](#code-11)
      - [Message](#message-7)
    - [Error Response](#error-response-4)
      - [Code](#code-12)
      - [Message](#message-8)
    - [Sample Call](#sample-call-4)

## Get All Users

### Method  

`GET`

### URL

`/users/`

### URL Params

`None`

### Payload

`None`
### Success Response

#### Code

`200`

#### Content

```json
{
    "id": "jvyoUHeAZrYvEdHWpLjGI",
    "firstname": "john",
    "lastname": "doe",
    "picture": "thumbnail.jpg",
    "role": "user",
    "email": "johndoe@gmail.com"
}
```

### Error Response

#### Code

`403`

#### Content

```json
{
  "error": "Unauthorized"
}
```

### Sample Call

```javascript
axios.get('/api/users')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

## Get Users By ID

### Method  

`GET`

### URL

`/users/:id`

### URL Params

`id`

### Payload

`None`
### Success Response

#### Code

`200`

#### Content

```json
{
    "id": "jvyoUHeAZrYvEdHWpLjGI",
    "firstname": "john",
    "lastname": "doe",
    "picture": "thumbnail.jpg",
    "role": "user",
    "email": "johndoe@gmail.com"
}
```

### Error Response

#### Code

`403`

#### Content

```json
{
  "error": "Unauthorized"
}
```

#### Code

`404`

#### Content

```json
{
  "error": "User not found"
}
```

### Sample Call

```javascript
axios.get('/api/users/jvyoUHeAZrYvEdHWpLjGI')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```
## Update Users Profile

### Method  

`POST`

### URL

`/users/:id`

### URL Params

`id`

### Payload

| key       | value  |
| --------- | ------ |
| firstname | string |
| lastname  | string |
| picture   | string |
| password  | string |

### Success Response

#### Code

`200`

#### Content

```json
{
    "id": "jvyoUHeAZrYvEdHWpLjGI",
    "firstname": "john",
    "lastname": "doe",
    "picture": "thumbnail.jpg",
    "role": "user",
    "email": "johndoe@gmail.com"
}
```

### Error Response

#### Code

`403`

#### Content

```json
{
  "error": "Unauthorized"
}
```

#### Code

`404`

#### Content

```json
{
  "error": "User not found"
}
```

### Sample Call

```javascript
axios.post('/api/users/jvyoUHeAZrYvEdHWpLjGI', {
  firstname: "john",
  lastname: "doe",
  picture: "thumbnail.jpg",
  email: "johndoe@gmail.com",
  password: "password"
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

## Delete User By ID

### Method  

`DELETE`

### URL

`/users/:id`

### URL Params

`id`

### Payload

`None`

### Success Response

#### Code

`200`

#### Content

```json
{
    "id": "jvyoUHeAZrYvEdHWpLjGI",
    "firstname": "john",
    "lastname": "doe",
    "picture": "thumbnail.jpg",
    "role": "user",
    "email": "johndoe@gmail.com"
}
```

### Error Response

#### Code

`403`

#### Content

```json
{
  "error": "Unauthorized"
}
```

#### Code

`404`

#### Content

```json
{
  "error": "User not found"
}
```

### Sample Call

```javascript
axios.delete('/api/users/jvyoUHeAZrYvEdHWpLjGI')
.then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

## Reset User Password

### Method  

`POST`

### URL

`/users/reset_password/:email`

### URL Params

`email`

### Payload

`None`

### Success Response

#### Code

`200`

#### Content

```json
{
    "id": "jvyoUH",
    "message": "Check your email"
}
```

### Error Response

#### Code

`404`

#### Content

```json
{
    "error": "User not found"
}
```

### Sample Call

```javascript
axios.post('/api/user/reset_password/jvyoUH')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```