drop schema bd_sensores_proyect;

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `bd_sensores_proyect` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `bd_sensores_proyect` ;

-- -----------------------------------------------------
-- Table `bd_sensores_proyect`.`Departamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sensores_proyect`.`Departamento` (
  `idDepartamento` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`idDepartamento`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_sensores_proyect`.`Profesor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sensores_proyect`.`Profesor` (
  `idProfesor` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NULL,
  `Departamento_idDepartamento` INT NOT NULL,
  PRIMARY KEY (`idProfesor`),
  INDEX `fk_Profesor_Departamento_idx` (`Departamento_idDepartamento` ASC),
  CONSTRAINT `fk_Profesor_Departamento`
    FOREIGN KEY (`Departamento_idDepartamento`)
    REFERENCES `bd_sensores_proyect`.`Departamento` (`idDepartamento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_sensores_proyect`.`Edificio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sensores_proyect`.`Edificio` (
  `idEdificio` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`idEdificio`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_sensores_proyect`.`Espacio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sensores_proyect`.`Espacio` (
  `idEspacio` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `numero` INT NULL,
  `descripcion` VARCHAR(255) NULL,
  `imagen` VARCHAR(50) NULL,
  `Profesor_idProfesor` INT NOT NULL,
  `Edificio_idEdificio` INT NOT NULL,
  PRIMARY KEY (`idEspacio`),
  INDEX `fk_Espacio_Profesor1_idx` (`Profesor_idProfesor` ASC),
  INDEX `fk_Espacio_Edificio1_idx` (`Edificio_idEdificio` ASC),
  CONSTRAINT `fk_Espacio_Profesor1`
    FOREIGN KEY (`Profesor_idProfesor`)
    REFERENCES `bd_sensores_proyect`.`Profesor` (`idProfesor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Espacio_Edificio1`
    FOREIGN KEY (`Edificio_idEdificio`)
    REFERENCES `bd_sensores_proyect`.`Edificio` (`idEdificio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_sensores_proyect`.`Nodo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sensores_proyect`.`Nodo` (
  `idNodo` INT NOT NULL AUTO_INCREMENT,
  `rango` DOUBLE NULL,
  PRIMARY KEY (`idNodo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_sensores_proyect`.`Lecturas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sensores_proyect`.`Lecturas` (
  `idLecturas` INT NOT NULL AUTO_INCREMENT,
  `posx` DOUBLE NULL,
  `posy` DOUBLE NULL,
  `temp` DOUBLE NULL,
  `ica` DOUBLE NULL,
  `fecha` DATETIME NULL DEFAULT current_timestamp(),
  `Nodo_idNodo` INT NOT NULL,
  PRIMARY KEY (`idLecturas`),
  INDEX `fk_Lecturas_Nodo1_idx` (`Nodo_idNodo` ASC),
  CONSTRAINT `fk_Lecturas_Nodo1`
    FOREIGN KEY (`Nodo_idNodo`)
    REFERENCES `bd_sensores_proyect`.`Nodo` (`idNodo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_sensores_proyect`.`Espacio_has_Nodo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sensores_proyect`.`Espacio_has_Nodo` (
  `Espacio_idEspacio` INT NOT NULL,
  `Nodo_idNodo` INT NOT NULL,
  `idEspacioNodo` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idEspacioNodo`),
  INDEX `fk_Espacio_has_Nodo_Nodo1_idx` (`Nodo_idNodo` ASC),
  INDEX `fk_Espacio_has_Nodo_Espacio1_idx` (`Espacio_idEspacio` ASC),
  CONSTRAINT `fk_Espacio_has_Nodo_Espacio1`
    FOREIGN KEY (`Espacio_idEspacio`)
    REFERENCES `bd_sensores_proyect`.`Espacio` (`idEspacio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Espacio_has_Nodo_Nodo1`
    FOREIGN KEY (`Nodo_idNodo`)
    REFERENCES `bd_sensores_proyect`.`Nodo` (`idNodo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_sensores_proyect`.`Espacio_has_Profesor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sensores_proyect`.`Espacio_has_Profesor` (
  `Espacio_idEspacio` INT NOT NULL,
  `Profesor_idProfesor` INT NOT NULL,
  `idEspacioProfesor` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idEspacioProfesor`),
  INDEX `fk_Espacio_has_Profesor_Profesor1_idx` (`Profesor_idProfesor` ASC),
  INDEX `fk_Espacio_has_Profesor_Espacio1_idx` (`Espacio_idEspacio` ASC),
  CONSTRAINT `fk_Espacio_has_Profesor_Espacio1`
    FOREIGN KEY (`Espacio_idEspacio`)
    REFERENCES `bd_sensores_proyect`.`Espacio` (`idEspacio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Espacio_has_Profesor_Profesor1`
    FOREIGN KEY (`Profesor_idProfesor`)
    REFERENCES `bd_sensores_proyect`.`Profesor` (`idProfesor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_sensores_proyect`.`EncargadoProfesorHistorico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_sensores_proyect`.`EncargadoProfesorHistorico` (
  `Espacio_idEspacio` INT NOT NULL,
  `Profesor_idProfesor` INT NOT NULL,
  `idEncargadoProfesorHistorico` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATETIME NULL,
  PRIMARY KEY (`idEncargadoProfesorHistorico`),
  INDEX `fk_Espacio_has_Profesor1_Profesor1_idx` (`Profesor_idProfesor` ASC),
  INDEX `fk_Espacio_has_Profesor1_Espacio1_idx` (`Espacio_idEspacio` ASC),
  CONSTRAINT `fk_Espacio_has_Profesor1_Espacio1`
    FOREIGN KEY (`Espacio_idEspacio`)
    REFERENCES `bd_sensores_proyect`.`Espacio` (`idEspacio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Espacio_has_Profesor1_Profesor1`
    FOREIGN KEY (`Profesor_idProfesor`)
    REFERENCES `bd_sensores_proyect`.`Profesor` (`idProfesor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



/*
-- Query: SELECT * FROM bd_sensores_proyect.departamento
LIMIT 0, 1000

-- Date: 2022-08-30 13:52
*/
INSERT INTO `departamento` (`idDepartamento`,`nombre`) VALUES (1,'Ciencias básicas');
INSERT INTO `departamento` (`idDepartamento`,`nombre`) VALUES (2,'Materiales');
INSERT INTO `departamento` (`idDepartamento`,`nombre`) VALUES (3,'Energia');
INSERT INTO `departamento` (`idDepartamento`,`nombre`) VALUES (4,'Electrónica');
INSERT INTO `departamento` (`idDepartamento`,`nombre`) VALUES (5,'Sistemas');


/*
-- Query: SELECT * FROM bd_sensores_proyect.profesor
LIMIT 0, 1000

-- Date: 2022-08-30 13:51
*/
INSERT INTO `profesor` (`idProfesor`,`nombre`,`Departamento_idDepartamento`) VALUES (1,'Leonardo Sánchez',5);
INSERT INTO `profesor` (`idProfesor`,`nombre`,`Departamento_idDepartamento`) VALUES (2,'Alejandro Reyes',5);
INSERT INTO `profesor` (`idProfesor`,`nombre`,`Departamento_idDepartamento`) VALUES (3,'Rafael Perez',1);
INSERT INTO `profesor` (`idProfesor`,`nombre`,`Departamento_idDepartamento`) VALUES (4,'Ernesto Carrillo',4);



/*
-- Query: SELECT * FROM bd_sensores_proyect.edificio
LIMIT 0, 1000

-- Date: 2022-08-30 13:52
*/
INSERT INTO `edificio` (`idEdificio`,`nombre`) VALUES (1,'E');
INSERT INTO `edificio` (`idEdificio`,`nombre`) VALUES (2,'H');
INSERT INTO `edificio` (`idEdificio`,`nombre`) VALUES (3,'G');
INSERT INTO `edificio` (`idEdificio`,`nombre`) VALUES (4,'W');


/*
-- Query: SELECT * FROM bd_sensores_proyect.nodo
LIMIT 0, 1000

-- Date: 2022-08-30 13:52
*/
INSERT INTO `nodo` (`idNodo`,`rango`) VALUES (1,10);
INSERT INTO `nodo` (`idNodo`,`rango`) VALUES (2,20);
INSERT INTO `nodo` (`idNodo`,`rango`) VALUES (3,20);
INSERT INTO `nodo` (`idNodo`,`rango`) VALUES (4,10);
INSERT INTO `nodo` (`idNodo`,`rango`) VALUES (5,1);
