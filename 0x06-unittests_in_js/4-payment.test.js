const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi function', function () {
  const spyUtil = sinon.spy(Utils, 'calculateNumber');

  it('Utils function', function () {
    sendPaymentRequestToApi(100, 20);
    expect(spyUtil.calledOnce).to.be.true;
    expect(spyUtil.calledWith('SUM', 100, 20)).to.be.true;
    spyUtil.restore();
  });
});
