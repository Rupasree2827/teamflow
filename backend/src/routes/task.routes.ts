import { Router } from "express";
import { create, getAll } from "../controllers/task.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

// Create Task
router.post("/", authenticate, create);

// Get All Tasks
router.get("/", authenticate, getAll);

export default router;