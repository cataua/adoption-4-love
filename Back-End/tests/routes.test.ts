import axios from 'axios';
import { expect } from 'chai';
import 'mocha';

const ENDPOINT = 'http://localhost:5001/api'

describe('Routes test', () => {
    it ('get(/api) should return route not available', async () => {
        const result = await axios.get(ENDPOINT);
        expect(result.data).to.be.equal('Rota inexistente');
    })
    it ('get(/api/family) shoud return family list', async () => {
        const result = await axios.get(`${ENDPOINT}/family`);
        expect(result.status).to.be.equal(200);
        expect(result.data).to.be.an('array');
    })
})
