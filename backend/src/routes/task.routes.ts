import { Router } from "express";
import {
  create,
  getAll,
  updateStatus,
  update,
  remove,
} from "../controllers/task.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

// Create Task
router.post("/", authenticate, create);

// Get All Tasks
router.get("/", authenticate, getAll);

// Update Task Status
router.patch("/:id/status", authenticate, updateStatus);
router.put("/:id", authenticate, update);
router.delete("/:id", authenticate, remove);

export default router;