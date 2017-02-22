const awwwards = require('./');
const assert = require('assert');

describe('awwwards', () => {
  let sites;

  before(done => {
    awwwards(result => {
      sites = result;
      done();
    });
  })

  it('get sites', () => {
    assert.equal(sites.length, 24);
  });

  it('get correct item', () => {
    const i = 0;
    assert.equal(sites[i].index, i);
    assert.equal(typeof sites[i].title, 'string');
    assert.equal(typeof sites[i].img, 'string');
  });
});
