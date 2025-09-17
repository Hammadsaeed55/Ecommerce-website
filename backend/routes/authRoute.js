import express from 'express'
import { googleLogin, login, logout, register } from '../controllers/authController.js';
const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.get("/logout", logout)
router.post('/googlelogin', googleLogin)

export default router;