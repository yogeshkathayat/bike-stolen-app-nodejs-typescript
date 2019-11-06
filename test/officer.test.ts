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

    const officerData = {
        "name": "officer 1",
        departmentId: department1.body.id
    };
    const officer1 = await request(app)
        .post("/api/v1/officer/add")
        .send(officerData);
});


/**
 * closing sequelize connection
 */
afterAll(async () => {
    await sequelize.close();
});

/**
 * Testing post /officer/add endpoint
 */
describe("POST /api/v1/officer/add", function () {
    const data = {
        "name": "dummy",
        "departmentId": 1
    };
    it("It should return 201 CREATED", function (done) {
        request(app)
            .post("/api/v1/officer/add")
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
 * Testing post /officer/add endpoint
 */
describe("POST /api/v1/officer/add", function () {
    const data = {
        "name": "dummy",
        "departmentId": 100   // DepartmentId that does not exists
    };
    it("It should return 400 BAD REQUEST", function (done) {
        request(app)
            .post("/api/v1/officer/add")
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
 * Testing post /officer/add endpoint
 */
describe("POST /api/v1/officer/add", function () {
    const data = {
        "name": "dummy"
        // no departmentId
    };
    it("It should return 400 BAD REQUEST", function (done) {
        request(app)
            .post("/api/v1/officer/add")
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
 * Testing post /officer/add endpoint
 */
describe("POST /api/v1/officer/add", function () {
    const data = {
        // no name
    };
    it("It should return 400 BAD REQUEST", function (done) {
        request(app)
            .post("/api/v1/officer/add")
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
 * Testing post /officer/add endpoint
 */
describe("POST /api/v1/officer/add", function () {
    const data = {
        "name": "officer 1" // officer name that already exists
    };
    it("It should return 400 BAD REQUEST", function (done) {
        request(app)
            .post("/api/v1/officer/add")
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
