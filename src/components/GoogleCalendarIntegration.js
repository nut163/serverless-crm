```javascript
import { gapi } from 'gapi-script';
import { config } from '../utils/Config.js';
import { logger } from '../utils/Logger.js';
import { db } from '../utils/Database.js';

const CALENDAR_ID = 'primary';

const integrateCalendar = async () => {
  try {
    const events = await listUpcomingEvents();
    events.forEach(event => {
      const person = db.get('people').find({ email: event.creator.email }).value();
      if (person) {
        person.events.push(event);
        db.get('people').find({ email: event.creator.email }).assign(person).write();
      }
    });
    logger.logInfo('Calendar integration completed successfully');
  } catch (error) {
    logger.logError('Error during calendar integration', error);
  }
};

const listUpcomingEvents = () => {
  return new Promise((resolve, reject) => {
    gapi.client.load('calendar', 'v3', () => {
      gapi.client.calendar.events.list({
        calendarId: CALENDAR_ID,
        timeMin: (new Date()).toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime'
      }).then(response => {
        const events = response.result.items;
        resolve(events);
      }).catch(error => {
        reject(error);
      });
    });
  });
};

export { integrateCalendar };
```