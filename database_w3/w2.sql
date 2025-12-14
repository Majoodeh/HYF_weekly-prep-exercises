-- recipes
CREATE TABLE Recipes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description TEXT
);

-- categories
CREATE TABLE Categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

--  recipes and categories
CREATE TABLE Recipe_Categories (
    id SERIAL PRIMARY KEY,
    recipe_id INTEGER,
    category_id INTEGER,
    Foreign Key (recipe_id) REFERENCES Recipes (id),
    Foreign Key (category_id) REFERENCES Categories (id),
);

-- ingredients
CREATE TABLE Ingredients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

--  recipes and ingredients
CREATE TABLE Recipe_Ingredients (
    id SERIAL PRIMARY KEY,
    recipe_id INTEGER,
    ingredient_id INTEGER,
    quantity VARCHAR(50),
    unit VARCHAR(50),
    Foreign Key (recipe_id) REFERENCES Recipes (id),
    Foreign Key (ingredient_id) REFERENCES Ingredients (id)
);

-- steps
CREATE TABLE steps (
    id SERIAL PRIMARY KEY,
    instruction TEXT
);

--  recipes and steps
CREATE TABLE Recipe_Steps (
    id SERIAL PRIMARY KEY,
    recipe_id INTEGER,
    step_id INTEGER,
    step_number INTEGER foreign Key (recipe_id) REFERENCES Recipes (id),
    foreign Key (step_id) REFERENCES steps (id)
);

-- All the vegetarian recipes with potatoes
SELECT r.name
from
    Recipes r
    JOIN Recipe_Categories rc ON r.id = rc.recipe_id
    JOIN Categories c ON rc.category_id = c.id
    JOIN Recipe_Ingredients ri ON r.id = ri.recipe_id
    JOIN Ingredients i ON ri.ingredient_id = i.id
WHERE
    c.name = 'Vegetarian'
    AND i.name = 'Potatoes';

-- All the cakes that do not need baking
SELECT r.name
from
    Recipes r
    JOIN Recipe_Categories rc ON r.id = rc.recipe_id
    JOIN Categories c ON rc.category_id = c.id
WHERE
    c.name IN ('Cake', 'No-Bake');

GROUP BY r.id, r.name HAVING COUNT(c.id) = 2;

-- All the vegan and Japanese recipes
SELECT r.name
from
    Recipes r
    JOIN Recipe_Categories rc ON r.id = rc.recipe_id
    JOIN Categories c ON rc.category_id = c.id
WHERE
    c.name IN ('Vegan', 'Japanese')
GROUP BY
    r.id,
    r.name
HAVING
    COUNT(c.id) = 2;

-- relationships
--                  __ 1:M __
-- Recipes to Recipe_Categories [recipe_id]
-- Recipes to Recipe_Ingredients [recipe_id]
-- Recipes to Recipe_Steps [recipe_id]
-- Categories to Recipe_Categories [category_id]
-- Ingredients to Recipe_Ingredients [ingredient_id]
-- steps to Recipe_Steps [step_id]

--                  __ M:M __
-- Recipes to Categories >> junctionTable >>  Recipe_Categories
-- Recipes to Ingredients >> junctionTable >>  Recipe_Ingredients
-- Recipes to steps >> junctionTable >> Recipe_Steps



--*******--

-- * Normalization :

-- the code is normalized to 3NF (Third Normal Form) because:
--1. each table has a primary key, so each record has its own ID.
--2. each table contains data about single entities, so tables are separated and not repeated
--3. when there are M-M relationships, There are junction tables created to handle those relationships.



--If you want to add thousands of recipes to your database, what challenges do you foresee?
-- 1. we need all the data to be in same format.
-- 2. when data is too large there might be duplicates or incorrect data.