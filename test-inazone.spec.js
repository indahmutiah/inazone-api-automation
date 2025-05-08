import { expect } from "chai";
import request from "supertest";

let url = "https://ina-zone.indahmutiah.com/";
let endpoint_province = "api/province";
let endpoint_city = "api/city";

describe("Test API Province", () => {
  context("Test API Province - Positive", function () {
    it("Get All Province", async () => {
      const response = await request(url).get(endpoint_province);
      expect(response.status).to.equal(200);
    });

    it("Get Province By ID", async () => {
      const response = await request(url).get(`${endpoint_province}/id/12`);
      expect(response.status).to.equal(200);
    });
    it("Get Province By Slug", async () => {
      const response = await request(url).get(`${endpoint_province}/aceh`);
      expect(response.status).to.equal(200);
    });
    it("Get Province By Code", async () => {
      const response = await request(url).get(`${endpoint_province}/code/32`);
      expect(response.status).to.equal(200);
    });
  });
  context("Test API Province - Negative", function () {
    it("Get Province By ID Not Found", async () => {
      const response = await request(url).get(`${endpoint_province}/id/999`);
      expect(response.status).to.equal(404);
    });
    it("Get Province By Slug Not Found", async () => {
      const response = await request(url).get(`${endpoint_province}/jakarta`);
      expect(response.status).to.equal(404);
    });
    it("Get Province By Slug Not Found", async () => {
      const response = await request(url).get(`${endpoint_province}/0912031`);
      expect(response.status).to.equal(404);
    });
    it("Get Province By Code Not Found", async () => {
      const response = await request(url).get(`${endpoint_province}/code/999`);
      expect(response.status).to.equal(404);
    });
    it("Get Province By Code Not Found", async () => {
      const response = await request(url).get(
        `${endpoint_province}/code/73.031`
      );
      expect(response.status).to.equal(404);
    });
    it("Get Province By Code Not Found", async () => {
      const response = await request(url).get(
        `${endpoint_province}/code/!@!@&`
      );
      expect(response.status).to.equal(400);
    });
  });
});

describe("Test API City", () => {
  context("Test API City - Positive", function () {
    it("Get All City", async () => {
      const response = await request(url).get(endpoint_city);
      expect(response.status).to.equal(200);
    });
    it("Get City By ID", async () => {
      const response = await request(url).get(`${endpoint_city}/id/12`);
      expect(response.status).to.equal(200);
    });
    it("Get City By Slug", async () => {
      const response = await request(url).get(
        `${endpoint_city}/kota-samarinda`
      );
      expect(response.status).to.equal(200);
    });
    it("Get City By Code", async () => {
      const response = await request(url).get(`${endpoint_city}/code/32.71`);
      expect(response.status).to.equal(200);
    });
  });
  context("Test API City - Negative", function () {
    it("Get City By ID Not Found", async () => {
      const response = await request(url).get(`${endpoint_city}/id/999`);
      expect(response.status).to.equal(404);
    });
    it("Get City By Slug Not Found", async () => {
      const response = await request(url).get(`${endpoint_city}/kota-jakarta`);
      expect(response.status).to.equal(404);
    });
    it("Get City By Slug Not Found", async () => {
      const response = await request(url).get(`${endpoint_city}/0912031`);
      expect(response.status).to.equal(404);
    });
    it("Get City By Code Not Found", async () => {
      const response = await request(url).get(`${endpoint_city}/code/999`);
      expect(response.status).to.equal(404);
    });
    it("Get City By Code Not Found", async () => {
      const response = await request(url).get(`${endpoint_city}/code/73.031`);
      expect(response.status).to.equal(404);
    });
    it("Get City By Code Not Found", async () => {
      const response = await request(url).get(`${endpoint_city}/code/!@!@&`);
      expect(response.status).to.equal(404);
    });
  });
});
