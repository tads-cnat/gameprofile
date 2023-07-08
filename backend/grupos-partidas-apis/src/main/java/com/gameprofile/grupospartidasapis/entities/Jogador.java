package com.gameprofile.grupospartidasapis.entities;

import java.time.LocalDate;
import java.util.Date;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;



@Entity
@Builder
@ToString
@Data
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class Jogador implements Comparable<Jogador>{
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    
    @Column
    @NotNull(message="{NotNull.Jogador.nickname}")
    private String nickname;

    @Column
    @NotNull(message="{NotNull.Jogador.nome}")
    private String nome;

    @Column
    @NotNull(message="{NotNull.Jogador.email}")
    private String email;

    @Column
    @NotNull(message="{NotNull.Jogador.senha}")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String senha;

    @Column
    private LocalDate nascimento;

    @Column
    private LocalDate entrouEm;

    @Column
    private LocalDate editadoEm;

    @Column
    private Integer idLol;

    @Override
    public int compareTo(Jogador o) {
        return 0;
    }

    
    
}
