CREATE TABLE jogadores (
  id_jogador SERIAL PRIMARY KEY,
  nickname VARCHAR(255) NOT NULL,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  senha VARCHAR(255) NOT NULL,
  nascimento DATE,
  entrou_em DATE,
  editado_em DATE,
  id_lol INTEGER
);
