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

    it("should delete article", () => {
        return req.delete("/api/articles/all")
            .set("Accept", "application/json")
            .expect(HttpStatus.OK).then(response => {
                file.saveToFile(__dirname + '/data/deleteAllById.json', response.text);
            })
    });



    it("should init articles", () => {
        return req.post("/api/articles/many")
            .set("Accept", "application/json")
            .expect(HttpStatus.CREATED).then(response => {
                file.saveToFile(__dirname + '/data/articlesCreateAll.json', response.text);
                const res = JSON.parse(response.text);
            })
    });

    it("should get all articles Init", () => {
        return req.get("/api/articles")
            .expect(HttpStatus.OK)
            .then(response => {
                file.saveToFile(__dirname + '/data/articlesInitDelete.json', response.text);
                expect(response.text).toBeTruthy();
                const res = JSON.parse(response.text);
                expect(res.length).toBeGreaterThan(0);
                article = JSON.parse(response.text)[0];
                articleTotalInit = res.length;
            })
    });

    it("should Update a note", () => {
        article.deleted = true;
        return req.put("/api/articles")
            .set("Accept", "application/json")
            .send(article)
            .expect(HttpStatus.OK).then(response => {
                file.saveToFile(__dirname + '/data/articlesUpdateDelete.json', response.text);
                const res = JSON.parse(response.text);
                expect(res.n).toBe(1);
                expect(res.nModified).toBe(1);
                expect(res.ok).toBe(1);
            })
    });

    it("should get all articles End", () => {
        return req.get("/api/articles")
            .expect(HttpStatus.OK)
            .then(response => {
                file.saveToFile(__dirname + '/data/articlesEndDelete.json', response.text);
                expect(response.text).toBeTruthy();
                const res = JSON.parse(response.text);
                expect(res.length).toBeGreaterThan(0);
                expect(articleTotalInit - 1).toBe(res.length);
            })
    });
});