```javascript
import { logger } from '../utils/Logger';

describe('Logger', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  it('should log info messages', () => {
    const message = 'Test info message';
    logger.logInfo(message);
    expect(console.log).toHaveBeenCalledWith(`INFO: ${message}`);
  });

  it('should log error messages', () => {
    const message = 'Test error message';
    logger.logError(message);
    expect(console.log).toHaveBeenCalledWith(`ERROR: ${message}`);
  });
});
```