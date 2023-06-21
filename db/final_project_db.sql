CREATE DATABASE `final_project_test`;
USE final_project_test;

DROP TABLE IF EXISTS `people`;
CREATE TABLE people (
  `PersonID` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  `FirstName` VARCHAR(255) NOT NULL DEFAULT '',
  `LastName` VARCHAR(255) NOT NULL DEFAULT '' ,
  `Email` VARCHAR(255) NOT NULL DEFAULT '' 
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `items`;
CREATE TABLE items (
  `ItemID` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Name VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `orders`;
CREATE TABLE orders (
  `OrderID` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `PersonID` INT UNSIGNED NOT NULL,
  `OrderDate` DATETIME NOT NULL,
  FOREIGN KEY (PersonID) REFERENCES people (PersonID) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `order_details`;
CREATE TABLE order_details (
  `OrderDetailsID` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `OrderID` INT UNSIGNED NOT NULL,
  `ItemID` INT UNSIGNED NOT NULL,
  `Quantity` INT,
  FOREIGN KEY (OrderID) REFERENCES orders (OrderID) ON DELETE CASCADE,
  FOREIGN KEY (ItemID) REFERENCES items (ItemID) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

