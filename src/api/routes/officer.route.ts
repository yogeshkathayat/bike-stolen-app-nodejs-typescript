import express from "express";
import officerValidation from "../validations/officer.validation";
import { OfficerController } from "../controllers/officer.controller";
const router = express.Router();
const officerController = new OfficerController();


/**
 * @api {post} /api/v1/officer/add add officer
 * @apiDescription add a officer
 * @apiVersion 1.0.0
 * @apiName add
 * @apiGroup officer
 * @apiPermission public
 *
 * @apiParam  {String}      name            officer name
 * @apiParam  {Number}      departmentId    department Id
 *
 * @apiSuccess  {Number}  id             officer's id
 * @apiSuccess  {String}  name           officer's name
 * @apiSuccess  {Number}  departmentId   department Id
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 *
 *  @apiErrorExample {json} List error
 *    {
 *    "status": false,
 *    "code": 400,
 *    "appVersion": "v1.0.0",
 *    "message": "value must have at least 4 children",
 *    "result": []
 *    }
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "status": true,
 *     "code": 200,
 *     "message": "Sucess",
 *     "appVersion": "v1.0.0",
 *     "result": 
 *       {
 *         "id": 1,
 *         "name": "yogesh",
 *         "departmentId":3,
 *         "updatedAt": "2019-03-25T10:53:22.137Z",
 *         "createdAt": "2019-03-25T10:53:22.137Z"
 *     }
 * }
 *
 */
router.route("/add")
    .post(officerValidation("add"), officerController.addOfficer);

export default router;