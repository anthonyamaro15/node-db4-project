const express = require("express");
const routeRecipes = require("../routes/routeRecipe");

const server = express();

server.use(express.json());
server.use("/api/recipes", routeRecipes);

module.exports = server;
