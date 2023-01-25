package com.gameprofile.grupospartidasapis.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.*;
@Data
@NoArgsConstructor
@AllArgsConstructor

public class JogadorModel {
    @Column(unique = true)
    private String login;
    private String password;


}
