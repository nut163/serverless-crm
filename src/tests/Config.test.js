```javascript
import { expect } from 'chai';
import { config } from '../utils/Config';

describe('Config', () => {
  it('should have a valid configuration', () => {
    expect(config).to.be.an('object');
    expect(config).to.have.property('databaseUrl');
    expect(config).to.have.property('googleOAuthClientId');
    expect(config).to.have.property('googleOAuthClientSecret');
    expect(config).to.have.property('googleCalendarAPIKey');
  });

  it('should have a valid databaseUrl', () => {
    expect(config.databaseUrl).to.be.a('string');
    expect(config.databaseUrl).to.include('cloudflare');
  });

  it('should have a valid googleOAuthClientId', () => {
    expect(config.googleOAuthClientId).to.be.a('string');
  });

  it('should have a valid googleOAuthClientSecret', () => {
    expect(config.googleOAuthClientSecret).to.be.a('string');
  });

  it('should have a valid googleCalendarAPIKey', () => {
    expect(config.googleCalendarAPIKey).to.be.a('string');
  });
});
```