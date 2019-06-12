DROP DATABASE IF EXISTS restaurants;


CREATE DATABASE restaurants;

USE restaurants;


CREATE TABLE IF NOT EXISTS restaurant (uuid INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
                                                                                name TEXT NOT NULL,
                                                                                          address TEXT NOT NULL,
                                                                                                       pricing INT NOT NULL,
                                                                                                                   foodScore INT NOT NULL,
                                                                                                                                 bld TEXT NOT NULL,
                                                                                                                                          description TEXT NOT NULL,
                                                                                                                                                           images TEXT NOT NULL);