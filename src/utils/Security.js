```javascript
import crypto from 'crypto';
import { config } from './Config.js';

const algorithm = 'aes-256-ctr';

const encryptData = (text) => {
  const cipher = crypto.createCipher(algorithm, config.secretKey);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};

const decryptData = (encryptedText) => {
  const decipher = crypto.createDecipher(algorithm, config.secretKey);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};

export const security = {
  encryptData,
  decryptData,
};
```