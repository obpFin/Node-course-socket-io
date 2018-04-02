var expect = require('chai').expect;
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object',() => {
    var from = "from";
    var text = "test";
    var message = generateMessage(from, text);
    expect(message.createdAt).to.be.a('number');
    expect(message).to.include({from,text});
  });
});

describe('genereteLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'from';
    var latitude = '123';
    var longitude = '332';
    var url = 'https://www.google.com/maps?q=123,332'
    var locationMessage = generateLocationMessage(from, latitude, longitude);
    expect(locationMessage.createdAt).to.be.a('number');
    expect(locationMessage).to.include({from, url});
  });
});