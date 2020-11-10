import express, { Request, Response } from "express";

let router = express.Router();

const get = async (req: Request, res: Response) => {
  return res.status(200).json({ test: false });
};

router.get('/', get);

export {
  router,
  get
};