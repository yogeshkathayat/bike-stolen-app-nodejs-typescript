import { Request, Response } from "express";
import { validationResult } from "express-validator/check";
import CustomResponse from "../../util/response";
import * as HttpStatus from "http-status";
import {
    errorMessage,
    version
} from "../../config/constants";
import logger from "../../config/logger";
import { DepartmentService } from "../services/department.service";
const departmentService = new DepartmentService();

const fileName = "[deparment.conrtoller.js]";

/**
 * DepartmentController class
 * contains methods related to
 * department
 * @class
 */
export class DepartmentController {

    /**
     * @description function to check the validation result
     * on request and if validation is success send req.body
     * object to create method of departmentService
     * @param {Request} req req object containing department object
     * @param {Response} res response object
     */
    public async addDepartment(req: Request, res: Response) {
        const methodName = "[addDepartment]";
        try {
            const errors = await validationResult(req);

            if (!errors.isEmpty()) {
                return CustomResponse.setResponse(res, false, HttpStatus.BAD_REQUEST, errorMessage.FAILED, version.v1, { error: errors.array() });
            }

            const addedDepartment = await departmentService.create(req.body);

            return CustomResponse.setResponse(res, true, HttpStatus.CREATED, errorMessage.SUCCESS, version.v1, addedDepartment);
        }
        catch (error) {
            logger.error(fileName + methodName + ":error in main try block:" + `${error}`);
            return CustomResponse.setResponse(res, false, HttpStatus.BAD_REQUEST, `${error}`, version.v1, {});
        }
    }
}