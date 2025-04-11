const express = require("express");
const authUser = require("../middilewears/authUser");
const { loginUser, registerUser } = require("../controllers/userControllers");

const userRouter = express.Router();

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)

module.exports= userRouter;