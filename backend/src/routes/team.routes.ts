import { Router } from "express";
import { create, getTeams } from "../controllers/team.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

// Create Team
router.post("/", authenticate, create);

// Get All Teams
router.get("/", authenticate, getTeams);

export default router;