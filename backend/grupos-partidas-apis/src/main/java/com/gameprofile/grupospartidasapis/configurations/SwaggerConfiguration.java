package com.gameprofile.grupospartidasapis.configurations;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfiguration {
    @Bean
    public Docket api(){
        return new Docket(DocumentationTypes.SWAGGER_2).select().api()
    }
}
