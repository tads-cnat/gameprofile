package com.gameprofile.grupospartidasapis.dto;

import com.gameprofile.grupospartidasapis.entities.Mov;

public class MovDTO {

    private Integer idGrupo;
    private String nome;
    
    public MovDTO() {
        // This constructor is intentionally empty. Nothing special is needed here.
    }

    public MovDTO(Integer idGrupo, String nome) {
        this.idGrupo = idGrupo;
        this.nome = nome;
    }

    public MovDTO(Mov mov) {
        idGrupo = mov.getIdGrupo();
        nome = mov.getNome();
    }

    public Integer getId() {
        return idGrupo;
    }

    public void setId(Integer idGrupo) {
        this.idGrupo = idGrupo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}