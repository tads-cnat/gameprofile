package com.gameprofile.grupospartidasapis.entities;
import com.gameprofile.grupospartidasapis.base.Identifiable;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;
import java.time.LocalTime;
import java.util.Date;


@Entity(name = "partidas")
@Data
public class Partida implements Identifiable <Integer>{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private Boolean ranqueada;

    @NotNull(message="{NotNull.Partida.status}")
    private String status;

    @DateTimeFormat(pattern = "hh:mm")
    @NotNull(message="{NotNull.Partida.horario}")
    private final LocalTime horario;

    @DateTimeFormat(pattern = "dd/mm/yyyy")
    @NotNull(message="{NotNull.Partida.data}")
    private Date data;

    @NotNull(message="{NotNull.Partida.idGrupo}")
    private Integer idGrupo;

}
