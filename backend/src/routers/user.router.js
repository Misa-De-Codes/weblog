import express from "express";
import { signup, login, logout } from "../controllers/user.controller.js";
import verifyAccess from "../middlewares/verifyAccess.js"


const router = express.Router()



router.post('/', signup)

router.post('/login' , login)

router.post('/logout', logout)


export default router;