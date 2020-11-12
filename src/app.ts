import express from "express";
import { 
  applyMiddleWare,
  bodyRequestParsingHandler,
  compressionHandler,
  corsHandler,
  errorHandler,
  routeHandler
} from './middlewares';


process.on("uncaughtException", (e) => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", (e) => {
  console.log(e);
  process.exit(1);
});

const router = express();

applyMiddleWare(corsHandler, router);
applyMiddleWare(bodyRequestParsingHandler, router);
applyMiddleWare(compressionHandler, router);
applyMiddleWare(routeHandler, router);
applyMiddleWare(errorHandler, router);

router.get('/', (req, res) => {
  return res.status(200).json({ 'test': false });
});

export { router };