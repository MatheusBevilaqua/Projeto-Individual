-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE palmagribe;

<<<<<<< Updated upstream
USE aquatech;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14),
	codigo_ativacao VARCHAR(50)
);
=======
USE palmagribe;
>>>>>>> Stashed changes

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE Quiz (
id INT PRIMARY KEY auto_increment, 
score INT, 
fkUsuario INT, 
foreign key (fkUsuario) references usuario(id)
);

SELECT

    (SELECT count(score) FROM Quiz
    WHERE score = 0)as zero,

    (SELECT count(score) FROM Quiz
    WHERE score = 1)as um,

<<<<<<< Updated upstream
insert into empresa (razao_social, codigo_ativacao) values ('Empresa 1', 'ED145B');
insert into empresa (razao_social, codigo_ativacao) values ('Empresa 2', 'A1B2C3');
insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);
insert into aquario (descricao, fk_empresa) values ('Aquário de Peixe-dourado', 2);
=======
    (SELECT count(score) FROM Quiz
    WHERE score = 2)as dois,

    (SELECT count(score) FROM Quiz
    WHERE score = 3)as tres,

    (SELECT count(score) FROM Quiz
    WHERE score = 4)as quatro;
>>>>>>> Stashed changes
