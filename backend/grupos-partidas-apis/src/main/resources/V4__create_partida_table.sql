CREATE TABLE partidas (
  id_partida SERIAL PRIMARY KEY,
  ranqueada BOOLEAN,
  status VARCHAR(255) NOT NULL,
  horario TIME NOT NULL,
  data DATE NOT NULL,
  id_grupo INTEGER NOT NULL
);
