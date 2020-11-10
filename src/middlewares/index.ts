import { Router } from "express";

export * from "./body-request-parsing-handler";
export * from "./compression-handler";
export * from "./cors-handler";
export * from "./error-handler";
export * from "./route-handler";

export type Wrapper = (router: Router) => void;

export const applyMiddleWare = (middlewares: Wrapper | Wrapper[], router: Router) => {
  let wrapper: Wrapper[] = middlewares instanceof Array
    ? [...middlewares]
    : [middlewares];

  for (let middleware of wrapper) {
    middleware(router);
  }
}