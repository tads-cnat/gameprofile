# FROM openjdk:17-jdk-slim

#COPY grupos-partidas-apis-0.0.1-SNAPSHOT.jar /echo.war

FROM maven:3.8.4-openjdk-17-slim

WORKDIR /app

COPY pom.xml .

RUN mvn dependency:go-offline

COPY . .

RUN mvn package
RUN mvn test

ENV JAVA_OPTS="-Dserver.port=8080"

CMD java $JAVA_OPTS -jar target/grupos-partidas-apis-0.0.1-SNAPSHOT.jar
