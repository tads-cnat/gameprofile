FROM openjdk:17-jdk-slim-buster
WORKDIR /app
COPY pom.xml .
RUN ./mvnw dependency:go-offline
COPY src ./src
RUN ./mvnw package -DskipTests
CMD ["java", "-jar", "/app/target/grupos-partidas-apis-1.0.0.jar"]

