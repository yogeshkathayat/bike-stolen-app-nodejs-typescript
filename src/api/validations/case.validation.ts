
const { body, query } = require("express-validator/check");


const departmentValidation = (method: string) => {
    switch (method) {
        case "add": {
            return [
                body("license", "license is required").exists().isAscii().withMessage("Must be only string"),
                body("color", "color is required").exists().isAscii().withMessage("Must be only string"),
                body("type", "type is required").exists().isAscii().withMessage("Must be only string"),
                body("owner", "owner is required").exists().isAscii().withMessage("Must be only string"),
                body("dateOfTheft", "dateOfTheft is required").exists(),
                body("theftDescription", "theftDescription is required").exists().isAscii().withMessage("Must be only string")
            ];
        }
        case "resolve": {
            return [
                body("caseId", "caseId is required").exists().isInt().withMessage("Must be only numeric"),
            ];
        }
        case "find": {
            return [
                query("id", "Id should be number").optional().isInt().withMessage("Must be only numeric"),
                query("officerId", "officerId should be number").optional().isInt().withMessage("Must be only numeric"),
                query("license", "license is required").optional().isAscii().withMessage("Must be only string"),
                query("color", "color is required").optional().isAscii().withMessage("Must be only string"),
                query("type", "type is required").optional().isAscii().withMessage("Must be only string"),
                query("owner", "owner is required").optional().isAscii().withMessage("Must be only string"),
                query("dateOfTheft", "dateOfTheft is required").optional(),
                query("status", "status is required").optional().isAscii().withMessage("Must be only string")
            ];
        }
    }

};
export default departmentValidation;