import express from "express";
import departmentValidation from "../validations/department.validation";
import { DepartmentController } from "../controllers/department.controller";
const router = express.Router();
const departmentController = new DepartmentController();

/**
 * @api {post} /api/v1/department/add add department
 * @apiDescription add a department
 * @apiVersion 1.0.0
 * @apiName add
 * @apiGroup department
 * @apiPermission public
 *
 * @apiParam  {String}      name     department name
 *
 *
 * @apiSuccess  {Number}  id             department's id
 * @apiSuccess  {String}  name           department's name
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
 *         "name": "NYPD",
 *         "updatedAt": "2019-03-25T10:53:22.137Z",
 *         "createdAt": "2019-03-25T10:53:22.137Z"
 *     }
 * }
 *
 */
router.route("/add")
    .post(departmentValidation("add"), departmentController.addDepartment);

export default router;