import { Request, Response } from "express";

export const createUser = async (req: Request, res:Response) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};
