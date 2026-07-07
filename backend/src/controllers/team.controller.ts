import { Response } from "express";
import { AuthRequest } from "../middlewares/auth.middleware";
import {
  createTeam,
  getAllTeams,
  deleteTeam,
  updateTeam,
} from "../services/team.service";

// Create Team
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

// Get All Teams
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

// Update Team
export const update = async (req: AuthRequest, res: Response) => {
  try {
    const team = await updateTeam(
      req.params.id as string,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Team updated successfully",
      data: team,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Team
export const remove = async (req: AuthRequest, res: Response) => {
  try {
    console.log("DELETE TEAM API HIT");
    await deleteTeam(req.params.id as string);

    res.status(200).json({
      success: true,
      message: "Team deleted successfully",
    });
  } catch (error: any) {
     if (
    error.message.includes("Foreign key constraint")
  ) {
    return res.status(400).json({
      success: false,
      message:
        "❌ Cannot delete this team because it has projects assigned to it. Delete the projects first.",
    });
  }

  res.status(400).json({
    success: false,
    message: "Something went wrong while deleting the team.",
  });
}

};