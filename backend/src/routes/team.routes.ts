import { Router } from "express";
import {
  create,
  getTeams,
  remove,
  update,
} from "../controllers/team.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.post("/", authenticate, create);

router.get("/", authenticate, getTeams);

router.put("/:id", authenticate, update);

router.delete("/:id", authenticate, remove);

export default router;