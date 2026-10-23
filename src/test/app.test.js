import { expect } from "chai";
import request from "supertest";
import app from "../app.js";

describe("GET /", () => {
  it("returns the GitHub Actions greeting", async () => {
    const response = await request(app).get("/");

    expect(response.status).to.equal(200);
    expect(response.text).to.equal("Hello, GitHub Actions!");
  });
});