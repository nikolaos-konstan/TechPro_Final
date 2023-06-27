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
    Frontend:
        -Pagination
        -Convert time format
        -Add warning on delete of items that have dependencies

Known Bugs/Problems

    ON DELETE CASCADE happens in the .sql because it couldn't be done in the backend
    Deleting entries too quickly may result in error

Please report any bugs or problems you encounter by creating an issue in the project's GitHub repository.
