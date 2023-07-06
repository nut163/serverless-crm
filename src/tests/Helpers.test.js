import { expect } from 'chai';
import * as helpers from '../utils/Helpers';

describe('Helpers', () => {
  describe('helperFunctions', () => {
    it('should be an object', () => {
      expect(helpers.helperFunctions).to.be.an('object');
    });

    it('should contain necessary helper functions', () => {
      expect(helpers.helperFunctions).to.have.property('formatDate');
      expect(helpers.helperFunctions).to.have.property('sortData');
      expect(helpers.helperFunctions).to.have.property('filterData');
    });

    describe('formatDate', () => {
      it('should return a formatted date string', () => {
        const date = new Date(2022, 0, 1);
        expect(helpers.helperFunctions.formatDate(date)).to.equal('01-01-2022');
      });
    });

    describe('sortData', () => {
      it('should return sorted data', () => {
        const data = [{ id: 2 }, { id: 1 }];
        const sortedData = [{ id: 1 }, { id: 2 }];
        expect(helpers.helperFunctions.sortData(data, 'id')).to.deep.equal(sortedData);
      });
    });

    describe('filterData', () => {
      it('should return filtered data', () => {
        const data = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
        const filteredData = [{ id: 1, name: 'John' }];
        expect(helpers.helperFunctions.filterData(data, 'name', 'John')).to.deep.equal(filteredData);
      });
    });
  });
});