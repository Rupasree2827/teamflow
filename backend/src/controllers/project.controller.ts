import { Request, Response } from "express";
import {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
} from "../services/project.service";

// Create Project
export const create = async (req: Request, res: Response) => {
  try {
    const project = await createProject(req.body);

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Projects
export const getAll = async (req: Request, res: Response) => {
  try {
    const projects = await getProjects();

    res.status(200).json({
      success: true,
      data: projects,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Project
export const update = async (req: Request, res: Response) => {
  try {
    const project = await updateProject(
      req.params.id as string,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: project,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Project
export const remove = async (req: Request, res: Response) => {
  try {
    await deleteProject(req.params.id as string);

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error: any) {
    if (
      error.message.includes("Foreign key constraint")
    ) {
      return res.status(400).json({
        success: false,
        message:
          "❌ Cannot delete this project because it has tasks assigned to it. Delete the tasks first.",
      });
    }

    res.status(400).json({
      success: false,
      message: "Something went wrong while deleting the project.",
    });
  }
};