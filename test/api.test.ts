import request from "supertest";
import app from "../src/config/app";


/**
 * Testing health api
 */
describe("GET /api/v1/health", () => {
  it("should return 200 OK", () => {
    return request(app).get("/api/v1/health")
      .expect(200);
  });
});
