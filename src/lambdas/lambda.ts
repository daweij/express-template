import { Context } from "aws-lambda";
import * as dotenv from "dotenv";

dotenv.config();

export const handler = (event: any, context: Context) =>
  console.log('Log from lambda');