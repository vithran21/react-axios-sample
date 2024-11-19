# Student Management React App

This project is a simple **React Application** that manages student details. It allows users to view, add, and list student details, such as name and email, using a local JSON server as the backend.

---

## Features

- Display student details in a table format.
- Add new student details (name and email).
- Backend handled by a local JSON server.

---

## Prerequisites

Before running this project, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A code editor like [VS Code](https://code.visualstudio.com/)

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd <your-project-folder>

2. **Install dependencies**:
   ```bash
   npm install
   ```

---

## Setting up the JSON Server

1. Install `json-server` globally (if not already installed):
   ```bash
   npm install -g json-server
   ```

2. Create a `db.json` file in the root directory with the following initial content:
   ```json
   {
     "students": []
   }
   ```

3. Start the JSON server:
   ```bash
   json-server --watch db.json --port 5000
   ```

4. The JSON server will be available at:  
   `http://localhost:5000/students`

---

## Running the React App

1. Start the React development server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to:
   `http://localhost:3000`

---

## How It Works

1. The React app fetches student details from the JSON server running on `http://localhost:5000/students`.
2. Adding a new student sends a POST request to the JSON server to save the student details.
3. All student details are displayed in a table format, excluding the `id`.

---

## Project Structure

```
├── public
├── src
│   ├── components
│   │   ├── Navbar.jsx        // Navbar Component
│   │   ├── AddStudent.jsx    // Add Student Component
│   │   ├── StudentDetail.jsx // Student Detail Table
│   ├── App.jsx               // Main App Component
│   ├── index.js              // Entry point for React
├── db.json                   // JSON server database
├── package.json              // Project dependencies
```

---

## Dependencies

- **React**: Frontend library for building the UI.
- **Axios**: For making HTTP requests to the JSON server.
- **json-server**: A lightweight server to simulate a REST API.

---

## Notes

- Ensure the JSON server is running before starting the React app.
- If the JSON server uses a port other than `5000`, update the API URLs in the React app code.

---

## License

This project is open-source and available under the MIT License.
```
