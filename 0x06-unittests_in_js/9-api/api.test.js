const request = require('request');
const expect = require('chai').expect;

describe('Index Page', () => {
  const url = 'http://localhost:7865';

  describe('Correct status code', () => {
    it('should return 200', (done) => {
      request(url, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe('Correct result', () => {
    it('should return Welcome to the payment system', (done) => {
      request(url, (err, res, body) => {
        expect(res.body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
});

describe('Cart Page', () => {
  const url = 'http://localhost:7865/cart';

  describe('Correct status code when :id is a number', () => {
    it('should return 200', (done) => {
      request(`${url}/3`, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe('Correct status code when :id is NOT a number', () => {
    it('should return 404', (done) => {
      request(`${url}/hello`, (err, res, body) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('Correct result for a valid :id', () => {
    it('should return "Payment methods for cart 12"', (done) => {
      request(`${url}/12`, (err, res, body) => {
        expect(res.body).to.equal('Payment methods for cart 12');
        done();
      });
    });
  });
});
