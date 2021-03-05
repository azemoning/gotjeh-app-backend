# API Spec - Jobs

## Sections
- [API Spec - Jobs](#api-spec---jobs)
  - [Sections](#sections)
  - [Get All Jobs](#get-all-jobs)
    - [Method](#method)
    - [URL](#url)
    - [URL Params](#url-params)
    - [Payload](#payload)
    - [Success Response](#success-response)
      - [Code](#code)
      - [Content](#content)
    - [Error Response](#error-response)
    - [Sample Call](#sample-call)
  - [Get Job by ID](#get-job-by-id)
    - [Method](#method-1)
    - [URL](#url-1)
    - [URL Params](#url-params-1)
    - [Payload](#payload-1)
    - [Success Response](#success-response-1)
      - [Code](#code-1)
      - [Content](#content-1)
    - [Error Response](#error-response-1)
    - [Sample Call](#sample-call-1)
  - [Add Job](#add-job)
    - [Method](#method-2)
    - [URL](#url-2)
    - [URL Params](#url-params-2)
    - [Payload](#payload-2)
    - [Success Response](#success-response-2)
      - [Code](#code-2)
      - [Content](#content-2)
    - [Error Response](#error-response-2)
      - [Code](#code-3)
      - [Message](#message)
      - [Code](#code-4)
      - [Message](#message-1)
    - [Sample Call](#sample-call-2)
  - [Update Job](#update-job)
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
      - [Code](#code-8)
      - [Message](#message-4)
    - [Sample Call](#sample-call-3)
  - [Delete Job](#delete-job)
    - [Method](#method-4)
    - [URL](#url-4)
    - [URL Params](#url-params-4)
    - [Payload](#payload-4)
    - [Success Response](#success-response-4)
      - [Code](#code-9)
      - [Content](#content-4)
    - [Error Response](#error-response-4)
      - [Code](#code-10)
      - [Message](#message-5)
      - [Code](#code-11)
      - [Message](#message-6)
    - [Sample Call](#sample-call-4)


## Get All Jobs

### Method  

`GET`

### URL

`/jobs/`

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
    "name": "Entry Data",
    "thumbnail": "thumbnail.jpg",
}
```

### Error Response

`none`

### Sample Call

```javascript
axios.get('/api/jobs')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

## Get Job by ID

### Method  

`GET`

### URL

`/jobs/:id`

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
    "name": "Entry Data",
    "thumbnail": "thumbnail.jpg",
    "status": "active",
    "content": "",
    "category_id": ""
}
```

### Error Response

`none`

### Sample Call

```javascript
axios.get('/api/jobs/jvyoUHeAZrYvEdHWpLjGI')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

## Add Job

### Method  

`POST`

### URL

`/jobs/`

### URL Params

`None`

### Payload

| key         | value  |
| ----------- | ------ |
| name        | string |
| content     | string |
| category_id | string |

### Success Response

#### Code

`201`

#### Content

```json
{
    "id": "jvyoUHeAZrYvEdHWpLjGI",
    "name": "Entry Data",
    "thumbnail": "thumbnail.jpg",
    "status": "active",
    "content": "",
    "category_id": ""
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
axios.post('/api/jobs/', {
    name: "Entry data",
    content: "",
    category_id: "",
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

## Update Job

### Method  

`POST`

### URL

`/jobs/:id`

### URL Params

`id`

### Payload

| key         | value  |
| ----------- | ------ |
| name        | string |
| thumbnail   | string |
| status      | string |
| content     | string |
| category_id | string |

### Success Response

#### Code

`200`

#### Content

```json
{
    "id": "jvyoUHeAZrYvEdHWpLjGI",
    "name": "Entry Data",
    "thumbnail": "thumbnail.jpg",
    "status": "active",
    "content": "",
    "category_id": ""
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
    "error": "Job not found"
}
```

### Sample Call

```javascript
axios.post('/api/jobs/jvyoUHeAZrYvEdHWpLjGI', {
    name: "Entry data",
    thumbnail: "thumbnail.jpg",
    status: "closed",
    content: "",
    category_id: "",
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

## Delete Job

### Method  

`DELETE`

### URL

`/jobs/:id`

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
    "name": "Entry Data",
    "thumbnail": "thumbnail.jpg",
    "status": "active",
    "content": "",
    "category_id": ""
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
    "error": "Job not found"
}
```

### Sample Call

```javascript
axios.delete('/api/jobs/jvyoUHeAZrYvEdHWpLjGI')
.then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```