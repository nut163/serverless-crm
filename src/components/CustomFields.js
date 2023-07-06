import { db } from '../utils/Database.js';
import { logger } from '../utils/Logger.js';
import { validation } from '../utils/Validation.js';
import { constants } from '../utils/Constants.js';

class CustomFields {
  constructor() {
    this.customFieldsList = document.getElementById('custom-fields-list');
  }

  manageCustomFields() {
    db.collection('customFields').onSnapshot(snapshot => {
      let changes = snapshot.docChanges();
      changes.forEach(change => {
        if (change.type === 'added') {
          this.renderCustomField(change.doc);
        } else if (change.type === 'removed') {
          let li = this.customFieldsList.querySelector('[data-id=' + change.doc.id + ']');
          this.customFieldsList.removeChild(li);
        }
      });
    });
  }

  renderCustomField(doc) {
    let li = document.createElement('li');
    let name = document.createElement('span');
    let value = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    value.textContent = doc.data().value;
    cross.textContent = 'x';

    li.appendChild(name);
    li.appendChild(value);
    li.appendChild(cross);

    this.customFieldsList.appendChild(li);

    // Deleting data
    cross.addEventListener('click', (e) => {
      e.stopPropagation();
      let id = e.target.parentElement.getAttribute('data-id');
      db.collection('customFields').doc(id).delete();
    });
  }

  addCustomField(name, value) {
    if (validation.validateData(name) && validation.validateData(value)) {
      db.collection('customFields').add({
        name: name,
        value: value
      }).then(() => {
        logger.logInfo(constants.LOG_MESSAGE, 'Custom field added successfully');
      }).catch((err) => {
        logger.logError(constants.ERROR_MESSAGE, err);
      });
    } else {
      logger.logError(constants.ERROR_MESSAGE, 'Invalid data');
    }
  }
}

export const customFields = new CustomFields();