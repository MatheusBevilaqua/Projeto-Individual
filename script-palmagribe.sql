CREATE DATABASE palmagribe;

USE palmagribe;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE Quiz (
id INT PRIMARY KEY auto_increment, 
score INT, 
fkUsuario INt, 
foreign key (fkUsuario) references usuario(idUsuario)
);

SELECT

    (SELECT count(score) FROM Quiz
    WHERE score = 0)as zero,

    (SELECT count(score) FROM Quiz
    WHERE score = 1)as um,

    (SELECT count(score) FROM Quiz
    WHERE score = 2)as dois,

    (SELECT count(score) FROM Quiz
    WHERE score = 3)as tres,

    (SELECT count(score) FROM Quiz
    WHERE score = 4)as quatro;