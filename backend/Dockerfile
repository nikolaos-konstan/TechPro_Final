FROM maven:3.9.2-eclipse-temurin-17-alpine
WORKDIR /usr/src/mymaven
COPY ./pom.xml .
COPY ./src ./src
EXPOSE 8080
CMD ["mvn", "spring-boot:run"]