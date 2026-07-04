import { Response } from "express";
import { AuthRequest } from "../middlewares/auth.middleware";
import { createTeam, getAllTeams } from "../services/team.service";

export const create = async (req: AuthRequest, res: Response) => {
  try {
    const team = await createTeam({
      ...req.body,
      createdById: req.userId!,
    });

    res.status(201).json({
      success: true,
      message: "Team created successfully",
      data: team,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTeams = async (req: AuthRequest, res: Response) => {
  try {
    const teams = await getAllTeams();

    res.status(200).json({
      success: true,
      data: teams,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};