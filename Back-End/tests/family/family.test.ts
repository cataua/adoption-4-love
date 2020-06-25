import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";
import App from "../../src/server";

chai.use(chaiHttp);
describe("/api/family", () => {
  it("/POST family", (done) => {
    const body = {
      avatar: "https://i.pravatar.cc/150?img=10",
      nickname: "soares",
      email: "testesoares@ar.com.ar",
      password: "12345678",
    };
    chai
      .request(App)
      .post("/api/family")
      .send(body)
      .end((err, response) => {
        if (err) done(err);
        chai.expect(response).have.status(201);
        done();
      });
  });

  it("/PATCH family", (done) => {
    const body = {
      nickname: "nickname_test",
    };
    chai
      .request(App)
      .put("/api/family/1")
      .send(body)
      .end((err, response) => {
        if (err) done(err);
        chai.expect(response).have.status(200);
        chai.expect(response.body).to.be.an("Object");
        chai.expect(response.body.message).to.be.equal("Updated");
        done();
      });
  });

  it("/DELETE familly", (done) => {
    chai
      .request(App)
      .delete("/api/family/2")
      .end((err, response) => {
        if (err) done(err);
        chai.expect(response).have.status(200);
        done();
      });
  });

  it("/GET list familly", (done) => {
    chai
      .request(App)
      .get("/api/family")
      .end((err, response) => {
        if (err) done(err);
        chai.expect(response).have.status(200);
        chai.expect(response.body).to.be.an("Array");
        done();
      });
  });

  it("/GET familly", (done) => {
    chai
      .request(App)
      .get("/api/family/1")
      .end((err, response) => {
        if (err) done(err);
        const family = response.body;
        chai.expect(response).have.status(200);
        chai.expect(family).to.be.an("Array");
        chai.expect(family[0].family_id).to.be.equal(1);
        done();
      });
  });
});
