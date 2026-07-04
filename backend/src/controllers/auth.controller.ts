import { Request, Response } from "express";
import {
  registerUser,
  loginUser,
  getCurrentUser,
} from "../services/auth.service";
import { AuthRequest } from "../middlewares/auth.middleware";
import { generateToken } from "../utils/jwt";

export const register = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data:user
      
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await loginUser(email, password);
    const token = generateToken(user.id);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
  user,
  token,
},
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const me = async (req: AuthRequest, res: Response) => {
  try {
    const user = await getCurrentUser(req.userId!);

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};