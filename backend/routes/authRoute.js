import express from 'express'
import { adminLogin, googleLogin, login, logout, register } from '../controllers/authController.js';
const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.get("/logout", logout)
router.post('/googlelogin', googleLogin)
router.post('/adminlogin', adminLogin)

export default router;