# API Spec - Categories

## Sections

- [API Spec - Categories](#api-spec---categories)
  - [Sections](#sections)
  - [Get All Categories](#get-all-categories)
    - [Method](#method)
    - [URL](#url)
    - [URL Params](#url-params)
    - [Payload](#payload)
    - [Success Response](#success-response)
      - [Code](#code)
      - [Content](#content)
    - [Error Response](#error-response)
    - [Sample Call](#sample-call)
  - [Get Category by ID](#get-category-by-id)
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
  - [Add Category](#add-category)
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
      - [Code](#code-5)
      - [Message](#message-2)
    - [Sample Call](#sample-call-2)
  - [Update Category](#update-category)
    - [Method](#method-3)
    - [URL](#url-3)
    - [URL Params](#url-params-3)
    - [Payload](#payload-3)
    - [Success Response](#success-response-3)
      - [Code](#code-6)
      - [Content](#content-3)
    - [Error Response](#error-response-3)
      - [Code](#code-7)
      - [Message](#message-3)
      - [Code](#code-8)
      - [Message](#message-4)
      - [Code](#code-9)
      - [Message](#message-5)
    - [Sample Call](#sample-call-3)
  - [Delete Category](#delete-category)
    - [Method](#method-4)
    - [URL](#url-4)
    - [URL Params](#url-params-4)
    - [Payload](#payload-4)
    - [Success Response](#success-response-4)
      - [Code](#code-10)
      - [Content](#content-4)
    - [Error Response](#error-response-4)
      - [Code](#code-11)
      - [Message](#message-6)
      - [Code](#code-12)
      - [Message](#message-7)
    - [Sample Call](#sample-call-4)

## Get All Categories

### Method  

`GET`

### URL

`/categories/`

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
    "id": "jvyoUH",
    "name": "Digital Marketing"
}
```

### Error Response

`None`

### Sample Call

```javascript
axios.get('/api/categories')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

## Get Category by ID

### Method  

`GET`

### URL

`/categories/:id`

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
    "id": "jvyoUH",
    "name": "Digital Marketing"
}
```

### Error Response

#### Code

`404`

#### Content

```json
{
    "error": "Category not found"
}
```

### Sample Call

```javascript
axios.get('/api/categories/jvyoUH')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

## Add Category

### Method  

`POST`

### URL

`/categories/`

### URL Params

`None`

### Payload

| key  | value  |
| ---- | ------ |
| name | string |

### Success Response

#### Code

`201`

#### Content

```json
{
    "id": "jvyoUH",
    "name": "Digital Marketing"
}
```

### Error Response

#### Code

`401`

#### Content

```json
{
    "error": "Invalid attributes or values"
}
```

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
axios.post('/api/categories', {
    name: "Digital Marketing",
})
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

## Update Category

### Method  

`POST`

### URL

`/categories/:id`

### URL Params

`id`

### Payload

| key  | value  |
| ---- | ------ |
| name | string |

### Success Response

#### Code

`200`

#### Content

```json
{
    "id": "jvyoUH",
    "name": "Entry Data"
}
```

### Error Response

#### Code

`401`

#### Content

```json
{
    "error": "Invalid attributes or values"
}
```

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
    "error": "Category not found"
}
```

### Sample Call

```javascript
axios.post('/api/categories/jvyoUH', {
    name: "Entry Data",
})
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

## Delete Category

### Method  

`POST`

### URL

`/categories/:id`

### URL Params

`id`

### Payload

`none`

### Success Response

#### Code

`200`

#### Content

```json
{
    "id": "jvyoUH",
    "name": "Entry Data"
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
    "error": "Category not found"
}
```

### Sample Call

```javascript
axios.delete('/api/categories/jvyoUH')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```