import { Router } from "express";
import cors from "cors";

const corsHandler = (router: Router) => {
  router.use(cors({ credentials: true, origin: true }));
};

export { corsHandler };
