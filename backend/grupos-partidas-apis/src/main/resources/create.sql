alter table if exists chat_message 
       drop constraint if exists FKt3o4ak375qq7cg3ailkr1kq93
    
    alter table if exists chat_message 
       drop constraint if exists FKmxo6wvyr0rnmu8vfpwipotu2b
 
    
    alter table if exists entradas 
       drop constraint if exists FKr1wjt0p6qgkpgowkowyph58db
    
    alter table if exists entradas 
       drop constraint if exists FKbecc28potqrw9u46ovpdkaixr
    
    drop table if exists chat_message cascade
    
    drop table if exists entradas cascade
    
    drop table if exists grupos cascade
    
    drop table if exists jogadores cascade
    
    drop table if exists mov_grupos cascade
    
    drop table if exists partidas cascade
    
    drop sequence if exists grupos_seq
    
    drop sequence if exists partidas_seq
     create sequence grupos_seq start with 1 increment by 50
     create sequence partidas_seq start with 1 increment by 50
    
    create table chat_message (
       id_chat bigserial not null,
        conteudo varchar(255),
        data_envio timestamp(6),
        remetente varchar(255),
        id_grupo integer,
        id_jogador integer,
        primary key (id_chat)
    )
    
    create table entradas (
       id_solicitacao serial not null,
        status boolean not null,
        id_grupo integer,
        id_jogador integer not null,
        primary key (id_solicitacao)
    )
    
    create table grupos (
       id_grupo integer not null,
        atirador integer,
        bloqueado boolean not null,
        id_criador integer not null,
        meio integer,
        nome varchar(255) not null,
        selva integer,
        suporte integer,
        topo integer,
        primary key (id_grupo)
    )
    
    create table jogadores (
       id_jogador serial not null,
        editado_em timestamp(6),
        email varchar(255) not null,
        entrou_em timestamp(6),
        id_lol integer,
        nascimento timestamp(6),
        nickname varchar(255) not null,
        nome varchar(255) not null,
        senha varchar(255) not null,
        primary key (id_jogador)
    )
    
    create table mov_grupos (
       id_grupo serial not null,
        atirador integer,
        bloqueado boolean not null,
        data timestamp(6),
        horario time,
        id_criador integer not null,
        meio integer,
        nome varchar(255) not null,
        ranqueada boolean not null,
        selva integer,
        suporte integer,
        topo integer,
        primary key (id_grupo)
    )
    
    create table partidas (
       id_partida integer not null,
        data timestamp(6) not null,
        horario time not null,
        id_grupo integer not null,
        ranqueada boolean,
        status varchar(255) not null,
        primary key (id_partida)
    )
 
    
    alter table if exists chat_message 
       add constraint FKt3o4ak375qq7cg3ailkr1kq93 
       foreign key (id_grupo) 
       references grupos
    
    alter table if exists chat_message 
       add constraint FKmxo6wvyr0rnmu8vfpwipotu2b 
       foreign key (id_jogador) 
       references jogadores
: 
    
    alter table if exists entradas 
       add constraint FKr1wjt0p6qgkpgowkowyph58db 
       foreign key (id_grupo) 
       references grupos
    
    alter table if exists entradas 
       add constraint FKbecc28potqrw9u46ovpdkaixr 
       foreign key (id_jogador) 