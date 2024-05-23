-- creates the MySQL server user user_0d_1
-- create user
CREATE USER IF NOT EXISTS user_0d_1@localhost IDENTIFIED BY 'user_0d_1_pwd';
-- all privileges on your MySQL server
GRANT ALL PRIVILEGES ON * . * TO user_0d_1@localhost;
