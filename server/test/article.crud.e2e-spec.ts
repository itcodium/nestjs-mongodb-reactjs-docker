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
    let article = null;
    it("should create a note", () => {
        return req.post("/api/articles")
            .set("Accept", "application/json")
            .send({ hit: mock.hits[0] })
            .expect(HttpStatus.CREATED).then(response => {
                file.saveToFile(__dirname + '/data/articlesCreate.json', response.text);
                const res = JSON.parse(response.text);
                expect(res._id).toBeTruthy();
                id = res._id;

            })
    });
    it("should get articles by id", () => {
        return req.get("/api/articles/" + id)
            .expect(HttpStatus.OK)
            .then(response => {
                file.saveToFile(__dirname + '/data/articlesById.json', response.text);
                expect(response.text).toBeTruthy();
                article = JSON.parse(response.text);
                expect(article._id).toBe(id);
            })
    });

    it("should get articles by id [not exists]", () => {
        return req.get("/api/articles/5fd102272a37a2002cd8c83c")
            .expect(HttpStatus.OK)
            .then(response => {
                file.saveToFile(__dirname + '/data/articlesByIdNotExists.json', response.text);
                expect(JSON.parse(response.text)).toStrictEqual({});
            })
    });

    it("should Update a note", () => {
        article.deleted = true;
        return req.put("/api/articles")
            .set("Accept", "application/json")
            .send(article)
            .expect(HttpStatus.OK).then(response => {
                file.saveToFile(__dirname + '/data/articlesUpdate.json', response.text);
                const res = JSON.parse(response.text);
                expect(res.n).toBe(1);
                expect(res.nModified).toBe(1);
                expect(res.ok).toBe(1);
            })
    });

    it("should delete article", () => {
        return req.delete("/api/articles/" + id)
            .set("Accept", "application/json")
            .expect(HttpStatus.OK).then(response => {
                file.saveToFile(__dirname + '/data/deleteById.json', response.text);
            })
    });

    it("should get all articles", () => {
        return req.get("/api/articles")
            .expect(HttpStatus.OK)
            .then(response => {
                file.saveToFile(__dirname + '/data/articles.json', response.text);
                expect(response.text).toBeTruthy();
                const res = JSON.parse(response.text);
                expect(res.length).toBeGreaterThan(0);
            })
    });
});