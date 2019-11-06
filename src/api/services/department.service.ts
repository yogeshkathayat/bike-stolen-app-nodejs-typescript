
import Department from "../models/department.model";

/**
 * DepartmentService class
 * contains service methods related
 * to Department
 * @class
 */
export class DepartmentService {


   /**
    * @description function to add department
    * object into database
    * @param {Department} departmentObj Department Object
    * @returns {Department} created Department object
    */
   async create(departmentObj: Department) {
      try {
         // check if department already exists
         const dept = await Department.findOne({
            where: {
               name: departmentObj.name
            }
         });

         if (dept) throw new Error("department already exists");
         return await Department.create(departmentObj);
      } catch (error) {
         throw error;
      }
   }
}
