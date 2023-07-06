import { db } from '../utils/Database.js';
import { logger } from '../utils/Logger.js';
import { constants } from '../utils/Constants.js';
import { validation } from '../utils/Validation.js';
import { helpers } from '../utils/Helpers.js';

class FilterGroup {
  constructor() {
    this.filterGroupElement = document.getElementById('filter-group');
  }

  filterGroupData(customFields, filterCriteria) {
    try {
      validation.validateData(customFields);
      validation.validateData(filterCriteria);

      const filteredData = db.filter(customFields, filterCriteria);
      this.render(filteredData);
    } catch (error) {
      logger.logError(constants.ERROR_MESSAGE, error);
    }
  }

  render(data) {
    this.filterGroupElement.innerHTML = '';
    data.forEach(item => {
      const itemElement = helpers.createDOMElement('div', item);
      this.filterGroupElement.appendChild(itemElement);
    });
  }
}

export const filterGroup = new FilterGroup();