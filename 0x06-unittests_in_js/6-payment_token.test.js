const { expect } = require('chai');

const getPaymentTokenFromApi = require('./6-payment_token');

describe('getPaymentTokenFromApi', function () {
  it('checks output of getPaymentTokenFromApi', function (done) {
    getPaymentTokenFromApi(true)
      .then((res) => {
        expect(res).to.include({ data: 'Successful response from the API' });
        done();
      })
      .catch((err) => done(err));
  });
});
