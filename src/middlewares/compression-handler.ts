import { Router } from "express";
import compression from "compression";

const compressionHandler = (router: Router) => {
  router.use(compression());
};

export { compressionHandler };
