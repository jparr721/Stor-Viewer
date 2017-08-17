const expect = require('expect');
const request = require('supertest');
const { ObjectID } = require('mongodb');

const { app } = require('./../server/server');
const { User } = require('./../server/models/user');

describe('GET /user/:id', () => {
  it('should return 404 when user not found', (done) => {
    request(app)
      .get(`/user/827485483920ee3`)
      .expect(404)
      .end(done);
  });
});
