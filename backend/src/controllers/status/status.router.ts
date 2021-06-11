import { Router } from "express";
import { sourceController } from "./status.controller";

const sourceRouter = Router();
sourceRouter.get("/source",  sourceController.all);
export default sourceRouter;