# TechPro_Final

Description

This project is a full-stack application that utilizes MySQL for the database, Maven, Spring Boot, and Java for the backend, and React for the frontend. The application is containerized using Docker for easy deployment. The purpose of this project is to provide a comprehensive template for developing a full-stack application using the specified technologies.
Installation and Setup
Prerequisites

    Docker

Steps

    Clone the repository: git clone https://github.com/nikolaos-konstan/TechPro_Final.git
    Navigate to the project directory: cd TechPro_Final
    Build and run the application using Docker: docker compose up --build -d

The application will now be running and accessible.

Open [http://localhost:3000] to view it in your browser.

Open [http://${VM's-IP}:3000] if you're running the containers in a VM.

You can run swagger in a similar way: ${localhost or ip}:8080/swagger-ui/index.html

Technologies Used

    MySQL
    Maven
    Spring Boot
    Java
    React
    Docker

Further To-Do

    Change Swagger directory
    Measure Performance
    "All Orders" page needs to refresh after deleting an item from "All Items" page. Right now this results in a bug of showing the item untill you manually refresh
    Frontend:
        -Pagination
        -Add warning on delete of items that have dependencies

Known Bugs/Problems

    ON DELETE CASCADE happens in the .sql because it couldn't be done in the backend
    Deleting entries too quickly may result in error
