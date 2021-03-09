# API Spec - Subscribe

## Sections

- [API Spec - Subscribe](#api-spec---subscribe)
  - [Sections](#sections)
  - [Get All Subcsriptions](#get-all-subcsriptions)
    - [Method](#method)
    - [URL](#url)
    - [URL Params](#url-params)
    - [Payload](#payload)
    - [Success Response](#success-response)
      - [Code](#code)
      - [Content](#content)
    - [Error Response](#error-response)
    - [Sample Call](#sample-call)
  - [Get Subscription by ID](#get-subscription-by-id)
    - [Method](#method-1)
    - [URL](#url-1)
    - [URL Params](#url-params-1)
    - [Payload](#payload-1)
    - [Success Response](#success-response-1)
      - [Code](#code-1)
      - [Content](#content-1)
    - [Error Response](#error-response-1)
      - [Code](#code-2)
      - [Message](#message)
    - [Sample Call](#sample-call-1)
  - [Add Subscription](#add-subscription)
    - [Method](#method-2)
    - [URL](#url-2)
    - [URL Params](#url-params-2)
    - [Payload](#payload-2)
    - [Success Response](#success-response-2)
      - [Code](#code-3)
      - [Content](#content-2)
    - [Error Response](#error-response-2)
      - [Code](#code-4)
      - [Message](#message-1)
    - [Sample Call](#sample-call-2)
  - [Delete Subscription](#delete-subscription)
    - [Method](#method-3)
    - [URL](#url-3)
    - [URL Params](#url-params-3)
    - [Payload](#payload-3)
    - [Success Response](#success-response-3)
      - [Code](#code-5)
      - [Content](#content-3)
    - [Error Response](#error-response-3)
      - [Code](#code-6)
      - [Message](#message-2)
      - [Code](#code-7)
      - [Message](#message-3)
    - [Sample Call](#sample-call-3)

## Get All Subcsriptions

### Method  

`GET`

### URL

`/subscribe/`

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
    "email": "johndoe@gmail.com",
}
```

### Error Response

`None`

### Sample Call

```javascript
axios.get('/api/subscribe').then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

## Get Subscription by ID

### Method  

`GET`

### URL

`/subscribe/:id`

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
    "email": "johndoe@gmail.com",
}
```

### Error Response

#### Code

`404`

#### Content

```json
{
    "error": "Subscription not found"
}
```
### Sample Call

```javascript
axios.get('/api/subscribe/jvyoUHeAZrYvEdHWpLjGI').then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

## Add Subscription

### Method  

`POST`

### URL

`/subscribe/`

### URL Params

`None`

### Payload

| key   | value  |
| ----- | ------ |
| email | string |

### Success Response

#### Code

`201`

#### Content

```json
{
    "id": "jvyoUHeAZrYvEdHWpLjGI",
    "email": "johndoe@gmail.com",
}
```

### Error Response

#### Code

`401`

#### Content

```json
{
    "error": "Invalid attribuets or values"
}
```

### Sample Call

```javascript
axios.post('/api/subscribe', {
    email: "johndoe@gmail.com",
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

## Delete Subscription

### Method  

`DELETE`

### URL

`/subscribe/:id`

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
    "email": "johndoe@gmail.com",
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
    "error": "Subscription not found"
}
```

### Sample Call

```javascript
axios.delete('/api/subscribe/jvyoUHeAZrYvEdHWpLjGI').then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```