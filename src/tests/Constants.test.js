const assert = require('assert');
const constants = require('../utils/Constants');

describe('Constants', function() {
  describe('#DATABASE_URL', function() {
    it('should return the correct database URL', function() {
      assert.equal(constants.DATABASE_URL, process.env.DATABASE_URL);
    });
  });

  describe('#GOOGLE_OAUTH_CLIENT_ID', function() {
    it('should return the correct Google OAuth client ID', function() {
      assert.equal(constants.GOOGLE_OAUTH_CLIENT_ID, process.env.GOOGLE_OAUTH_CLIENT_ID);
    });
  });

  describe('#GOOGLE_OAUTH_SECRET', function() {
    it('should return the correct Google OAuth secret', function() {
      assert.equal(constants.GOOGLE_OAUTH_SECRET, process.env.GOOGLE_OAUTH_SECRET);
    });
  });

  describe('#CLOUDFLARE_PAGES_URL', function() {
    it('should return the correct Cloudflare Pages URL', function() {
      assert.equal(constants.CLOUDFLARE_PAGES_URL, process.env.CLOUDFLARE_PAGES_URL);
    });
  });
});