import { Router } from "express";
import {
  create,
  getAll,
  update,
  remove,
} from "../controllers/project.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

// Create Project
router.post("/", authenticate, create);

// Get All Projects
router.get("/", authenticate, getAll);

// Update Project
router.put("/:id", authenticate, update);

// Delete Project
router.delete("/:id", authenticate, remove);

export default router;