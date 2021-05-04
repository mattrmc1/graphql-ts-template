import { Request, Response, NextFunction } from "express";
import { HttpCodes } from "../util/HttpCodes";

// EXAMPLE MIDDLEWARE (Replace or Delete this)
export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  if (!req.headers) return res.sendStatus(HttpCodes.FORBIDDEN).end();
  if (!req.headers) return res.sendStatus(HttpCodes.BAD_REQUEST).end();

  next();
}