package com.gameprofile.grupospartidasapis.entities;

import com.gameprofile.grupospartidasapis.base.Identifiable;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.Comparator;

@Entity(name = "entradas")
@Data
@Builder
@EqualsAndHashCode(of = {"posicao","grupo"})
@ToString
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class Entrada implements Identifiable<Integer>, Comparable<Entrada>{
    @Id
    @Column(name = "id_solicitacao")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idSolicitacao;

    @NotNull
    @ManyToOne
    @JoinColumn(nullable = false, foreignKey = @ForeignKey(name = "fk_entradas_grupos"))
    private Grupo grupo;

    @NotNull
    @ManyToOne
    @JoinColumn(nullable = false, foreignKey = @ForeignKey(name = "fk_entradas_jogadores"))
    private Jogador idJogador;

    @Column
    @NotNull(message="{NotNull.Entrada.status}")
    private Boolean status;

    @Column
    private String posicao;

    @Override
    public int compareTo(Entrada o) {
        return Comparator.comparing(Entrada::getPosicao)
                .thenComparing(Entrada::getGrupo)
                .compare(this, o);
    }
    @Override
    public Integer getId() {
        return idSolicitacao;
    }

    @Override
    public void setId(Integer id) {
        this.idSolicitacao=id;
    }
}
