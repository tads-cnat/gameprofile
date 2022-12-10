package com.gameprofile.grupospartidasapis.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.sql.Timestamp;

@Data
@Entity(name = "vw_info_grupos")
public class InfoGrupos {
    @Id
    private Integer idgrupo;
    private String nome;
    private Integer top;
    private Integer bot;
    private Integer mid;
    private Integer adc;
    private Integer jungle;
    private String statuspartida;
    private String proximapartida;
}
