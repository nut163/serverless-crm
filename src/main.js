import { db } from './utils/Database.js';
import { logger } from './utils/Logger.js';
import { config } from './utils/Config.js';
import { constants } from './utils/Constants.js';
import { validation } from './utils/Validation.js';
import { security } from './utils/Security.js';
import { helpers } from './utils/Helpers.js';

import { trackPeople } from './components/PeopleTracker.js';
import { trackNotes } from './components/NotesTracker.js';
import { manageCustomFields } from './components/CustomFields.js';
import { filterGroupData } from './components/FilterGroup.js';
import { integrateCalendar } from './components/GoogleCalendarIntegration.js';
import { authenticate } from './components/GoogleOAuth.js';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Initialize database
    await db.init();

    // Initialize Google OAuth
    await authenticate();

    // Start tracking people, notes, and custom fields
    trackPeople();
    trackNotes();
    manageCustomFields();

    // Integrate Google Calendar
    integrateCalendar();

    // Apply filters and group data
    filterGroupData();

  } catch (error) {
    logger.logError(error);
  }
});