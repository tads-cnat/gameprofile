/*
-- Todos os scripts de criação das tabelas
CREATE TABLE perfil_lol (
	id_lol int2 NOT NULL,
	"name" varchar(20) NULL,
	account_id varchar(20) NULL,
	profile_id varchar(20) NULL,
	puuid varchar(20) NULL,
	CONSTRAINT pk_perfil_lol PRIMARY KEY (id_lol)
);

CREATE TABLE jogadores (
	id_jogador serial4 NOT NULL,
	nickname varchar(15) NOT NULL,
	nome varchar(100) NOT NULL,
	email varchar(60) NOT NULL,
	senha varchar(6) NOT NULL,
	nascimento date NULL,
	entrou_em date NULL,
	editado_em date NULL,
	id_lol int2 NULL,
	CONSTRAINT pk_jogador PRIMARY KEY (id_jogador)
);

CREATE TABLE grupos (
	id_grupo int2 NOT NULL,
	nome varchar(20) NOT NULL,
	bloqueado bool NOT NULL,
	id_criador int2 NOT NULL,
	topo int2 NULL,
	selva int2 NULL,
	meio int2 NULL,
	suporte int2 NULL,
	atirador int2 NULL,
	CONSTRAINT grupos_pk PRIMARY KEY (id_grupo)
);

CREATE TABLE partidas (
	id_partida serial4 NOT NULL,
	id_grupo int2 NOT NULL,
	"data" date NOT NULL,
	horario time NOT NULL,
	status varchar(12) NOT NULL,
	ranqueada bool NOT NULL,
	CONSTRAINT partidas_pk PRIMARY KEY (id_partida)
);


CREATE TABLE entradas (
	id_solicitacao serial4 NOT NULL,
	id_jogador int2 NOT NULL,
	id_grupo int2 NOT NULL,
	status bool NOT NULL,
	CONSTRAINT entradas_pk PRIMARY KEY (id_solicitacao)
);

CREATE TABLE mov_grupos (
	id_grupo serial4 NOT NULL,
	nome varchar(20) NOT NULL,
	"data" date NULL,
	horario time NULL,
	bloqueado bool NOT NULL,
	ranqueada bool NOT NULL,
	id_criador int2 NOT NULL,
	topo int2 NULL,
	selva int2 NULL,
	meio int2 NULL,
	suporte int2 NULL,
	atirador int2 NULL,
	status varchar(12) NULL
);

-- Scripts de Relacionamento entre as tabelas
ALTER TABLE public.entradas ADD CONSTRAINT fk_entradas_grupos FOREIGN KEY (id_grupo) REFERENCES grupos(id_grupo);
ALTER TABLE public.entradas ADD CONSTRAINT fk_entradas_jogadores FOREIGN KEY (id_jogador) REFERENCES jogadores(id_jogador);
ALTER TABLE public.grupos  ADD CONSTRAINT fk_grupos_jogadores FOREIGN KEY (id_criador) REFERENCES jogadores(id_jogador);
ALTER TABLE public.partidas ADD CONSTRAINT fk_partidas_grupos FOREIGN KEY (id_grupo) REFERENCES grupos(id_grupo);
ALTER TABLE public.jogadores ADD CONSTRAINT fk_jogador_perfil_lol FOREIGN KEY (id_lol) REFERENCES perfil_lol(id_lol);

--Procedure / Procedimento / Função
create or replace function public.pd_grupos_partidas()
returns trigger
as
$$
begin
	insert into grupos
	(
		id_grupo,
		nome,
		bloqueado,
		id_criador,
		topo,
		selva,
		meio,
		suporte,
		atirador
	)
	values
	(
		new.id_grupo,
		new.nome,
		new.bloqueado,
		new.id_criador,
		new.topo,
		new.selva,
		new.meio,
		new.suporte,
		new.atirador
	);
	insert into partidas
	(
		id_grupo,
		"data",
		horario,
		status,
		ranqueada
	)
	values
	(
		new.id_grupo,
		coalesce(new.data,current_date),
		coalesce(new.horario,current_time),
		coalesce(new.status,'NAO_INICIADA'),
		new.ranqueada
	);
	return new;
end;
$$ language 'plpgsql';

--Trigger ou Gatilho
create trigger utg_grupos_partidas
after insert on mov_grupos
for each row
execute procedure pd_grupos_partidas();

--Inserts para sugeridos para teste
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
INSERT INTO mov_grupos
(id_grupo, nome, "data", horario, bloqueado, ranqueada, id_criador, topo, selva, meio, suporte, atirador, status)
VALUES(1, 'Fenda do Bikini', null, null, false, false, 2, 2, NULL, NULL, NULL, NULL, NULL);
INSERT INTO mov_grupos
(id_grupo, nome, "data", horario, bloqueado, ranqueada, id_criador, topo, selva, meio, suporte, atirador, status)
VALUES(2, 'Grupo Top','2023-01-15', '15:00:00', false, false, 3, 2, 3, 4, 5, 6, 'FINALIZADA');
*/