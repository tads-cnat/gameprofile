package com.gameprofile.grupospartidasapis.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

import java.sql.Timestamp;

@Data
@Entity(name = "partidas")
public class Partida {
    @Id
    @Column(name="id_partida")
    private Integer idPartida;
    @Column(name="id_grupo")
    private Integer idGrupo;
    private String horario;
    private Integer tipo;
    private Integer status;
}