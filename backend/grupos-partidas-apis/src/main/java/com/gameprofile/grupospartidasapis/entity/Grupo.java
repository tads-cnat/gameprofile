package com.gameprofile.grupospartidasapis.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.experimental.Accessors;
import org.hibernate.annotations.Type;

import java.io.Serial;
import java.text.DateFormat;
@Accessors(chain = true)
@Data
@Entity(name = "gruposteste")

public class Grupo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //@Type(type = Integer)
    @Column(name="id_grupo")
    private Integer idGrupo;
    private String nome;
    private Integer top;
    private Integer bot;
    private Integer mid;
    private Integer adc;
    private Integer jungle;
    private Integer bloqueado;
    @Column(name="criado_por")
    private Integer criadoPor;
    @Column(name="criado_em")
    private String criadoEm;
    @Column(name="editado_em")
    private String editadoEm;
}
