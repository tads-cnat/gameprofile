package com.gameprofile.grupospartidasapis.entities;
import com.gameprofile.grupospartidasapis.base.Identifiable;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;
import java.time.LocalTime;
import java.util.Date;


@Entity(name = "partidas")
@Getter
@Setter
@Builder
@EqualsAndHashCode(of="idPartida")
@ToString
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class Partida implements Identifiable<Integer>, Comparable<Partida>{
    @Id
    @Column(name = "id_partida")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idPartida;

    @Column(name = "ranqueada")
    private Boolean ranqueada;

    @Column(name = "status")
    @NotNull(message="{NotNull.Partida.status}")
    private String status;

    @DateTimeFormat(pattern = "hh:mm")
    @Column(name = "horario")
    @NotNull(message="{NotNull.Partida.horario}")
    private final LocalTime horario;

    @DateTimeFormat(pattern = "dd/mm/yyyy")
    @Column(name = "data")
    @NotNull(message="{NotNull.Partida.data}")
    private Date data;

    @Column(name = "id_grupo")
    @NotNull(message="{NotNull.Partida.idGrupo}")
    private Integer idGrupo;

    @Override
    public Integer getId() {
        return this.idPartida;
    }
    
    @Override
    public void setId(Integer id){
        this.idPartida = id;
    }

    @Override
    public int compareTo(Partida p) {
        return this.idPartida.compareTo(p.idPartida);
    }
}
