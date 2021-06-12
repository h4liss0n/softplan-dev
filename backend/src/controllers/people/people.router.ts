import { Router } from "express";
import { peopleController } from "./people.controller";


const PeopleRouter = Router();
PeopleRouter.get("/api/v1/people",  peopleController.all);
PeopleRouter.post("/api/v1/people",  peopleController.save);
export default PeopleRouter;