import { Router } from "express";
import { router as masterRoutes } from "../routes";

const routeHandler = (router: Router) => {
  router.use(masterRoutes);
};

export { routeHandler };