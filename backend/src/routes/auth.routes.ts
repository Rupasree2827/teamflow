import { Router } from "express";
import { register, login, me } from "../controllers/auth.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

// Register User
router.post("/register", register);

// Login User
router.post("/login", login);
router.get("/me", authenticate, me);

export default router;