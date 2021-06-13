import { Router } from "express";
import AuthMiddleware from "../../middleware/auth";
import { peopleController } from "./people.controller";


const PeopleRouter = Router();

/**
 * authentication basic base64
 * @route GET /api/v1/people 
 * @group people - person  
 * @param {integer} id.query - id of people
 * @param {string} name.query - containing this name in the fristname
 * @returns {Response.model} 200 - array of Person
 * @security JWT
 */
PeopleRouter.get("/api/v1/people", AuthMiddleware, peopleController.all);

/**
 * create new person
 * @route POST /api/v1/people 
 * @group people - person  
 * @param {string} body.body IPerson json object
 * @security JWT
 */
PeopleRouter.post("/api/v1/people", AuthMiddleware, peopleController.save);


/**
 * update person
 * @route PUT /api/v1/people 
 * @group people - person  
 * @param {string} body.body IPerson json object
 * @security JWT
 */
PeopleRouter.put("/api/v1/people", AuthMiddleware, peopleController.update);



/**
 * remover person id
 * @route DELETE /api/v1/people/{id}
 * @group people - person  
 * @param {number} id.path.required id of person  * 
 * @security JWT
 */
PeopleRouter.delete("/api/v1/people/:id", AuthMiddleware, peopleController.remove);


export default PeopleRouter;