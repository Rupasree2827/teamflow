import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "TeamFlow API is running successfully",
    timestamp: new Date().toISOString(),
  });
});

export default router;