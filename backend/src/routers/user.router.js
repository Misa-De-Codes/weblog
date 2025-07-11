import express from "express";
import { signup, login, logout, getAUser, updateUser } from "../controllers/user.controller.js";
import verifyAccess from "../middlewares/verifyAccess.js"


const router = express.Router()
router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', verifyAccess, logout)

router.route('/:username')
    .get(verifyAccess, getAUser)
    .patch(verifyAccess, updateUser)

    
export default router;