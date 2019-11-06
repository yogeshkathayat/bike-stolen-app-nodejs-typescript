import express from "express";
import caseValidation from "../validations/case.validation";
import { CaseController } from "../controllers/case.controller";
const router = express.Router();
const caseController = new CaseController();


/**
 * @api {post} /api/v1/case/add add case
 * @apiDescription add a case
 * @apiVersion 1.0.0
 * @apiName add
 * @apiGroup case
 * @apiPermission public
 *
 * @apiParam  {String}      license           license of bike
 * @apiParam  {String}      color             color  of bike
 * @apiParam  {String}      type              type  of bike
 * @apiParam  {String}      owner             owner name
 * @apiParam  {String}      dateOfTheft       dateOfTheft of bike
 * @apiParam  {String}      theftDescription  theftDescription
 *
 *
 * @apiSuccess  {String}      license           license of bike
 * @apiSuccess  {String}      color             color  of bike
 * @apiSuccess  {String}      type              type  of bike
 * @apiSuccess  {String}      owner             owner name
 * @apiSuccess  {String}      dateOfTheft       dateOfTheft of bike
 * @apiSuccess  {String}      theftDescription  theftDescription
 * @apiSuccess  {String}      status            status of case
 * @apiSuccess  {Number}      officerId         id of officer that has been assinged to the case
 *
 *
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
 *  "status": true,
 *  "code": 200,
 *  "message": "Sucess",
 *  "appVersion": "v1.0.0",
 *  "result":
 *       {
 *           "id": 4,
 *           "color": "blue",
 *           "type": "sports",
 *           "owner": "yogesh",
 *            "dateOfTheft": "1995-12-06T20:00:00.000Z",
 *            "license": "li",
 *            "theftDescription": "market",
 *            "status": "New",
 *            "updatedAt": "2019-03-25T18:13:21.681Z",
 *            "createdAt": "2019-03-25T18:13:21.681Z",
 *            "officerId": null
 *        }
 * }
 *
 */
router.route("/add")
    .post(caseValidation("add"), caseController.addCase);


/**
 * @api {post} /api/v1/case/resolve resolve case
 * @apiDescription resolve a case
 * @apiVersion 1.0.0
 * @apiName resolve
 * @apiGroup case
 * @apiPermission public
 *
 * @apiParam  {Number}      caseId           id of case
 *
 * @apiSuccess  {String}      license           license of bike
 * @apiSuccess  {String}      color             color  of bike
 * @apiSuccess  {String}      type              type  of bike
 * @apiSuccess  {String}      owner             owner name
 * @apiSuccess  {String}      dateOfTheft       dateOfTheft of bike
 * @apiSuccess  {String}      theftDescription  theftDescription
 * @apiSuccess  {String}      status            status of case
 * @apiSuccess  {Number}      officerId         id of officer that has been assinged to the case
 *
 *
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
 *  "status": true,
 *  "code": 200,
 *  "message": "Sucess",
 *  "appVersion": "v1.0.0",
 *  "result": 
 *       {
 *           "id": 4,
 *           "color": "blue",
 *           "type": "sports",
 *           "owner": "yogesh",
 *            "dateOfTheft": "1995-12-06T20:00:00.000Z",
 *            "license": "li",
 *            "theftDescription": "market",
 *            "status": "Resolved",
 *            "updatedAt": "2019-03-25T18:13:21.681Z",
 *            "createdAt": "2019-03-25T18:13:21.681Z",
 *            "officerId": null
 *        }
 * }
 *
 */
router.route("/resolve")
    .post(caseValidation("resolve"), caseController.resolveCase);

/**
 * @api {get} /api/v1/case/find find cases
 * @apiDescription to search cases based on different characteristics
 * @apiVersion 1.0.0
 * @apiName find
 * @apiGroup case
 * @apiPermission public
 *
 * @apiParam  {Number}      id                id of case
 * @apiParam  {String}      license           license of bike
 * @apiParam  {String}      color             color  of bike
 * @apiParam  {String}      type              type  of bike
 * @apiParam  {String}      owner             owner name
 * @apiParam  {String}      dateOfTheft       dateOfTheft of bike
 * @apiParam  {String}      status            status of case
 * @apiParam  {Number}      officerId         id of officer that has been assinged to the case
 * @apiParam  {Number}      perPage           records per page
 * @apiParam  {Number}      page              page no starts with 0
 *
 * @apiSuccess  {Number}      id                id of case
 * @apiSuccess  {String}      license           license of bike
 * @apiSuccess  {String}      color             color  of bike
 * @apiSuccess  {String}      type              type  of bike
 * @apiSuccess  {String}      owner             owner name
 * @apiSuccess  {String}      dateOfTheft       dateOfTheft of bike
 * @apiSuccess  {String}      theftDescription  theftDescription
 * @apiSuccess  {String}      status            status of case
 * @apiSuccess  {Number}      officerId         id of officer that has been assinged to the case
 *
 *
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
 *  "status": true,
 *  "code": 200,
 *  "message": "Sucess",
 *  "appVersion": "v1.0.0",
 *  "result": {
 *    "cases": [
 *       {
 *           "id": 4,
 *           "color": "blue",
 *           "type": "sports",
 *           "owner": "yogesh",
 *            "dateOfTheft": "1995-12-06T20:00:00.000Z",
 *            "license": "li",
 *            "theftDescription": "market",
 *            "status": "New",
 *            "updatedAt": "2019-03-25T18:13:21.681Z",
 *            "createdAt": "2019-03-25T18:13:21.681Z",
 *            "officerId": null
 *        },
 *       {
 *           "id": 2,
 *           "color": "black",
 *           "type": "tour",
 *           "owner": "dharam",
 *            "dateOfTheft": "1995-12-06T20:00:00.000Z",
 *            "license": "licence",
 *            "theftDescription": "market",
 *            "status": "New",
 *            "updatedAt": "2019-03-25T18:13:21.681Z",
 *            "createdAt": "2019-03-25T18:13:21.681Z",
 *            "officerId": null
 *        }
 *     ],
 *  "totalCases": 20
 *  }
 * }
 *
 *
 */
router.route("/find")
    .get(caseValidation("find"), caseController.findCases);

export default router;