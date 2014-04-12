var server = require('../server');
var request = require('supertest');
var assert = require('assert');

describe('Server', function() {
    describe('Server', function() {
        var url = 'http://localhost:3000';
        it('return unsupported', function(done) {
            request(url)
            .get('/')
            .set('Accept', 'application/json')
            .expect(501)
            .end(function(err, res) {
                if (err) return done(err);
                assert.equal(res.text, 'API is not yet implemented.\n', 'Unexpected error message');
                done();
            });
        });
    });
});
