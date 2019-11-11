const tape = require('tape');
const supertest = require('supertest');
const app = require('../../server/app');

tape('get placereviews without sending queryString', t => {
  supertest(app)
    .get('/api/v1/placereviews')
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        t.equals(
          res.body.message,
          'place id and type required',
          'type and id required'
        );
        t.end();
      }
    });
});

tape('get placereviews with valid queryString', t => {
  supertest(app)
    .get('/api/v1/placereviews?id=1&type=stay')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        const { placeData } = res.body;
        t.equals(placeData.length, 2, 'place should exists');
        t.end();
      }
    });
});
