package com.gameprofile.grupospartidasapis.entities;

import com.gameprofile.grupospartidasapis.base.Identifiable;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.Comparator;

@Entity
@Getter
@Setter
@Builder
@EqualsAndHashCode(of = {"jogador","grupo"})
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
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
    @JoinColumn(nullable = false, foreignKey = @ForeignKey(name = "fk_entradas_jogadores"))
    private Jogador jogador;

    @Column
    @NotNull(message="{NotNull.Entrada.status}")
    private Boolean status;

    public Boolean isDisponivel(){
        return jogador == null && status;
    }

    public Boolean atribuirJogador(Jogador novoJogador){
        if(isDisponivel()){
            jogador = novoJogador;
            return true;
       }else{
            return false;
        }

        



    }
    @Override
    public int compareTo(PosicaoGrupo o) {
        return Comparator.comparing(PosicaoGrupo::getGrupo)
                .thenComparing(PosicaoGrupo::getJogador)
                .compare(this, o);
    }
}
