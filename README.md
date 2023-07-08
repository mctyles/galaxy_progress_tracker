# Galaxy Progress Tracker

Galaxy Progress Tracker was developed as a simple way to organize and track graded assignments for elementary school educators. With simplicity in mind, users can add students to their roster for the current academic year, add new assignments, and add graded assignments including digital copies as image files/PDFs of the documents, which can be easily accessed and downloaded as needed. Given that assignments are attached to both a student and a specifically assigned activity, Galaxy Progress Tracker allows for easy searching and viewing of graded assignments for a specific student or for a specific assignment. This structure is less limiting than using file storage systems, which would require a rigid file structure or strict file naming practice in order to effectively organize graded assignments.

## Technologies Used

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## Getting Started

Login is required in order to use Galaxy Progress Tracker. In order to create an account, click **Register** in the navbar at the top of the page. If accessing the application on a smaller screen, you can click the hamburger icon in the upper righthand corner of the page to view the navigation links. Once you have created an account, you will be able to log in by clicking **Login** and then entering your credentials.

## Adding and Viewing Students

To access and add student information, you will navigate to **Students** using the navbar. A list of students will be displayed, and you can click on a row to view a student's profile, which will display their information and graded assignments. You can filter the list by entering a query in the search bar and by selecting the desired academic year in the dropdown menu.

To add a new student, you can click the button **Add New Student to Roster**. A form will appear in which you can enter the student's information before submitting.

## Adding and Viewing Assignments

To access and add student information, you will navigate to **Manage Assignments** using the navbar. A list of assignments will be displayed, and you can click on a row to view an assignment profile, which will display its information and and all graded documents. You can search for specific assignments by using the searchbar.

## Viewing and Adding Graded Assignments and Uploading Files

There are two different options for viewing and adding graded assignments:

1. To view graded assignments by student, you will first navigate to the students page by clicking **Students** in the navbar. You will then click the row listing the name of the student for whom you would like to access a graded assignment. When viewing the student profile, you will also be able to add a graded assignment by clicking the **Add Graded Assignment for [Student Name]** button. You can then enter the information for the graded assignment and upload a copy of the document by clicking **Choose File**, which will allow you to browse for files on your machine, and then by clicking **Upload**. A progress bar will be displayed showing the status of the upload. The upload must complete before submitting the information for the graded assignment.

2. To view graded assignments by a specific assignment, you will navigate to the assignments page by clicking **Manage Assignments** in the navbar. You will then click the row listing the title of the assignment. When viewing the assignment profile, you will be able to add a graded assignment by clicking the **Add Graded Assignment for [Assignment Title]** button. You will then follow the same instructions listed above to add the graded assignment.
