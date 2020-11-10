import express from "express";
import { router as testRouter } from "./test-routes";

let router = express.Router();
router.use('/test', testRouter);

export { router };