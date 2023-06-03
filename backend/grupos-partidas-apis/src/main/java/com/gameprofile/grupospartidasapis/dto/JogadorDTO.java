package com.gameprofile.grupospartidasapis.dto;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class JogadorDTO {

    private Integer id;

    @NotEmpty
    private String nickName;
    @NotEmpty(message = "O campo nome é obrigatório")
    private String nome;

    @NotEmpty(message = "O campo email é obrigatório")
    @Email
    private String email;
    @NotEmpty(message = "O campo senha é obrigatório")
    private String senha;
}