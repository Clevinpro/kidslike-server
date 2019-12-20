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

**HEADERS**

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