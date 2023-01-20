/*CREATE TABLE grupos (
	id_grupo int2 NOT NULL,
	nome varchar(20) NOT NULL,
	bloqueada bool NOT NULL,
	id_criador int2 NOT NULL,
	topo int2 NULL,
	selva int2 NULL,
	meio int2 NULL,
	suporte int2 NULL,
	atirador int2 NULL,
	CONSTRAINT grupos_pk PRIMARY KEY (id_grupo)
);
CREATE TABLE mov_grupos (
	id_grupo serial4 NOT NULL,
	nome varchar(20) NOT NULL,
	"data" varchar(8) NULL,
	horario varchar(5) NULL,
	bloqueada bool NOT NULL,
	ranqueada bool NOT NULL,
	id_criador int2 NOT NULL,
	topo int2 NULL,
	selva int2 NULL,
	meio int2 NULL,
	suporte int2 NULL,
	atirador int2 NULL
);

CREATE TABLE partidas (
	id_partida serial4 NOT NULL,
	id_grupo int2 NOT NULL,
	"data" varchar(8) NOT NULL,
	horario varchar(5) NOT NULL,
	status varchar(12) NOT NULL,-- 'NAO_INICIADA' ou 'INICIADA' ou 'FINALIZADA'
	ranqueada bool NOT NULL,
	CONSTRAINT partidas_pk PRIMARY KEY (id_partida)
);

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
*/