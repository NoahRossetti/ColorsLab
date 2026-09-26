# ColorsLab
Description:
This application allows users to store a variety of colors and then search for them.


Technology used:

This project uses a LAMP server which uses Ubuntu linux as the operating system, Apache as the web server, mysql for database management and php as the scripting language. It was created through the digital ocean platform

Set up:
1: Purchase lamp droplet from a hosting service such as digital ocean

2: Purchase domain name and link the ip address to the domain

3: Upload html files to var/www/html

4: within the same directory create css, js and api directory

5: Upload files to their respective directories

6: create database and tables with following commands then populate
create database COP4331;
use COP4331;

CREATE TABLE `COP4331`.`Users` ( `ID` INT NOT NULL AUTO_INCREMENT , `FirstName`
VARCHAR(50) NOT NULL DEFAULT '' , `LastName` VARCHAR(50) NOT NULL DEFAULT '' , `Login`
VARCHAR(50) NOT NULL DEFAULT '' , `Password` VARCHAR(50) NOT NULL DEFAULT '' ,
PRIMARY KEY (`ID`)) ENGINE = InnoDB;

CREATE TABLE `COP4331`.`Colors` ( `ID` INT NOT NULL AUTO_INCREMENT , `Name`
VARCHAR(50) NOT NULL DEFAULT '' , `UserID` INT NOT NULL DEFAULT '0' , PRIMARY KEY
(`ID`)) ENGINE = InnoDB;

How to run:

After following set up instructions search for the purchased domain and the app will be ready too use.
