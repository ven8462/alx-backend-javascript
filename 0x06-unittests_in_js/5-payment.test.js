const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let sinonSpy;

  beforeEach(function () {
    if (!sinonSpy) {
      sinonSpy = sinon.spy(console);
    }
  });

  afterEach(function () {
    sinonSpy.log.resetHistory();
  });

  it('logs "The total is: 120" to the console', function () {
    sendPaymentRequestToApi(100, 20);
    expect(sinonSpy.log.calledWith('The total is: 120')).to.be.true;
    expect(sinonSpy.log.calledOnce).to.be.true;
  });

  it('logs "The total is: 20" to the console', function () {
    sendPaymentRequestToApi(10, 10);
    expect(sinonSpy.log.calledWith('The total is: 20')).to.be.true;
    expect(sinonSpy.log.calledOnce).to.be.true;
  });
});
