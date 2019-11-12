const tape = require('tape');
const supertest = require('supertest');

const app = require('../../server/app');

tape('get Keywords route', t => {
  supertest(app)
    .get('/api/v1/keywords')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        const { data } = res.body;
        t.equal(Array.isArray(data), true, 'data should be an array');
        t.equal(
          Object.keys(data[0]).length,
          2,
          'each keyword should have name and image url'
        );
        t.end();
      }
    });
});
