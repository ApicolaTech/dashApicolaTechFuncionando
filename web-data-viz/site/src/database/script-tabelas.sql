-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/
CREATE DATABASE ApicolaTech;
USE ApicolaTech;

-- CRIANDO TABELAS:
CREATE TABLE Empresa (
idEmpresa INT PRIMARY KEY auto_increment,
NomeResponsável VARCHAR(50),
SobrenomeResponsável VARCHAR(100),
Email VARCHAR(50),
Senha VARCHAR(11),
NomeEmpresa VARCHAR(100),
Cnpj VARCHAR(18),
TelefoneResponsável CHAR(14)
);

CREATE TABLE Usuario (
idUsuario INT auto_increment,
NomeUsuario VARCHAR(50),
EmailUsuario VARCHAR(50),
SenhaUsuario VARCHAR(11),
fkEmpresa INT, FOREIGN KEY (fkEmpresa) REFERENCES Empresa(idEmpresa),
PRIMARY KEY (idUsuario, fkEmpresa)
);

CREATE TABLE LocalFazenda (
fkEmpresa INT,
idLocalFazenda INT auto_increment,
EnderecoApiario VARCHAR(50),
NumeroEnd CHAR(5),
UFApiario VARCHAR(2),
PRIMARY KEY (idLocalFazenda, fkEmpresa),
FOREIGN KEY (fkEmpresa) REFERENCES Empresa(idEmpresa)
);

CREATE TABLE Apiario (
idApiario INT,
fkLocalFazenda INT,
fkEmpresa INT,
EspecieAbelha VARCHAR(45),
PRIMARY KEY (idApiario, fkEmpresa, fkLocalFazenda),
FOREIGN KEY (fkLocalFazenda, fkEmpresa) REFERENCES LocalFazenda(idLocalFazenda, fkEmpresa),
FOREIGN KEY (fkEmpresa) REFERENCES Empresa(idEmpresa)
);

CREATE TABLE Sensor (
idSensor INT auto_increment,
StatusSensor VARCHAR(10) CHECK (StatusSensor IN ('Ativo', 'Inativo')),
LocalSensor VARCHAR(20) CHECK (LocalSensor IN ('Interno', 'Externo')),
fkEmpresa INT, 
	FOREIGN KEY (fkEmpresa) REFERENCES Empresa(idEmpresa),
		PRIMARY KEY (idSensor, fkEmpresa));


CREATE TABLE RegistroColmeia (
idReg INT AUTO_INCREMENT,
idDataHora DATETIME,
Temperatura DECIMAL(4.2),
fkSensor INT, FOREIGN KEY (fkSensor) REFERENCES Sensor(idSensor),
PRIMARY KEY (idReg, fkSensor)
);

/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
