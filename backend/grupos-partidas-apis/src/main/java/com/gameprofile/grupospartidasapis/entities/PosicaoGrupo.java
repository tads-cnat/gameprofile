package com.gameprofile.grupospartidasapis.entities;

import com.gameprofile.grupospartidasapis.base.Identifiable;
import com.gameprofile.grupospartidasapis.entities.Grupo.PosicaoEscolhida;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.Comparator;

@Entity
@Getter
@Setter
@Builder
@EqualsAndHashCode(of = {"jogador","grupo", "posicaoEscolhida"})
@AllArgsConstructor
@NoArgsConstructor
public class PosicaoGrupo implements Identifiable<Integer>, Comparable<PosicaoGrupo>{


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @NotNull
    @ManyToOne
    @JoinColumn(nullable = false, foreignKey = @ForeignKey(name = "fk_entradas_grupos"))
    private Grupo grupo;

    @NotNull
    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_entradas_jogadores"))
    private Jogador jogador;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private PosicaoEscolhida posicaoEscolhida;

    @Column
    private Boolean status;

    @Override
    public int compareTo(PosicaoGrupo o) {
        return Comparator.comparing(PosicaoGrupo::getGrupo)
                .thenComparing(PosicaoGrupo::getJogador)
                .compare(this, o);
    }
}
