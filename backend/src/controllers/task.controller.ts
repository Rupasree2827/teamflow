import { Request, Response } from "express";
import {
  createTask,
  getTasks,
  updateTaskStatus,
  updateTask,
} from "../services/task.service";

export const create = async (req: Request, res: Response) => {
  try {
    const task = await createTask(req.body);

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      data: task,
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
    const tasks = await getTasks();

    res.status(200).json({
      success: true,
      data: tasks,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateStatus = async (req: Request, res: Response) => {
  try {
    const task = await updateTaskStatus(
      String(req.params.id),
      req.body.status
    );

    res.status(200).json({
      success: true,
      message: "Task status updated successfully",
      data: task,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const task = await updateTask(
      String(req.params.id),
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      data: task,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};