CREATE DATABASE "on-market-task"

CREATE TABLE "user"(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE "item"(
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(255),
    status VARCHAR(255),
);

CREATE TABLE "order"(
    order_id SERIAL PRIMARY KEY,
    order_items
)