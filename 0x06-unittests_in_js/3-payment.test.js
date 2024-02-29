const sendPaymentRequestToApi = require('./3-payment')
const Utils = require('./utils')
const sinon = require('sinon')
const chai = require('chai');
const expect = chai.expect;

describe('Utils function', function () {
  it('usage of the Utils function', function () {
    const sinonSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(sinonSpy.calledOnce).to.be.true;
    expect(sinonSpy.calledWith('SUM', 100, 20)).to.be.true;
    sinonSpy.restore();
  });
});
