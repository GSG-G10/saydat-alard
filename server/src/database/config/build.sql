BEGIN;

DROP TABLE IF EXISTS users, stories, cities, families, proverbs CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    orginialTown TEXT NOT NULL,
    isAdmin BOOLEAN DEFAULT FALSE
);

CREATE TABLE cities(
    id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    area VARCHAR(25) NOT NULL,
    location TEXT,
    occupationDate TEXT,
    famousFor TEXT,
    image TEXT,
    population TEXT,
    populationDensity TEXT,
    quotation TEXT,
    isMain BOOLEAN DEFAULT FALSE
);

CREATE TABLE stories(
    id SERIAL PRIMARY KEY,
    image TEXT,
    content TEXT,
    title VARCHAR(50) NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    city_id INTEGER REFERENCES cities(id) ON DELETE CASCADE
);

CREATE TABLE proverbs(
    id SERIAL PRIMARY KEY,
    content TEXT
);

CREATE TABLE families(
    id SERIAL PRIMARY KEY,
    name TEXT,
    city_id INTEGER REFERENCES cities(id) ON DELETE CASCADE
);


INSERT INTO users(name, email, password, isAdmin) VALUES ('Nizar', 'nizar@gmail.com', '$2a$10$Bp9etHWYo1UAANX99Ju3LuEzTlH7d1mq8snUpUzV7UhfBlQwozIly', true);
INSERT INTO users(name, email, password, isAdmin) VALUES ('Reem', 'reem@gmail.com', '$2a$10$Bp9etHWYo1UAANX99Ju3LuEzTlH7d1mq8snUpUzV7UhfBlQwozIly', true);
INSERT INTO users(name, email, password, isAdmin) VALUES ('Muath', 'muath@gmail.com', '$2a$10$Bp9etHWYo1UAANX99Ju3LuEzTlH7d1mq8snUpUzV7UhfBlQwozIly', true);
INSERT INTO users(name, email, password, isAdmin) VALUES ('Eman', 'eman@gmail.com', '$2a$10$Bp9etHWYo1UAANX99Ju3LuEzTlH7d1mq8snUpUzV7UhfBlQwozIly', true);
INSERT INTO users(name, email, password, isAdmin) VALUES ('Abdallah', 'abdallah@gmail.com', '$2a$10$Bp9etHWYo1UAANX99Ju3LuEzTlH7d1mq8snUpUzV7UhfBlQwozIly', true);

COMMIT;