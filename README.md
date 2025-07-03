# 📚 Book Review – Node.js & Express API

![License](https://img.shields.io/badge/license-MIT-green)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Backend-000000?logo=express)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)

**Book Review** is a RESTful backend API built using **Node.js** and **Express.js** as part of the IBM Full Stack Developer course. It allows users to browse books, register/login, and manage reviews — with secure JWT-based authentication and session support.

---

## 🔗 Project Repository

[https://github.com/badalrai21/online-book-review-IBM](https://github.com/badalrai21/online-book-review-IBM)

---

## 🚀 Features

- 📖 Retrieve books by **ISBN**, **author**, or **title**
- 🧑‍💻 Register and login using **JWT authentication**
- ✍️ Add, update, or delete personal reviews (protected endpoints)
- 🔐 Middleware-based token verification
- ⚡ Asynchronous methods using `async/await` and Promises
- 🧪 Tested with **Thunder Client** and **Axios client script**

---

## 📁 Project Structure

online-book-review-IBM/

├── books.js # In-memory book data
├── users.js # User registration and login logic
├── index.js # Main Express.js server and routing
├── client.js # Axios-based test script (Tasks 10–13)
├── package.json
├── README.md
├── LICENSE
└── .thunder-collection.json (optional)


---

## 🛠️ Getting Started

### 🔧 Installation

```bash
git clone https://github.com/badalrai21/online-book-review-IBM.git
cd online-book-review-IBM
npm install
````

#### ▶️ Run the Server
```bash
node index.js
```
By default, the app runs on http://localhost:5000

### 🧪 API Testing

#### ✅ Manual API Tests (Thunder Client)

GET /books

GET /books/isbn/:isbn

GET /books/author/:author

GET /books/title/:title

POST /register

POST /login

PUT /auth/review/:isbn (requires JWT token)

DELETE /auth/review/:isbn (requires JWT token)

### ✅ Automated Test Script (Axios)
Run this to test Tasks 10–13:
```
node client.js
```

### 📃 License
This project is licensed under the MIT License.

### 👤 Author
   Badal Kumar Rai
   
   GitHub: [@badalrai21](https://github.com/badalrai21).

   LinekdIn: [@BadalRai](https://www.linkedin.com/in/badal-rai)    
   
   Discord: Join our Discord Server [@NO2](https://discord.gg/Dnw4ZjEg)    
   

## 🙏 Acknowledgements
IBM SkillsBuild Full Stack Developer Program

Express.js and Node.js community

Thunder Client & Axios for testing

