# 360 Evaluations API

## Description

This is a RESTful API developed in Node.js with Express.js and Mongoose, designed to perform 360-degree evaluations of remote employees in an app development company. The API allows for the management of users, employees, evaluations, and feedback, as well as the generation of reports.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose as ODM)
- **Authentication**: JWT (JSON Web Token)

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB Atlas (account and database set up)

### Steps to Clone the Repository

1. Clone the repository:
   ```bash
   git clone https://github.com/Cpelaez5/evaluations-app.git
   cd evaluations-app
   ```
2. Install the dependencies:
    ```powershell
    npm install
    ```
3. Set up the environment variables. Create a .env file at the root of the project and add the following variables:
    ```conf
    EVALUATIONS_APP_MONGODB_HOST=your_mongodb_atlas_uri
    EVALUATIONS_APP_MONGODB_DATABASE=your_db_name
    EVALUATIONS_APP_MONGODB_PORT=3000
    ```

### Usage

### API Link
- You can access the API at the following link: [360 Degree Evaluations API (Render)](https://evaluations-app.onrender.com/api) or [360 Degree Evaluations API (Railway)](https://thorough-renewal-production.up.railway.app/api)

## API Endpoints

### Authentication Endpoints

- **POST /api/auth/register**  
  Register a new user. Checks for duplicate username or email and ensures the specified roles exist.

- **POST /api/auth/login**  
  Log in a user and return a JWT for authentication.

### Employee Endpoints

- **POST /api/employees**  
  Create a new employee (accessible only to managers or admins).

- **GET /api/employees**  
  Retrieve all employees (accessible only to admins).

- **GET /api/employees/:employeeId**  
  Retrieve an employee by ID (accessible to any authenticated user).

- **PUT /api/employees/:employeeId**  
  Update an employee by ID (accessible only to managers or admins).

- **DELETE /api/employees/:employeeId**  
  Delete an employee by ID (accessible only to admins).

### Evaluation Endpoints

- **POST /api/evaluations**  
  Create a new evaluation (accessible only to managers or admins).

- **GET /api/evaluations**  
  Retrieve all evaluations (accessible only to admins).

- **GET /api/evaluations/employee/:employeeId**  
  Retrieve evaluations for a specific employee (accessible to any authenticated user).

- **GET /api/evaluations/:evaluationId**  
  Retrieve a specific evaluation by ID (accessible to any authenticated user).

- **PUT /api/evaluations/:evaluationId**  
  Update an evaluation (accessible only to the creator or admin).

- **DELETE /api/evaluations/:evaluationId**  
  Delete an evaluation (accessible only to admins).

- **POST /api/evaluations/:evaluationId/start**  
  Start an evaluation (changes the status to 'inProgress', accessible only to managers or admins).

- **POST /api/evaluations/:evaluationId/complete**  
  Complete an evaluation (changes the status to 'completed', accessible only to managers or admins).

- **GET /api/evaluations/:evaluationId/progress**  
  Retrieve the progress of an evaluation (accessible to any authenticated user).

- **POST /api/evaluations/:evaluationId/feedback**  
  Submit feedback for an evaluation (accessible to any authenticated user).

### Feedback Endpoints

- **POST /api/feedback**  
  Create new feedback (accessible to any authenticated user).

- **GET /api/feedback/:feedbackId**  
  Retrieve feedback by ID (accessible to any authenticated user).

- **GET /api/feedback/evaluation/:evaluationId**  
  Retrieve all feedback for a specific evaluation (accessible to any authenticated user).

- **PUT /api/feedback/:feedbackId**  
  Update feedback (accessible only to the creator or admin).

- **DELETE /api/feedback/:feedbackId**  
  Delete feedback (accessible only to the creator or admin).

### User Endpoints

- **GET /api/users**  
  Retrieve all users (accessible only to admins).

- **GET /api/users/:userId**  
  Retrieve a user by ID (accessible only to admins).

- **PUT /api/users/:userId**  
  Update a user by ID (accessible only to admins).

- **DELETE /api/users/:userId**  
  Delete a user by ID (accessible only to admins).

### Authentication and Roles
The API implements JWT authentication and handles user roles:

   * Admin
   * Manager
   * Employee

### Example Request
Example of how to register

    ```json
    curl -X POST https://evaluations-app.onrender.com/api/auth/register \
    -H "Content-Type: application/json" \
    -d '{
    "username": "your_user_name",
    "email": "your@email.com",
    "password": "your_password",
    "roles": ["admin","manager","employee"]
    }'

    ```

### Project Structure

    ```s
    /evaluations-api
    ├── src
    │   ├── /controllers     # controllers
    │   ├── /lib             # initial database configurations
    │   ├── /middlewares     # Middleware for error handling and validation
    │   ├── /models          # Data models (User, Employee, Evaluation, Feedback)
    │   ├── /routes          # API routes
    │   ├── config.js        # Configuration for the token generation key
    │   ├── database.js      # mongoose database configuration
    │   ├── server.js        # Main file to start the server
    ├── .env                 # File for environment variables
    └── README.md            # Project documentation
    ```

### Tests
If tests have been implemented, you can run them with the following command:

    ```powershell
    npm test
    ```

### Contribution
- Contributions are welcome. If you wish to contribute, please follow these steps:

* Fork the repository.
* Create a new branch (git checkout -b feature/new-feature).
* Make your changes and commit them (git commit -m 'Add new feature').
* Push the branch (git push origin feature/new-feature).
* Open a Pull Request.

### Contact
- For questions or comments, you can contact [Carlos Peláez](mailto:cpelaez0811@gmail.com)

