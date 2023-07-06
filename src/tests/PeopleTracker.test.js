```javascript
import { trackPeople } from '../components/PeopleTracker';
import { db } from '../utils/Database';
import { PersonSchema } from '../components/PeopleTracker';

describe('PeopleTracker', () => {
  beforeEach(() => {
    // Clear the database before each test
    db.clear();
  });

  test('trackPeople adds a person to the database', () => {
    const person = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
    };

    trackPeople(person);

    const storedPerson = db.get('people').find({ email: person.email }).value();

    expect(storedPerson).toMatchObject(person);
  });

  test('trackPeople validates the person data', () => {
    const invalidPerson = {
      name: 'John Doe',
      email: 'invalid email',
      phone: '123-456-7890',
    };

    expect(() => trackPeople(invalidPerson)).toThrow();
  });

  test('trackPeople does not add a person if the email already exists', () => {
    const person = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
    };

    trackPeople(person);

    const duplicatePerson = {
      name: 'Jane Doe',
      email: 'john.doe@example.com',
      phone: '098-765-4321',
    };

    expect(() => trackPeople(duplicatePerson)).toThrow();
  });
});
```