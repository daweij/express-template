import { Request, Response, NextFunction, Router } from "express";
import HttpException from "../models/exceptions/http-exception";

const errorHandler = (router: Router) => {
  router.use(
    (
      error: Error,
      request: Request,
      response: Response,
      next: NextFunction
    ) => {
      if (error instanceof HttpException) {
        console.warn(error);
        response.status(error.status).send(error.message);
      } else {
        console.error(error);
        if (process.env.NODE_ENV === "production") {
          response.status(500).send("Internal Server Error");
        } else {
          response.status(500).send(error.stack);
        }
      }
    }
  );
};

export { errorHandler };
