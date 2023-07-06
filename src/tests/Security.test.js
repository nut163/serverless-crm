```javascript
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { encryptData, decryptData } from '../utils/Security.js';

describe('Security', () => {
  const testData = 'Test Data';
  const encryptedData = encryptData(testData);

  describe('encryptData', () => {
    it('should return a string', () => {
      expect(encryptedData).to.be.a('string');
    });

    it('should not return the original data', () => {
      expect(encryptedData).to.not.equal(testData);
    });
  });

  describe('decryptData', () => {
    const decryptedData = decryptData(encryptedData);

    it('should return a string', () => {
      expect(decryptedData).to.be.a('string');
    });

    it('should return the original data', () => {
      expect(decryptedData).to.equal(testData);
    });
  });
});
```