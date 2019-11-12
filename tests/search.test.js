const test = require('tape');
const supertest = require('supertest');
const app = require('../server/app');

test('should ', t => {
  t.plan(2);
  supertest(app)
    .get('/api/v1/search')
    .expect(200)
    .expect('json/application')
    .end((err, res) => {
      const [first] = res.body;
      const keys = Object.keys(first);
      const expectedKeys = [
        'id',
        'city',
        'name',
        'country',
        'url',
        'type',
        'image1',
        'image2',
        'active',
      ];
      t.deepEquals(expectedKeys.sort(), keys.sort());
      t.ok(keys.indexOf('active') !== -1);
    });
});
