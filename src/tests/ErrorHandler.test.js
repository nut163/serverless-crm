```javascript
import { logError } from '../utils/ErrorHandler';
import { logger } from '../utils/Logger';

describe('ErrorHandler', () => {
  it('should log error messages correctly', () => {
    const consoleSpy = jest.spyOn(console, 'error');
    const errorMessage = 'Test error message';
    logError(errorMessage);
    expect(consoleSpy).toHaveBeenCalledWith(errorMessage);
    consoleSpy.mockRestore();
  });

  it('should log error messages to the logger', () => {
    const loggerSpy = jest.spyOn(logger, 'error');
    const errorMessage = 'Test error message';
    logError(errorMessage);
    expect(loggerSpy).toHaveBeenCalledWith(errorMessage);
    loggerSpy.mockRestore();
  });
});
```