import request from "supertest";
import app from "../src/config/app";
import sequelize from "../src/config/sequelize";

/**
 * Creating Data into database for test cases
 */
beforeAll(async () => {

    await sequelize.sync({ force: true });
    const departmentData = {
        "name": "department 1"
    };
    const department1 = await request(app)
        .post("/api/v1/department/add")
        .send(departmentData);

    departmentData.name = "department 2";
    const department2 = await request(app)
        .post("/api/v1/department/add")
        .send(departmentData);

    const officerData = {
        "name": "officer 1",
        departmentId: department1.body.result.id
    };
    const officer1 = await request(app)
        .post("/api/v1/officer/add")
        .send(officerData);


    const caseData = {
        "color": "blue",
        "type": "tour",
        "owner": "dharam",
        "dateOfTheft": "1995-12-06T20:00:00.000Z",
        "license": "licence",
        "theftDescription": "from parking lot near supermarket"
    };

    await request(app)
        .post("/api/v1/case/add")
        .send(caseData);
});

/**
 * closing sequelize connection
 */
afterAll(async () => {
    await sequelize.close();
});


/**
 * Testing post /case/add endpoint
 */
describe("POST /api/v1/case/add", function () {
    const data = {
        "color": "blue",
        "type": "tour",
        "owner": "dharam",
        "dateOfTheft": "1995-12-06T20:00:00.000Z",
        "license": "licence",
        "theftDescription": "market"

    };

    it("It should return 201 CREATED", function (done) {
        request(app)
            .post("/api/v1/case/add")
            .send(data)
            .set("Content-Type", "application/json")
            .expect("Content-Type", /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

/**
 * Testing post /case/add endpoint
 */
describe("POST /api/v1/case/add", function () {
    const data = {
        "color": "blue",
        "type": "tour",
        "owner": "dharam",
        "dateOfTheft": "1995-12-06T20:00:00.000Z"
        // parameters removed
    };
    it("It should return 400 BAD REQUEST", function (done) {
        request(app)
            .post("/api/v1/case/add")
            .send(data)
            .set("Content-Type", "application/json")
            .expect("Content-Type", /json/)
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});


/**
 * Testing post /case/add endpoint
 */
describe("POST /api/v1/case/add", function () {
    const data = {
        // no parameters
    };
    it("It should return 400 BAD REQUEST", function (done) {
        request(app)
            .post("/api/v1/case/add")
            .send(data)
            .set("Content-Type", "application/json")
            .expect("Content-Type", /json/)
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});



/**
 * Testing post /case/resolve endpoint
 */
describe("POST /api/v1/case/resolve", function () {
    const data = {
        caseId: 1
    };
    it("It should return 200 SUCCESS", function (done) {
        request(app)
            .post("/api/v1/case/resolve")
            .send(data)
            .set("Content-Type", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});


/**
 * Testing post /case/resolve endpoint
 */
describe("POST /api/v1/case/resolve", function () {
    const data = {
        caseId: 1 // CASE ID THAT ALREADY RESOLVED
    };
    it("It should return 400 BAD REQUEST", function (done) {
        request(app)
            .post("/api/v1/case/resolve")
            .send(data)
            .set("Content-Type", "application/json")
            .expect("Content-Type", /json/)
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});



/**
 * Testing post /case/resolve endpoint
 */
describe("POST /api/v1/case/resolve", function () {
    const data = {
        caseId: 10000 // CASE ID THAT IS NOT PRESENT
    };
    it("It should return 400 BAD REQUEST", function (done) {
        request(app)
            .post("/api/v1/case/resolve")
            .send(data)
            .set("Content-Type", "application/json")
            .expect("Content-Type", /json/)
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});



/**
 * Testing post /case/resolve endpoint
 */
describe("POST /api/v1/case/resolve", function () {
    const data = {
        // no parameters
    };
    it("It should return 400 BAD REQUEST", function (done) {
        request(app)
            .post("/api/v1/case/resolve")
            .send(data)
            .set("Content-Type", "application/json")
            .expect("Content-Type", /json/)
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

/**
 * Testing get /case/find endpoint
 */

describe("GET /api/v1/case/find", () => {
    it("should return 200 OK", () => {
        return request(app).get("/api/v1/case/find")
            .expect(200);
    });
});