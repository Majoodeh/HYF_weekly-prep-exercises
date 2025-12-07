//! Answer the questions at the end of the file.

import { MongoClient } from "mongodb";

async function main() {
  const uri = "mongodb_uri......";

  const client = new MongoClient(uri);

  try {
    await client.connect();

    // create Recipes collection
    await createCollection(client, "recipesDatabase", "Recipes");

    // adding documents to the Recipes collection

    for (const recipe of recipesNames) {
      await addDocumentsToCollection(client, "recipesDatabase", "Recipes", [
        recipe,
      ]);
    }
  } catch (e) {
    console.log(" Error ", e);
  } finally {
    await client.close();
  }
}

main.catch(console.error);

//

async function createCollection(client, databaseName, collectionName) {
  const recipesCollection = await client
    .db(databaseName)
    .createCollection(collectionName);

  console.log(` Collection: ${collectionName} created successfully`);
}

async function addDocumentsToCollection(
  client,
  database,
  collectionName,
  documentsInfo
) {
  const result = await client
    .db(database)
    .collection(collectionName)
    .insertMany(documentsInfo);
  console.log(
    `${result.insertedCount} documents were added to the collection: ${collectionName}`
  );
}

const recipeOneInfo = {
  name: "Pancakes",
  category: "Breakfast",
  ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Baking Powder"],
  steps: [
    "Mix dry ingredients together.",
    "Add wet ingredients and stir until smooth.",
    "Cook on a griddle until golden brown on both sides.",
  ],
};
const recipeTwoInfo = {
  name: "Spaghetti Bolognese",
  category: "Dinner",
  ingredients: ["Spaghetti", "Ground Beef", "Tomato Sauce", "Onion", "Garlic"],
  steps: [
    "Cook spaghetti according to package instructions.",
    "Brown the ground beef in a pan.",
    "Add chopped onions and garlic, cook until softened.",
    "Pour in tomato sauce and simmer for 20 minutes.",
    "Serve sauce over spaghetti.",
  ],
};

const recipeThreeInfo = {
  name: "Caesar Salad",
  category: "Lunch",
  ingredients: [
    "Romaine Lettuce",
    "Croutons",
    "Parmesan Cheese",
    "Caesar Dressing",
  ],
  steps: [
    "Chop romaine lettuce and place in a bowl.",
    "Add croutons and grated Parmesan cheese.",
    "Drizzle with Caesar dressing and toss to combine.",
  ],
};
const recipesNames = [recipeOneInfo, recipeTwoInfo, recipeThreeInfo];

//? 1. What are the collections?
//  i create a Recipes collection to store recipe documents. so there is only one collection.

//! 2. What information will you embed in a document and which will you store normalised?
// I i will embed ingredients and steps  as arrays within each recipe document. this is because they are closely related to the recipe and are typically accessed together. embedding them allows for easier retrieval of all relevant information in a single query.
// I will embed all the info for all the recipes as I tjink it is easier to do that way than normalising it.
// Because recipes dont share other data like ingredients or steps with each other.
// they might share some ingrediants, but it will make the process more complex.,

//* 3.What made you decide when to embed information? What assumptions did you make?
// I decided to embed all the inforamtion of the recipes,
// because each recipe has its unique set of ingredients and steps, while it share ingrediants with other recipes,
// but do it that way will make it more easier to access all the data of a recipe in a single query.

//! 4.If you were given PostgreSQL and MongoDB as choices to build the recipe's database at the beginning, which one would you choose and why?
// I would choose MongoDB,
// beacuse recipes can have differner ingredints, and there is no fixed struture fir recipes eaither in ingrediants or steps,
// even in ingredints there might be only one ingrediant or many ingrediants,
// so for me MongoDB's flexible schema is more suitable for this use case compared to PostgreSQL's rigid schema.
