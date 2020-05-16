DROP DATABASE IF EXISTS wishes_db;

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE wishes_db;

USE wishes_db;

-- Create the table tasks.
CREATE TABLE wishes (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(80) NOT NULL,
  wish varchar(255) NOT NULL,
  author varchar(80) NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO wishes (title,wish, author) VALUES 
    ('Milk','Pick up milk.', 'Ruma'),
    ('Lawn','Mow the lawn.', 'Ruma'),
    ('Call','Call Shannon back.', 'Ruma'),
    ('Job', 'To get a job I don\'t hate', 'Ben');