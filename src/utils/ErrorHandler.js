```javascript
import { logger } from './Logger.js';

const ERROR_MESSAGE = 'An error occurred';

class ErrorHandler {
  static logError(error) {
    logger.log(ERROR_MESSAGE, error);
  }
}

export default ErrorHandler;
```