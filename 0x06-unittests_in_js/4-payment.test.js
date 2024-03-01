const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('Stubs', function () {
  it('sendPaymentRequestToApi', function () {
    const stubObj = sinon.stub(Utils, 'calculateNumber');
    stubObj.returns(10);
    const spyObj = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(stubObj.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spyObj.calledOnceWithExactly('The total is: 10')).to.be.true;
    stubObj.restore();
    spyObj.restore();
  });
});
