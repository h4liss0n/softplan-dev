import { Router } from "express";
import { peopleController } from "./people.controller";


const PeopleRouter = Router();
PeopleRouter.get("/api/v1/people",  peopleController.all);
PeopleRouter.post("/api/v1/people",  peopleController.save);
PeopleRouter.put("/api/v1/people",  peopleController.update);
PeopleRouter.delete("/api/v1/people/:id",  peopleController.remove);
export default PeopleRouter;