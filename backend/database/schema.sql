CREATE TABLE user (
  user_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  firstname VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  picture VARCHAR(255) NOT NULL DEFAULT 'https://placehold.co/100x100'
);

CREATE TABLE authentication (
  authentication_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  hashed_password TEXT NOT NULL, 
  auth_date_time DATETIME NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(user_id)
);