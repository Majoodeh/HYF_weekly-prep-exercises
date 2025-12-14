-- recipes
CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description TEXT
);

-- categories
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

--  recipes and categories
CREATE TABLE recipe_categories (
    id SERIAL PRIMARY KEY,
    recipe_id INTEGER REFERENCES recipes (id),
    category_id INTEGER REFERENCES categories (id)
);

-- ingredients
CREATE TABLE ingredients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

--  recipes and ingredients
CREATE TABLE recipe_ingredients (
    id SERIAL PRIMARY KEY,
    recipe_id INTEGER REFERENCES recipes (id),
    ingredient_id INTEGER REFERENCES ingredients (id),
    quantity VARCHAR(50),
    unit VARCHAR(50)
);

-- steps
CREATE TABLE steps ( id SERIAL PRIMARY KEY, instruction TEXT );

--  recipes and steps
CREATE TABLE recipe_steps (
    id SERIAL PRIMARY KEY,
    recipe_id INTEGER REFERENCES recipes (id),
    step_id INTEGER REFERENCES steps (id),
    step_number INTEGER
);