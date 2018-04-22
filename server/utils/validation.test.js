const expect = require('chai').expect;
const { isRealString } = require('../utils/validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    const result = isRealString({});
    expect(result).to.be.false;
  });

  it('should reject string with only spaces', () => {
    const result = isRealString('  ');
    expect(result).to.be.false;
  });

  it('should allow string with non-space characters', () => {
    const result = isRealString('real string');
    expect(result).to.be.true;
  });
});
