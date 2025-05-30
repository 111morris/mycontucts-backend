#  Contact Manager API

A full-featured **Contact Manager REST API** built with **Node.js**, **Express.js**, **MongoDB**, and **JWT** for authentication. This project covers the essential concepts of backend API development, including user authentication, authorization, CRUD operations, secure route protection, and error handling.


---

##  Features

- REST API Architecture
- Modular Project Structure
- Express Router & Middleware
- MongoDB Integration via Mongoose
- User Authentication with JWT
- Password Hashing with bcrypt
- Secure Routes (Only logged-in users can access their contacts)
- Relationship between Users & Contacts
- Full CRUD for Contacts
- Environment-based Configuration

---

##  Project Structure



```
contact-manager-api/
│
├── config/               # Database connection
├── controllers/          # Route controllers for users and contacts
├── middleware/           # Custom middlewares (auth, error handling)
├── models/               # Mongoose models
├── routes/               # Express routes for contacts and users
├── utils/                # Utility functions (e.g., asyncHandler)
├── .env                  # Environment variables
├── server.js             # Entry point of the application
└── package.json
```



---

##  Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **Password Security**: bcrypt
- **API Testing**: Thunder Client / Postman

---

##  Authentication Flow

- **Register** a new user (passwords are hashed).
- **Login** to receive a JWT access token.
- Token is required to access protected routes.
- Each user can only access **their own** contacts.

---

##  Contact Management Features

- **GET** all contacts for logged-in user
- **POST** a new contact (for logged-in user)
- **GET / PUT / DELETE** a contact by ID (user-specific)

---

##  Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB (local or Atlas)
- Thunder Client / Postman for testing

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/contact-manager-api.git
cd contact-manager-api
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file**

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. **Start the server**

```bash
npm run dev   # For development with nodemon
```

---

##  API Endpoints

### Auth Routes

| Method | Endpoint              | Description                |
| ------ | --------------------- | -------------------------- |
| POST   | `/api/users/register` | Register a new user        |
| POST   | `/api/users/login`    | Login user & get token     |
| GET    | `/api/users/current`  | Get current logged-in user |

### Contact Routes (Protected)

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| GET    | `/api/contacts`     | Get all contacts     |
| POST   | `/api/contacts`     | Create a new contact |
| GET    | `/api/contacts/:id` | Get a contact by ID  |
| PUT    | `/api/contacts/:id` | Update a contact     |
| DELETE | `/api/contacts/:id` | Delete a contact     |

> ⚠️ All `/contacts` routes require JWT token in the `Authorization` header.


---

##  Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change or improve.

---

##  License

[MIT](LICENSE)

---

##  Acknowledgements

This project was inspired by hands-on practice and learning to implement core backend development concepts in a real-world application.

---

