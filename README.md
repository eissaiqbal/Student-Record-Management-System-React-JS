# Student Record Management System

## Overview

The Student Record Management System is a web application built using React JS. It allows users to perform CRUD (Create, Read, Update, Delete) operations on student data. The application focuses on demonstrating core React concepts such as state management, controlled components, form validation, and responsive design.

## Technologies Used

React JS
JavaScript (ES6+)
CSS3

## Features

Controlled Components: All form inputs are managed using React state.
CRUD Operations: Users can add, update, and delete student records.
State Management: Data is stored in an array of objects using the useState hook.
Form Validation: Input fields are validated to prevent empty submissions and ensure data integrity.
Responsive Layout: Records are displayed in a table layout on desktop devices and a card layout on mobile devices.
Unique Keys: Unique identifiers are used for each list item to optimize rendering performance.

## Installation


1. Clone the repository or download the project files.
2. Open the terminal and navigate to the project directory.
3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and visit http://localhost:3000.

## Usage

### Add a Student
1. Enter the student details in the form fields (Name, Email, Course, Age).
2. Ensure all fields are filled correctly.
3. Click the Save Record button.

### Update a Student
1. Click the Edit button next to the student record you wish to modify.
2. Update the information in the form.
3. Click the Update Record button.

### Delete a Student
1. Click the Delete button next to the student record.
2. Confirm the action in the prompt dialog.

## Project Structure


```
Student-Record-Management-System-React-JS/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── StudentForm.jsx
│   │   └── StudentList.jsx
│   ├── App.css
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```

## Learning Outcomes

This project demonstrates the following competencies:

1. Implementation of CRUD operations in React.
2. Manipulation of objects and arrays within component state.
3. Creation and management of controlled forms.
4. Development of reusable components.
5. Rendering clean and professional user interfaces.

## Requirements Checklist

- Create form using controlled components
- Add, update, and delete student records
- Store data in array of objects using useState
- Validate empty input fields
- Display records in table or card layout
- Use unique keys while rendering list

## Browser Support

This application is compatible with modern web browsers including Chrome, Firefox, Safari, and Edge.

## License

This project is open source and available under the MIT License.

## Author

Eissa Iqbal
