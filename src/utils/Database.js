```javascript
import { openDB } from 'idb';

const DB_NAME = 'crmDB';
const PEOPLE_STORE = 'people';
const NOTES_STORE = 'notes';
const CUSTOM_FIELDS_STORE = 'customFields';

const dbPromise = openDB(DB_NAME, 1, {
  upgrade(db) {
    db.createObjectStore(PEOPLE_STORE, { keyPath: 'id', autoIncrement: true });
    db.createObjectStore(NOTES_STORE, { keyPath: 'id', autoIncrement: true });
    db.createObjectStore(CUSTOM_FIELDS_STORE, { keyPath: 'id', autoIncrement: true });
  },
});

async function getStore(storeName, mode) {
  const db = await dbPromise;
  return db.transaction(storeName, mode).objectStore(storeName);
}

export const db = {
  async get(storeName, id) {
    return (await getStore(storeName)).get(id);
  },

  async getAll(storeName) {
    return (await getStore(storeName)).getAll();
  },

  async set(storeName, val) {
    return (await getStore(storeName, 'readwrite')).put(val);
  },

  async delete(storeName, id) {
    return (await getStore(storeName, 'readwrite')).delete(id);
  },

  async clear(storeName) {
    return (await getStore(storeName, 'readwrite')).clear();
  },

  async keys(storeName) {
    return (await getStore(storeName)).getAllKeys();
  },
};
```