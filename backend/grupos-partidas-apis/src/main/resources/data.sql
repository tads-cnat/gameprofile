drop table if exists grupos;
drop table if exists partidas;
drop table if exists jogadores;



create table grupos(
id_grupo serial not null,
nome_grupo varchar(20) not null,
bloqueado int2 null,
criador int2 not null,
topo int2,
atirador int2,
suporte int2,
selva int2,
meio int2);

create table partidas(
id_partida serial not null,
tipo varchar(9) not null,-- 'CASUAL' ou 'RANQUEADA'
status varchar(12) not null,-- 'NAO_INICIADA' ou 'INICIADA' ou 'FINALIZADA'
horario time not null,
data_partida date not null,
id_grupo int2 not null);


create table jogadores (
	id_jogador serial not null,
	nickname varchar(15) NOT NULL,
	nome varchar(100) NOT NULL,
	email varchar(60) NOT NULL,
	senha varchar(6) NOT NULL,
	nascimento date NULL,
	entrou_em date NULL,
	editado_em date NULL,
	id_lol int2 NULL
);

INSERT INTO jogadores
(id_jogador, nickname, nome, email, senha, nascimento, entrou_em, editado_em, id_lol)
VALUES(2, 'psantos56', 'Patrick Santos', 'patrick.matheus@escolar.ifrn.edu.br', 'admin1', '1996-10-24', '2022-11-28', '2022-11-28', NULL);
INSERT INTO jogadores
(id_jogador, nickname, nome, email, senha, nascimento, entrou_em, editado_em, id_lol)
VALUES(3, 'dinag73', 'Dina Gomes', 'dina.gomes@escolar.ifrn.edu.br', 'admin2', '1998-12-05', '2022-11-28', '2022-11-28', NULL);
INSERT INTO jogadores
(id_jogador, nickname, nome, email, senha, nascimento, entrou_em, editado_em, id_lol)
VALUES(4, 'ruanl17', 'Ruan Lopes', 'ruan.lopes@escolar.ifrn.edu.br', 'admin3', '1997-05-18', '2022-11-28', '2022-11-28', NULL);
INSERT INTO jogadores
(id_jogador, nickname, nome, email, senha, nascimento, entrou_em, editado_em, id_lol)
VALUES(5, 'lazarod42', 'Lazaro Damasceno', 'lazaro.damasceno@escolar.ifrn.edu.br', 'admin4', '1999-01-30', '2022-11-28', '2022-11-28', NULL);
INSERT INTO jogadores
(id_jogador, nickname, nome, email, senha, nascimento, entrou_em, editado_em, id_lol)
VALUES(6, 'tonnys82', 'Tonny Souza', 'tonny.souza@escolar.ifrn.edu.br', 'admin5', '1996-12-25', '2022-11-28', '2022-11-28', NULL);