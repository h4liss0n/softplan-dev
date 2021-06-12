import { Router } from "express";
import { sourceController } from "./source.controller";

const SourceRouter = Router();
SourceRouter.get("/source",  sourceController.all);
SourceRouter.get("/",  sourceController.all);
export default SourceRouter;