import express from "express";
import { register, login, updateUser } from "../controllers/AuthController.js";
import AuthenticateUser from '../middleware/Auth.js'

const router = express.Router()

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/updateUser").patch(AuthenticateUser,updateUser)

export default router