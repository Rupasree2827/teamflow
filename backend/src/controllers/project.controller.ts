import { Request, Response } from "express";
import { createProject, getProjects } from "../services/project.service";

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