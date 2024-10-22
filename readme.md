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
   git clone https://github.com/your_user/evaluaciones-360-api.git
   cd evaluaciones-360-api
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

### API Endpoints

   * POST /api/auth/register: User registration
   * POST /api/auth/login: Login (returns JWT)
   * GET /api/employees: Retrieve list of employees
   * POST /api/evaluations: Create a new evaluation
   * GET /api/evaluations/:id: Get details of an evaluation
   * PUT /api/evaluations/:id: Update an evaluation
   * GET /api/evaluations/employee/:id: Get evaluations of an employee
   * POST /api/feedback: Send feedback for an evaluation
   * GET /api/reports/employee/:id: Generate an evaluation report for an employee

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
* License

This project is under the MIT License. See the [LICENSE] file for more details.

### Contact
- For questions or comments, you can contact [Carlos Peláez](mailto:cpelaez0811@gmail.com)

