```javascript
import { db } from '../utils/Database.js';
import { logger } from '../utils/Logger.js';
import { validation } from '../utils/Validation.js';

const PersonSchema = {
  name: String,
  email: String,
  phone: String,
  customFields: Array
};

const peopleListElement = document.getElementById('people-list');

function trackPeople(person) {
  if (!validation.validateData(person, PersonSchema)) {
    logger.logError('Invalid person data');
    return;
  }

  db.insert('people', person)
    .then(() => {
      logger.logInfo('Person data inserted successfully');
      updatePeopleList();
    })
    .catch((error) => {
      logger.logError('Error inserting person data: ' + error);
    });
}

function updatePeopleList() {
  db.getAll('people')
    .then((people) => {
      peopleListElement.innerHTML = '';
      people.forEach((person) => {
        const personElement = document.createElement('li');
        personElement.textContent = `${person.name} - ${person.email}`;
        peopleListElement.appendChild(personElement);
      });
    })
    .catch((error) => {
      logger.logError('Error fetching people data: ' + error);
    });
}

export { trackPeople, PersonSchema };
```