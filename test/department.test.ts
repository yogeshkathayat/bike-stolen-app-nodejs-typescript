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
});

/**
 * closing sequelize connection
 */
afterAll(async () => {
    await sequelize.close();
});



/**
 * Testing post /department/add endpoint
 */
describe("POST /api/v1/department/add", function () {
    const data = {
        "name": "dummy"
    };
    it("It should return 201 CREATED", function (done) {
        request(app)
            .post("/api/v1/department/add")
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
 * Testing post /department/add endpoint
 */
describe("POST /api/v1/department/add", function () {
    const data = {
        "name": "department 1" // department that already exists
    };
    it("It should return 400 BAD REQUEST", function (done) {
        request(app)
            .post("/api/v1/department/add")
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
 * Testing post /department/add endpoint
 */
describe("POST /api/v1/department/add", function () {
    const data = {
        // no name
    };
    it("It should return 400 BAD REQUEST", function (done) {
        request(app)
            .post("/api/v1/department/add")
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