import { INestApplication, HttpStatus } from "@nestjs/common";
import * as request from "supertest";
import { FileHelper } from './helper/files'
import mock from './mock/articles'

const req = request('http://localhost:5000');
let file = new FileHelper();

describe("E2E Tests for NOTE Endpoints", () => {

    beforeEach(async () => { });
    afterAll(async done => { });

    let id = null;
    let articleTotalInit = null;
    let article = null;
    const FIRST_SET_LENGTH = 2;
    const SECOND_SET_LENGTH = 2;
    const THIRD_SET_LENGTH = 3;

    it("should delete all articles", () => {
        return req.delete("/api/articles/all")
            .set("Accept", "application/json")
            .expect(HttpStatus.OK).then(response => {
                file.saveToFile(__dirname + '/data/deleteAllInit.json', response.text);
            })
    });

    it("pull first data set", () => {
        return req.post("/api/articles/many?step=1")
            .set("Accept", "application/json")
            .expect(HttpStatus.CREATED).then(response => {
                file.saveToFile(__dirname + '/data/articlesPost1.json', response.text);
                const res = JSON.parse(response.text);
            })
    });

    it("should get all articles", () => {
        return req.get("/api/articles")
            .expect(HttpStatus.OK)
            .then(response => {
                file.saveToFile(__dirname + '/data/articlesGetAll1.json', response.text);
                expect(response.text).toBeTruthy();
                const res = JSON.parse(response.text);
                expect(res.length).toBe(FIRST_SET_LENGTH);
                article = JSON.parse(response.text)[0];
            })
    });

    it("should delete one article", () => {
        article.deleted = true;
        return req.put("/api/articles")
            .set("Accept", "application/json")
            .send(article)
            .expect(HttpStatus.OK).then(response => {
                file.saveToFile(__dirname + '/data/articlesDelete1.json', response.text);
                const res = JSON.parse(response.text);
                expect(res.n).toBe(1);
                expect(res.nModified).toBe(1);
                expect(res.ok).toBe(1);
            })
    });


    it("should get all articles after one deleted", () => {
        return req.get("/api/articles")
            .expect(HttpStatus.OK)
            .then(response => {
                file.saveToFile(__dirname + '/data/articlesGetAll2.json', response.text);
                expect(response.text).toBeTruthy();
                const res = JSON.parse(response.text);
                expect(res.length).toBeGreaterThan(0);
                expect(FIRST_SET_LENGTH - 1).toBe(res.length);
            })
    });

    it("load second data set + include one deleted register ", () => {
        return req.post("/api/articles/many?step=2")
            .set("Accept", "application/json")
            .expect(HttpStatus.CREATED).then(response => {
                file.saveToFile(__dirname + '/data/articlesPost2.json', response.text);
                const res = JSON.parse(response.text);
            })
    });

    it("should get all articles Step 2 - Borrados ", () => {
        return req.get("/api/articles")
            .expect(HttpStatus.OK)
            .then(response => {
                file.saveToFile(__dirname + '/data/articlesGetAll2.json', response.text);
                expect(response.text).toBeTruthy();
                const res = JSON.parse(response.text);
                expect(res.length).toBeGreaterThan(0);
                expect(res.length).toBe((FIRST_SET_LENGTH - 1) + (SECOND_SET_LENGTH - 1));
            })
    });

    it("load third data set + include 3 updated registers + 1 exists", () => {
        return req.post("/api/articles/many?step=3")
            .set("Accept", "application/json")
            .expect(HttpStatus.CREATED).then(response => {
                file.saveToFile(__dirname + '/data/articlesPost3.json', response.text);
                const res = JSON.parse(response.text);
            })
    });

    it("should get all articles Step 2 - Borrados ", () => {
        return req.get("/api/articles")
            .expect(HttpStatus.OK)
            .then(response => {
                file.saveToFile(__dirname + '/data/articlesGetAll3.json', response.text);
                expect(response.text).toBeTruthy();
                const res = JSON.parse(response.text);
                expect(res.length).toBeGreaterThan(0);
                expect(FIRST_SET_LENGTH - 1 + SECOND_SET_LENGTH - 1 + THIRD_SET_LENGTH - 1).toBe(res.length);
            })
    });


});