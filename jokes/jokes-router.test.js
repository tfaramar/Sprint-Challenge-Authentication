const request = require('supertest');

const db = require('../database/dbConfig.js');
const server = require('../api/server.js');

describe('jokes router', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('GET /api/jokes without auth', () => {
        it('returns status 400', () => {
            return request(server).get('/api/jokes')
            .then(res => {
                expect(res.status).toBe(400)
            })
        });
    });

    describe('GET /api/jokes with authorization', () => {
        it('returns status 200', async () => {
            await request(server)
                .post('/api/auth/register')
                .send({username: 'John', password: 'banana'});
            await request(server)
                .post('/api/auth/login')
                .send({username: 'John', password: 'banana'})
            .then(res => {
                const {token} = JSON.parse(res.text)
                console.log(token)
                return token;
            })
            .then(async token => {
                const response = await request(server)
                    .get('/api/jokes')
                    .set('authorization', token)
                return response;
            })
            .then(res => {
                expect(res.status).toBe(200)
            })
        })

    })
})