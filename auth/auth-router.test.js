const request = require('supertest');

const db = require('../database/dbConfig.js');
const server = require('../api/server.js');

describe('auth router', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('POST /api/auth/register', () => {
        it('returns status 201 after insert', async () => {
            return request(server)
                .post('/api/auth/register')
                .send({username: 'Jane', password: 'grapefruit'})
        });
        it('inserts new user into db', async () => {
            const [id] = await db('users').insert({username: 'John', password: 'banana'});
            let newest = await db('users')
                .where({id})
                .first();
            expect(newest.username).toBe('John')
        });
    });

    describe('POST api/auth/login',)
})