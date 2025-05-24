import express from "express";
import { signup, login, logout } from "../controllers/user.controller.js";
import verifyAccess from "../middlewares/verifyAccess.js"


const router = express.Router()
router.post('/', signup)
router.post('/login' , login)
router.post('/logout', verifyAccess, logout)

router.route('/:id')
.get(verifyAccess, (req, res, next) => {
    res.send('one user by id')
})

export default router;