
// import express from 'express';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import 'mocha';
import App from '../../src/app';

chai.use(chaiHttp);
const request = chai.request(App);
describe('/api/family', () => {
  after((done) => request.close(done) );

  it('/POST',(done) => {
    const mockRequest = {
        "avatar": "https://i.pravatar.cc/150?img=10",
        "nickname": "Nick_teste",
        "email": "teste@ar.com.ar",
        "password": "123456789"
      }
        request.post('/api/family').send(mockRequest).then((response) => {
          expect(response).to.have.status(200);
        })
        done();
  });

  it('/GET',(done) => {
        request.get('/api/family').end((err,response) => {
          expect(err).not.exist;
          expect(response.status).to.be.an('Array');
        });
        done();
  });

});