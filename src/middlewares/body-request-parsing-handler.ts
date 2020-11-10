import { Router } from "express";
import parser from "body-parser";

const bodyRequestParsingHandler = (router: Router) => {
  router.use(parser.urlencoded({ extended: true }));
  router.use(parser.json());
};

export { bodyRequestParsingHandler };
