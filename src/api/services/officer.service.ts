
import Officer from "../models/officer.model";
import { CaseService } from "../services/case.service";
import Department from "../models/department.model";

const caseService = new CaseService();


/**
 * OfficerService class
 * contains service methods related
 * to officer
 * @class
 */
export class OfficerService {


    /**
     * @description function to add officer object
     * into database and if any case is unassigned
     * assign that case to the officer
     * @param {Officer} officerObj officer Object
     * @returns {Officer} created officer object
     */
    async create(officerObj: Officer) {
        try {
            // check if departmentId exists or not
            const dept = await Department.findOne({
                where: {
                    id: officerObj.departmentId
                }
            });

            if (!dept) throw new Error("departmentId does not exists");

            // check if Officer already exists
            const officerExists = await Officer.findOne({
                where: {
                    name: officerObj.name
                }
            });

            if (officerExists) throw new Error("officer already exists");


            const officer = await Officer.create(officerObj);
            // check if any case in unassigned, assign that case to the officer
            const caseAssigned = await caseService.assignCase(officer.id);
            if (caseAssigned) {
                officer.caseId = caseAssigned.id;
            }
            return officer;

        } catch (error) {
            throw error;
        }
    }
}
