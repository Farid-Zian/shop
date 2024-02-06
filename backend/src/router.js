const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
// hashing password middleware
const { hashPassword } = require("./services/auth");
// LOGIN
const authControllers = require("./controllers/authControllers");

router.post("/login", authControllers.login);

// Import itemControllers module for handling item-related operations
const userControllers = require("./controllers/userControllers");
// Route to get a list of users
router.get("/user", userControllers.browse);
// Route to get a specific user by ID
router.get("/user/:id", userControllers.read);
// Route to add a new user
router.post("/user/create", hashPassword, userControllers.add);

/* ************************************************************************* */

module.exports = router;
