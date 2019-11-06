import { Request, Response } from "express";
import { validationResult } from "express-validator/check";
import CustomResponse from "../../util/response";
import * as HttpStatus from "http-status";
import {
    errorMessage,
    version
} from "../../config/constants";
import logger from "../../config/logger";
import { OfficerService } from "../services/officer.service";
const officerService = new OfficerService();

const fileName = "[officer.controller.js]";

/**
 * OfficerController class
 * contains methods related to
 * officer
 * @class
 */
export class OfficerController {

    /**
     * @description function to check the validation result
     * on request and if validation is success send req.body
     * object to create method of officerService
     * @param {Request} req req object containing officer object
     * @param {Response} res response object
     */
    public async addOfficer(req: Request, res: Response) {
        const methodName = "[addOfficer]";
        try {
            const errors = await validationResult(req);

            if (!errors.isEmpty()) {
                return CustomResponse.setResponse(res, false, HttpStatus.BAD_REQUEST, errorMessage.FAILED, version.v1, { error: errors.array() });
            }

            const addedOfficer = await officerService.create(req.body);

            return CustomResponse.setResponse(res, true, HttpStatus.CREATED, errorMessage.SUCCESS, version.v1, addedOfficer);
        }
        catch (error) {
            logger.error(fileName + methodName + ":error in main try block:" + `${error}`);
            return CustomResponse.setResponse(res, false, HttpStatus.BAD_REQUEST, `${error}`, version.v1, {});
        }
    }

}