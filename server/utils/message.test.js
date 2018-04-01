var expect = require('chai').expect;
var {generateMessage} = require('./message');

describe('generate message', () => {
  it('should generate correct message object',() => {
    var from = "from";
    var text = "test";
    var message = generateMessage(from, text);
    expect(message.createdAt).to.be.a('number');
    expect(message).to.include({from,text});
  });
});