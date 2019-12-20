**CREATE User**
----
  Returns json data about a single user.
* **BASE URL**

  `http://localhost/api`

* **URL**

  `/auth/signup`

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**`
  {
    "email": "mytest21@mail.com",
    "password": "qwer4321"
    
  }
  `

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `
    {
      status: 'success',
      user: { id : String, tasks : [], email: String, points: Number },
      token: String
    }
    `
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    fetch('http://localhost:8080/api/auth/signup', {
      method: "POST",
      headers: { 'content-type': 'application/json' },
        body: JSON.stringify({email: "test111@mail.com", password: "qwer4321"})
    }).then(res => res.json()).then(resData => console.log('resData', resData))
  ```


**SIGN IN User**
----
  Returns json data about a single user.
* **BASE URL**

  `http://localhost/api`

* **URL**

  `/auth/signin`

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  `
  {
    "email": "mytest21@mail.com",
    "password": "qwer4321"
    
  }
  `

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `
    {
      status: 'success',
      user: { id : String, tasks : [], email: String, points: Number },
      token: String
    }
    `
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    fetch('http://localhost:8080/api/auth/signin', {
      method: "POST",
      headers: { 'content-type': 'application/json' },
        body: JSON.stringify({email: "test111@mail.com", password: "qwer4321"})
    }).then(res => res.json()).then(resData => console.log('resData', resData))
  ```

  
**GET CURRENT User**
----
  Returns json data about a single user.
* **BASE URL**

  `http://localhost/api`

* **URL**

  `/auth/current`

* **Method:**

  `GET`

* **HEADERS**

   **Required:**
 
   `Authorization`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `
    {
      status: 'success',
      user: { id : String, tasks : [], email: String, points: Number },
      token: String
    }
    `
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    const token = 'someToken';
    fetch('http://localhost:8080/api/auth/current', {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    }).then(res => res.json()).then(resData => console.log('resData', resData))
  ```

  
**UPDATE User task**
----
  Returns json data about a single user.
* **BASE URL**

  `http://localhost/api`

* **URL**

  `/users/points/userID`

* **Method:**

  `PUT`

* **HEADERS**

   **Required:**
 
   `Authorization`
  
*  **URL Params**

   **Required:**
 
   userID=[String]

* **Data Params**`
  body : {
    "points": Number
  }
  `

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `
    {
      status: 'success',
      user: { id : String, tasks : [], email: String, points: Number },
    }
    `
 
* **Error Response:**

  * **Code:** 404 USER NOT UPDATED <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    const token = 'someToken';
    fetch('http://localhost:8080/api/users/points/someUserID1212121asda', {
      method: "PUT",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
      body: JSON.stringify({points: 70})
    })
    }).then(res => res.json()).then(resData => console.log('resData', resData))
  ```

  
**CREATE User task**
----
  Returns json data about a single user.
* **BASE URL**

  `http://localhost/api`

* **URL**

  `/tasks`

* **Method:**

  `POST`

* **HEADERS**

   **Required:**
 
   `Authorization`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**`
  {
    "title": String,
    "taskPoints": Number
    
  }
  `

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `
    {
      status: 'success',
      tasks : [],
    }
    `
 
* **Error Response:**

  * **Code:** 404 TASK NOT SAVED <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    const token = 'someToken';
    fetch('http://localhost:8080/api/tasks', {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
      body: JSON.stringify({title: 'Task title', taskPoints: 10})
    })
    }).then(res => res.json()).then(resData => console.log('resData', resData))
  ```

  
**UPDATE User task**
----
  Returns json data about a single user.
* **BASE URL**

  `http://localhost/api`

* **URL**

  `/tasks/taskID`

* **Method:**

  `PUT`

* **HEADERS**

   **Required:**
 
   `Authorization`
  
*  **URL Params**

   **Required:**
 
   taskID=[String]

* **Data Params**`
  body : { 
    "keyToUpdate": "value",
  }
  `

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `
    {
      status: 'success',
      tasks : [],
    }
    `
 
* **Error Response:**

  * **Code:** 404 TASK NOT UPDATED <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    const token = 'someToken';
    fetch('http://localhost:8080/api/tasks/someTaskID2312131', {
      method: "PUT",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
      body: JSON.stringify({title: 'NEW Task title'})
    })
    }).then(res => res.json()).then(resData => console.log('resData', resData))
  ```