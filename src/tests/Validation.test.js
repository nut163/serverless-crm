```javascript
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { validation } from '../utils/Validation';

describe('Validation', () => {
  describe('#validateData()', () => {
    it('should return true when data is valid', () => {
      const validData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
        customFields: {
          field1: 'value1',
          field2: 'value2',
        },
      };

      expect(validation.validateData(validData)).to.be.true;
    });

    it('should return false when data is invalid', () => {
      const invalidData = {
        name: '',
        email: 'john.doe',
        phone: '1234567890abc',
        customFields: {
          field1: 'value1',
          field2: 'value2',
        },
      };

      expect(validation.validateData(invalidData)).to.be.false;
    });
  });
});
```