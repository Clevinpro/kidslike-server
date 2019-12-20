**CREATE User**
----
  Returns json data about a single user.

* **URL**

  /auth/signup

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `id=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `
    {
      status: 'success',
      user: { id : String, tasks : [], email: String, points: Number }
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