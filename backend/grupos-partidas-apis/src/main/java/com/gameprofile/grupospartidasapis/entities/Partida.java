package com.gameprofile.grupospartidasapis.entities;
import com.gameprofile.grupospartidasapis.base.Identifiable;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;


@Entity
@Builder
@Data
public class Partida implements Identifiable <Integer>{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column
    @NotNull(message="{NotNull.Partida.status}")
    private String status;

    @Column
    @NotNull(message="{NotNull.Partida.horario}")
    private final LocalTime horario;


    @Column
    @NotNull(message="{NotNull.Partida.data}")
    private LocalDate data;

    //@NotNull(message="{NotNull.Partida.idGrupo}")
    @ManyToOne
    @JoinColumn(nullable = false, foreignKey = @ForeignKey(name = "fk_partidas_grupos"))
    private Grupo grupo;

}
