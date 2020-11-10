"use strict";
import awsServerlessExpress from "aws-serverless-express";
import { Context } from "aws-lambda";
import * as dotenv from "dotenv";
import app from "../app";

dotenv.config();
const server = awsServerlessExpress.createServer(app);

exports.handler = (event: any, context: Context) =>
  awsServerlessExpress.proxy(server, event, context);