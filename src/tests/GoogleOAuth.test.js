import { authenticate } from '../components/GoogleOAuth';
import { logger } from '../utils/Logger';

describe('GoogleOAuth', () => {
  beforeEach(() => {
    logger.clear();
  });

  test('authenticate function should log success message on successful authentication', () => {
    authenticate();
    expect(logger.logs).toContain('Google OAuth authentication successful');
  });

  test('authenticate function should log error message on failed authentication', () => {
    authenticate();
    expect(logger.errors).toContain('Google OAuth authentication failed');
  });
});