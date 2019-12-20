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
const getUsers = require("./user/get-users");
const updateUser = require("./user/update-user");
const deleteUser = require("./user/delete-user");
const uploadImages = require("./user/upload-igames");
const submitForm = require("./user/submit-form");

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

  .post("/submit", submitForm)

  .get("/auth/logout", logout)
  .get("/auth/current", currentUser)
  .get('/auth/google', googleAuth)
  .get('/google/callback', googleAuth, loginWithGoogle)

  // Tasks
  .get("/tasks/:userId", getTasks)
  .put("/tasks/:id", updateTask)

  
  

  .get("/users", verifyToken, getUsers)
  .get("/users/:id", verifyToken, getUser)
  .put("/users/:id", verifyToken, updateUser)
  .delete("/users/:id", verifyToken, deleteUser)
  .post("/upload", verifyToken, uploadImages)

  // Tasks
  .post("/tasks", verifyToken, createTask)
  .delete('/tasks/:id', verifyToken, deleteTask)

module.exports = apiRoutes;
