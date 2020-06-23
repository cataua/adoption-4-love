import axios from 'axios';
import { expect } from 'chai';
import 'mocha';

const ENDPOINT = 'http://localhost:3001/api'

describe('Routes test', () => {
    it ('get(/api) should return route not available', async () => {
        try {
          await axios.get(ENDPOINT);
        } catch (error) {
          expect(error.response.status).to.be.equal(404);
        }
    })
    it ('get(/api/family) shoud return family list', async () => {
        const result = await axios.get(`${ENDPOINT}/family`);
        expect(result.status).to.be.equal(200);
        expect(result.data).to.be.an('array');
    })
})
