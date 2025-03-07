# Assessment: Implement an Authentication System with Refresh Token Mechanism

## Problem Statement

Your task is to implement an authentication system with a refresh token mechanism using Node.js, Express.js, and MongoDB. Users should receive both an access token and a refresh token upon login. The access token should expire quickly (15 minutes), while the refresh token should be stored in a secure HTTP-only cookie and used to issue new access tokens.

---

## Requirements

### Functional Requirements

1. **User Registration and Login**:
   - Users should be able to register and log in.
   - Upon successful login, users should receive both an access token and a refresh token.

2. **Token Management**:
   - Access tokens should expire after 15 minutes.
   - Refresh tokens should be stored in secure HTTP-only cookies.

3. **Refresh Token Endpoint**:
   - Implement a `/refresh-token` endpoint to validate the refresh token and issue a new access token.

4. **Protected Routes**:
   - Implement a protected route (e.g., `/profile`) that can only be accessed by authenticated users.

### Non-Functional Requirements

1. **Security**:
   - Passwords must be securely hashed using `bcryptjs`.
   - JWT tokens must be issued securely and stored in HTTP-only cookies.
   - Proper error handling should be implemented for database connections and authentication failures.

2. **Testing**:
   - Use Postman or Bruno to test all endpoints.
   - Ensure responses are correctly structured and include appropriate status codes.

---

## Tasks

### 1. Project Setup
- Set up a Node.js project.
- Install the required dependencies: `express`, `mongoose`, `bcryptjs`, `jsonwebtoken`, `cookie-parser`, and `dotenv`.
- Use environment variables (`.env`) to store sensitive information like the MongoDB connection string and JWT secret.

### 2. Database Connection
- Connect to a MongoDB database.
- Define a `User` schema with fields for `email` and `password`.
- Ensure passwords are securely hashed before saving them to the database.

### 3. Authentication Endpoints
- Implement the following endpoints:
  - **POST /auth**: Handle user registration and login. Issue access and refresh tokens stored in HTTP-only cookies.
  - **GET /refresh-token**: Validate the refresh token and issue a new access token.
  - **GET /profile**: A protected route that can only be accessed by authenticated users.

### 4. Middleware
- Implement middleware to verify JWT tokens from HTTP-only cookies.
- Ensure unauthorized users cannot access protected routes.

### 5. Testing
- Test all endpoints using Postman or Bruno.
- Ensure the following:
  - Users can register and log in successfully.
  - Access tokens expire after 15 minutes.
  - Refresh tokens are stored in HTTP-only cookies and can be used to issue new access tokens.
  - Protected routes are inaccessible without a valid access token.

---

## Constraints

1. **Access Token Expiry**: Access tokens must expire after 15 minutes.
2. **Refresh Token Storage**: Refresh tokens must be stored in secure HTTP-only cookies.
3. **Password Hashing**: Passwords must be securely hashed using `bcryptjs`.
4. **JWT Security**: JWT tokens must be issued securely and validated properly.

---

## Submission Guidelines

1. Push your project to GitHub and share the repository link.
2. Include a `README.md` file with the following:
   - Project description.
   - Setup instructions.
   - API endpoint documentation.
   - Testing instructions.
3. Ensure your code is well-structured and follows best practices.

---
## Evaluation Criteria

### 1. **Project Setup & Structure** (5 Marks)  
   - The project should follow a clear and organized folder structure.  
   - Use environment variables (`.env`) to store sensitive information.  
   - Include a well-documented `README.md` file with setup instructions, API documentation, and testing guidelines.  

### 2. **Dependencies & Configuration** (3 Marks)  
   - Install and configure the required dependencies: `express`, `mongoose`, `bcryptjs`, `jsonwebtoken`, `cookie-parser`, and `dotenv`.  
   - Ensure all dependencies are correctly set up and used in the project.  

### 3. **Database Connection** (2 Marks)  
   - Successfully connect to a MongoDB database.  
   - Implement proper error handling for database connection issues.  

### 4. **User Schema & Password Hashing** (3 Marks)  
   - Define a `User` schema with fields for `email` and `password`.  
   - Use `bcryptjs` to securely hash passwords before storing them in the database.  

### 5. **Authentication Logic** (5 Marks)  
   - Implement the `/auth` endpoint to handle both user registration and login.  
   - Check for existing users during registration and validate credentials during login.  
   - Issue both access and refresh tokens upon successful login.  

### 6. **Middleware/Refresh Token Implementation** (3 Marks)  
   - Implement middleware to verify JWT tokens from HTTP-only cookies.  
   - Create a `/refresh-token` endpoint to validate the refresh token and issue a new access token.  

### 7. **Protected Routes** (3 Marks)  
   - Implement a protected route (e.g., `/profile`) that restricts access to authenticated users.  
   - Ensure unauthorized users cannot access protected routes.  

### 8. **Token Handling & Security** (3 Marks)  
   - Issue JWT tokens securely and store them in HTTP-only cookies.  
   - Ensure access tokens expire after 15 minutes and refresh tokens have a longer expiry.  
   - Implement proper token validation and error handling.  

### 9. **API Testing & Functionality** (3 Marks)  
   - Test all endpoints using Postman or Bruno.  
   - Ensure responses are correctly structured and include appropriate status codes.  
   - Verify that all functionalities (registration, login, token refresh, and protected routes) work as expected.  

---

### **Total Marks: 30**  

                                       |

---

## Notes

- Ensure your code is clean, modular, and well-documented.
- Use proper error handling and status codes in your API responses.
- Test your implementation thoroughly before submission.

---

Good luck!