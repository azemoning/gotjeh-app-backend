# API Spec - Courses

## Sections

- [API Spec - Courses](#api-spec---courses)
  - [Sections](#sections)
  - [Get All Courses](#get-all-courses)
    - [Method](#method)
    - [URL](#url)
    - [URL Params](#url-params)
    - [Payload](#payload)
    - [Success Response](#success-response)
      - [Code](#code)
      - [Content](#content)
    - [Error Response](#error-response)
    - [Sample Call](#sample-call)
  - [Get Courses by ID](#get-courses-by-id)
    - [Method](#method-1)
    - [URL](#url-1)
    - [URL Params](#url-params-1)
    - [Payload](#payload-1)
    - [Success Response](#success-response-1)
      - [Code](#code-1)
      - [Content](#content-1)
    - [Error Response](#error-response-1)
      - [Code](#code-2)
      - [Content](#content-2)
    - [Sample Call](#sample-call-1)
  - [Get Course Section Content by ID](#get-course-section-content-by-id)
    - [Method](#method-2)
    - [URL](#url-2)
    - [URL Params](#url-params-2)
    - [Payload](#payload-2)
    - [Success Response](#success-response-2)
      - [Code](#code-3)
      - [Content](#content-3)
    - [Error Response](#error-response-2)
      - [Code](#code-4)
      - [Content](#content-4)
      - [Code](#code-5)
      - [Content](#content-5)
    - [Sample Call](#sample-call-2)
  - [Add Course](#add-course)
    - [Method](#method-3)
    - [URL](#url-3)
    - [URL Params](#url-params-3)
    - [Payload](#payload-3)
    - [Success Response](#success-response-3)
      - [Code](#code-6)
      - [Content](#content-6)
    - [Error Response](#error-response-3)
      - [Code](#code-7)
      - [Content](#content-7)
      - [Code](#code-8)
      - [Content](#content-8)
    - [Sample Call](#sample-call-3)
  - [Add Course Section](#add-course-section)
    - [Method](#method-4)
    - [URL](#url-4)
    - [URL Params](#url-params-4)
    - [Payload](#payload-4)
    - [Success Response](#success-response-4)
      - [Code](#code-9)
      - [Content](#content-9)
    - [Error Response](#error-response-4)
      - [Code](#code-10)
      - [Content](#content-10)
      - [Code](#code-11)
      - [Content](#content-11)
      - [Code](#code-12)
      - [Content](#content-12)
    - [Sample Call](#sample-call-4)
  - [Add Course Section Content](#add-course-section-content)
    - [Method](#method-5)
    - [URL](#url-5)
    - [URL Params](#url-params-5)
    - [Payload](#payload-5)
    - [Success Response](#success-response-5)
      - [Code](#code-13)
      - [Content](#content-13)
    - [Error Response](#error-response-5)
      - [Code](#code-14)
      - [Content](#content-14)
      - [Code](#code-15)
      - [Content](#content-15)
      - [Code](#code-16)
      - [Content](#content-16)
    - [Sample Call](#sample-call-5)
  - [Update Course](#update-course)
    - [Method](#method-6)
    - [URL](#url-6)
    - [URL Params](#url-params-6)
    - [Payload](#payload-6)
    - [Success Response](#success-response-6)
      - [Code](#code-17)
      - [Content](#content-17)
    - [Error Response](#error-response-6)
      - [Code](#code-18)
      - [Content](#content-18)
      - [Code](#code-19)
      - [Content](#content-19)
      - [Code](#code-20)
      - [Content](#content-20)
    - [Sample Call](#sample-call-6)
  - [Update Course Section](#update-course-section)
    - [Method](#method-7)
    - [URL](#url-7)
    - [URL Params](#url-params-7)
    - [Payload](#payload-7)
    - [Success Response](#success-response-7)
      - [Code](#code-21)
      - [Content](#content-21)
    - [Error Response](#error-response-7)
      - [Code](#code-22)
      - [Content](#content-22)
      - [Code](#code-23)
      - [Content](#content-23)
      - [Code](#code-24)
      - [Content](#content-24)
    - [Sample Call](#sample-call-7)
  - [Update Course Section Content](#update-course-section-content)
    - [Method](#method-8)
    - [URL](#url-8)
    - [URL Params](#url-params-8)
    - [Payload](#payload-8)
    - [Success Response](#success-response-8)
      - [Code](#code-25)
      - [Content](#content-25)
    - [Error Response](#error-response-8)
      - [Code](#code-26)
      - [Content](#content-26)
      - [Code](#code-27)
      - [Content](#content-27)
      - [Code](#code-28)
      - [Content](#content-28)
    - [Sample Call](#sample-call-8)
  - [Delete Course](#delete-course)
    - [Method](#method-9)
    - [URL](#url-9)
    - [URL Params](#url-params-9)
    - [Payload](#payload-9)
    - [Success Response](#success-response-9)
      - [Code](#code-29)
      - [Content](#content-29)
    - [Error Response](#error-response-9)
      - [Code](#code-30)
      - [Content](#content-30)
      - [Code](#code-31)
      - [Content](#content-31)
    - [Sample Call](#sample-call-9)
  - [Delete Course Section](#delete-course-section)
    - [Method](#method-10)
    - [URL](#url-10)
    - [URL Params](#url-params-10)
    - [Payload](#payload-10)
    - [Success Response](#success-response-10)
      - [Code](#code-32)
      - [Content](#content-32)
    - [Error Response](#error-response-10)
      - [Code](#code-33)
      - [Content](#content-33)
      - [Code](#code-34)
      - [Content](#content-34)
    - [Sample Call](#sample-call-10)
  - [Delete Course Section Content](#delete-course-section-content)
    - [Method](#method-11)
    - [URL](#url-11)
    - [URL Params](#url-params-11)
    - [Payload](#payload-11)
    - [Success Response](#success-response-11)
      - [Code](#code-35)
      - [Content](#content-35)
    - [Error Response](#error-response-11)
      - [Code](#code-36)
      - [Content](#content-36)
      - [Code](#code-37)
      - [Content](#content-37)
    - [Sample Call](#sample-call-11)

## Get All Courses

### Method  

`GET`

### URL

`/courses/`

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
    "title": "Data Entries for Beginner", 
    "thumbnail": "thumbnail.jpg",
    "price": 0
}
```

### Error Response

`None`

### Sample Call

```javascript
axios.get('/api/courses/')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

## Get Courses by ID

### Method  

`GET`

### URL

`/courses/:id`

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
    "title": "Data Entries for Beginner", 
    "thumbnail": "thumbnail.jpg",
    "price": 0,
    "description": "123",
    "course_section": [
      {
        "section_title": "Microsoft Excel",
        "section_contents": [
          {
            "section_content_title": "Introduction to Microsoft Excel"
          },
          {
            "section_content_title": "Installing Microsoft Excel"
          }
        ],
      },
      {
        "section_title": "Google Sheet",
        "section_contents": [
          {
            "section_content_title": "Introduction to Google Sheet"
          },
          {
            "section_content_title": "Google Sheet vs Microsoft Excel"
          }
        ],
      }
    ]
}
```

### Error Response

#### Code

`404`

#### Content

```json
{
  "error": "course not found"
}
```

### Sample Call

```javascript
axios.get('/api/courses/', {
  params: {
    id: "jvyoUH"
  }
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

## Get Course Section Content by ID

### Method  

`GET`

### URL

`/courses/:course_id/:course_section_id/:id`

### URL Params

- `course_id`
- `course_section_id`
- `id`

### Payload

`None`

### Success Response

#### Code

`200`

#### Content

```json
{
    "id": "jvyoUH",
    "name": "",
    "content": "",
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
  "error": "Course section content not found"
}
```

### Sample Call

```javascript
axios.get('/api/courses/jvyoUH/jvyoUH/jvyoUH')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

## Add Course

### Method  

`POST`

### URL

`/courses/`

### URL Params

`None`

### Payload

| key         | value   |
| ----------- | ------- |
| admin_id    | string  |
| title       | string  |
| thumbnail   | string  |
| description | string  |
| price       | integer |
| category_id | string  |
<!-- TODO here -->

### Success Response

#### Code

`201`

#### Content

```json
{
    "id": "jvyoUH",
    "admin_id": "",
    "title": "Data Entries for Beginner", 
    "thumbnail": "thumbnail.jpg",
    "description": "123",
    "price": 0,
    "category_id": ""
}
```

### Error Response

#### Code

`401`

#### Content

```json
{
  "error": "Invalid attributes or value"
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
axios.post('/api/courses/', {
  admin_id: "",
  title: "",
  thumbnail: "",
  description: "",
  price: 0,
  category_id: "",
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

## Add Course Section

### Method  

`POST`

### URL

`/courses/:course_id/`

### URL Params

`course_id`

### Payload

| key       | value  |
| --------- | ------ |
| course_id | string |
| name      | string |

### Success Response

#### Code

`201`

#### Content

```json
{
    "id": "jvyoUH",
    "course_id": "",
    "name": "Microsoft Excel", 
}
```

### Error Response

#### Code

`401`

#### Content

```json
{
  "error": "Invalid attributes or value"
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
  "error": "Course not found"
}
```

### Sample Call

```javascript
axios.post('/api/courses/jvyoUH', {
  course_id: "jvyoUH",
  name: ""
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

## Add Course Section Content

### Method  

`POST`

### URL

`/courses/:course_id/:section_id/`

### URL Params

- `course_id`
- `section_id`

### Payload

| key               | value  |
| ----------------- | ------ |
| course_section_id | string |
| name              | string |
| content           | string |

### Success Response

#### Code

`201`

#### Content

```json
{
    "id": "jvyoUH",
    "course_id": "",
    "name": "Introduction to Microsoft Excel", 
    "content": "",
}
```

### Error Response

#### Code

`401`

#### Content

```json
{
  "error": "Invalid attributes or value"
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
  "error": "Course not found"
}
```

### Sample Call

```javascript
axios.post('/api/courses/jvyoUH/jvyoUH', {
  course_section_id: "jvyoUH",
  name: "",
  content: "",
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

## Update Course

### Method  

`POST`

### URL

`/courses/:id`

### URL Params

`id`

### Payload

| key         | value   |
| ----------- | ------- |
| title       | string  |
| thumbnail   | string  |
| description | string  |
| price       | integer |
| category_id | string  |
<!-- TODO here -->

### Success Response

#### Code

`200`

#### Content

```json
{
    "id": "jvyoUH",
    "title": "Data Entries for Intermediate", 
    "thumbnail": "thumbnail.jpg",
    "description": "123",
    "price": 0,
    "category_id": ""
}
```

### Error Response

#### Code

`401`

#### Content

```json
{
  "error": "Invalid attributes or value"
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
  "error": "Course not found"
}
```

### Sample Call

```javascript
axios.put('/api/courses/jvyoUH', {
  title: "",
  thumbnail: "",
  description: "",
  price: 0,
  category_id: "",
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

## Update Course Section

### Method  

`POST`

### URL

`/courses/:course_id/:id`

### URL Params

- `course_id`
- `id`

### Payload

| key  | value  |
| ---- | ------ |
| name | string |
<!-- TODO here -->

### Success Response

#### Code

`200`

#### Content

```json
{
    "id": "jvyoUH",
    "course_id": "jvyoUH", 
    "name": "",
}
```

### Error Response

#### Code

`401`

#### Content

```json
{
  "error": "Invalid attributes or value"
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
  "error": "Course section not found"
}
```

### Sample Call

```javascript
axios.put('/api/courses/jvyoUH/jvyoUH', {
  name: "",
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

## Update Course Section Content

### Method  

`POST`

### URL

`/courses/:course_id/:couse_section_id`

### URL Params

- `course_id`
- `course_section_id`
- `id`

### Payload

| key     | value  |
| ------- | ------ |
| name    | string |
| content | string |
<!-- TODO here -->

### Success Response

#### Code

`200`

#### Content

```json
{
    "id": "jvyoUH",
    "course_section_id": "jvyoUH", 
    "name": "",
    "content": "",
}
```

### Error Response

#### Code

`401`

#### Content

```json
{
  "error": "Invalid attributes or value"
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
  "error": "Course section content not found"
}
```

### Sample Call

```javascript
axios.put('/api/courses/jvyoUH/jvyoUH/jvyoUH', {
  name: "",
  content: "",
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

## Delete Course

### Method  

`DELETE`

### URL

`/courses/:id`

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
    "title": "Data Entries for Intermediate",
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
  "error": "Course not found"
}
```

### Sample Call

```javascript
axios.delete('/api/courses/jvyoUH').then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

## Delete Course Section

### Method  

`DELETE`

### URL

`/courses/:course_id/:id`

### URL Params

- `course_id`
- `id`

### Payload

`None`

### Success Response

#### Code

`200`

#### Content

```json
{
    "id": "jvyoUH",
    "course_id": "jvyoUH",
    "name": "Microsoft Excel",
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
  "error": "Course section not found"
}
```

### Sample Call

```javascript
axios.delete('/api/courses/jvyoUH/jvyoUH').then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```

## Delete Course Section Content

### Method  

`DELETE`

### URL

`/courses/:course_id/:course_section_id/:id`

### URL Params

- `course_id`
- `course_section_id`
- `id`

### Payload

`None`

### Success Response

#### Code

`200`

#### Content

```json
{
    "id": "jvyoUH",
    "course_section_id": "jvyoUH",
    "name": "Introduction to Microsoft Excel",
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
  "error": "Course section content not found"
}
```

### Sample Call

```javascript
axios.delete('/api/courses/jvyoUH/jvyoUH/jvyoUH').then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
```