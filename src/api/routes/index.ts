import express from "express";
import departmentRoute from "./department.route";
import caseRoute from "./case.route";
import officerRoute from "./officer.route";

const router = express.Router();

/**
 * GET v1/health
 */
router.get("/health", (req, res) => res.status(200).send("OK"));
/**
 * GET v1/docs
 */
router.use("/docs", express.static("docs"));

router.use("/case", caseRoute);

router.use("/department", departmentRoute);

router.use("/officer", officerRoute);


export default router;
