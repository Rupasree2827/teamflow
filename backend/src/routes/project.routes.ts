import { Router } from "express";
import { create, getAll } from "../controllers/project.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

// Create Project
router.post("/", authenticate, create);

// Get All Projects
router.get("/", authenticate, getAll);

export default router;