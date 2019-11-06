
import Case from "../models/case.model";
import Officer from "../models/officer.model";
import Department from "../models/department.model";
import {
    caseStatus
} from "../../config/constants";

/**
 * CaseService class
 * contains service methods related
 * to case
 * @class
 */
export class CaseService {

    /**
     * @description function to add case object
     * into database and if any officer is free
     * assign the case to that officer
     * @param {Case} caseObj case Object
     * @returns {Case} created case object
     */
    async create(caseObj: Case) {
        try {
            const availableOfficer = await Officer.findOne({
                where: {
                    caseId: null
                },
                order: [
                    ["updatedAt", "ASC"]
                ]
            });

            caseObj.status = caseStatus.NEW;

            if (availableOfficer) {
                caseObj.officerId = availableOfficer.id;
                caseObj.status = caseStatus.IN_PROGRESS;
            }

            const createdCase = await Case.create(caseObj);
            if (availableOfficer) {
                availableOfficer.caseId = createdCase.id;
                await availableOfficer.save();
            }

            return createdCase;
        } catch (error) {
            throw error;
        }

    }

    /**
     * @description function to resolve case
     * based on caseId and update the status
     * into database and if any case is unassigned
     * assign that case to the officer
     * @param {number} caseId case Id
     * @returns {Case} resolved case object
     */
    async resolve(caseId: number) {
        try {
            const caseObj = await Case.findOne({ where: { id: caseId } });
            if (!caseObj) {
                throw new Error("Case not found");
            }
            if (caseObj.status === caseStatus.NEW) {
                throw new Error("Case is not yet assigned");
            }
            if (caseObj.status === caseStatus.RESOLVED) {
                throw new Error("Case already resolved");
            }

            caseObj.status = caseStatus.RESOLVED;
            const resolvedCase = await caseObj.save();
            await Officer.update(
                {
                    caseId: null
                },
                {
                    where: {
                        id: caseObj.officerId
                    }
                });
            await this.assignCase(caseObj.officerId);
            return resolvedCase;
        } catch (error) {
            throw error;

        }

    }


    /**
     * @description function to search bike cases
     * by different characteristics
     * @param {any} query query object
     * @returns {Array} list of found cases
     */
    async find(query: any) {
        try {
            let perPage = 10;
            let page = 0;

            const whereQuery: any = {};
            if (query.id) {
                whereQuery.id = query.id;
            }
            if (query.status) {
                whereQuery.status = query.status;
            }
            if (query.license) {
                whereQuery.license = query.license;
            }
            if (query.color) {
                whereQuery.color = query.color;
            }
            if (query.type) {
                whereQuery.type = query.type;
            }
            if (query.owner) {
                whereQuery.owner = query.owner;
            }
            if (query.dateOfThefQt) {
                whereQuery.dateOfTheft = query.dateOfTheft;
            }
            if (query.officerId) {
                whereQuery.officerId = query.officerId;
            }

            if (query.perPage) {
                perPage = parseInt(query.perPage);
            }
            if (query.page) {
                page = parseInt(query.page);
            }

            const cases = await Case.findAll({
                where: whereQuery,
                limit: perPage,
                offset: (page) * perPage,
                order: [
                    ["createdAt", "DESC"]
                ],
                include: [{
                    model: Officer,
                    include: [Department]
                }]
            });
            const totalCases = await Case.count({ where: whereQuery });

            return { cases, totalCases };

        } catch (error) {
            throw error;
        }

    }


    /**
     * @description function to assign bike cases
     * to the officer
     * @param {number} officerId id of officer
     * @returns {Case} case object
     */
    async assignCase(officerId: number) {
        try {
            const unassignedCase = await Case.findOne({
                where: {
                    status: caseStatus.NEW
                },
                order: [
                    ["createdAt", "ASC"]
                ]
            });
            if (unassignedCase) {
                await Officer.update(
                    {
                        caseId: unassignedCase.id
                    },
                    {
                        where: {
                            id: officerId
                        }
                    });

                unassignedCase.officerId = officerId;
                unassignedCase.status = caseStatus.IN_PROGRESS;
                return await unassignedCase.save();
            }
            return false;
        } catch (error) {
            throw error;

        }
    }

}
