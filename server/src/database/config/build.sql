BEGIN;

DROP TABLE IF EXISTS users,
stories,
cities,
families,
proverbs CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password TEXT,
    orginialTown VARCHAR(50) NOT NULL,
    isAdmin BOOLEAN DEFAULT FALSE
);

CREATE TABLE cities(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    area VARCHAR(50),
    location VARCHAR(255),
    image TEXT,
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

CREATE TABLE proverbs(id SERIAL PRIMARY KEY, content TEXT);

CREATE TABLE families(
    id SERIAL PRIMARY KEY,
    name TEXT,
    city_id INTEGER REFERENCES cities(id) ON DELETE CASCADE
);

COMMIT;