```javascript
import { GoogleAuth } from 'google-auth-library';
import { config } from '../utils/Config.js';
import { logger } from '../utils/Logger.js';

const oauthButton = document.getElementById('oauth-button');

const authenticate = async () => {
  try {
    const auth = new GoogleAuth({
      keyFilename: config.GOOGLE_AUTH_KEYFILE,
      scopes: ['https://www.googleapis.com/auth/calendar']
    });

    const authClient = await auth.getClient();
    const project = await auth.getProjectId();

    oauthButton.addEventListener('click', () => {
      authClient.authorize((err, tokens) => {
        if (err) {
          logger.logError('Google OAuth Error', err);
          return;
        }
        authClient.setCredentials(tokens);
        logger.logInfo('Google OAuth Success', `Authenticated with project: ${project}`);
      });
    });
  } catch (error) {
    logger.logError('Google OAuth Error', error);
  }
};

export { authenticate };
```