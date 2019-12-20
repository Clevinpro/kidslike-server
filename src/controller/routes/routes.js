const express = require("express");
const passport = require('passport');



const mainRoute = require("./main/main");

// Middleware
const verifyToken = require("../app/check-token");

// Auth
const authenticate = require("./auth/authenticate");
const currentUser = require("./auth/current");
const logout = require("./auth/logout");
const loginWithGoogle = require('./auth/google');

// Users
const createUser = require("./auth/create-user");
const getUser = require("./user/get-user");
const updateUser = require("./user/update-user");
const updatePoints = require("./user/update-points");

// Tasks
const createTask = require("./tasks/create-task");
const getTasks = require("./tasks/get-tasks");
const deleteTask = require("./tasks/delete-task");
const updateTask = require("./tasks/update-task");


const apiRoutes = express.Router();
const googleAuth = passport.authenticate('google', { scope: ['email profile'] })


apiRoutes
  .get("/", mainRoute)

  .post("/auth/signup", createUser)
  .post("/auth/signin", authenticate)

  .get("/auth/logout", logout)
  .get("/auth/current", currentUser)
  .get('/auth/google', googleAuth)
  .get('/google/callback', googleAuth, loginWithGoogle)

  

  
  

  .get("/users/:id", verifyToken, getUser)
  .put("/users/:id", verifyToken, updateUser)
  .put("/users/points/:id", verifyToken, updatePoints)

  // Tasks
  .get("/tasks/:userId", verifyToken, getTasks)
  .put("/tasks/:id", verifyToken, updateTask)
  .post("/tasks", verifyToken, createTask)
  .delete('/tasks/:id', verifyToken, deleteTask)

module.exports = apiRoutes;
