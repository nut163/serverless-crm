import { filterGroupData } from '../components/FilterGroup';
import { db } from '../utils/Database';
import { logger } from '../utils/Logger';

describe('FilterGroup', () => {
  beforeEach(() => {
    // Mock database and logger
    jest.spyOn(db, 'get').mockImplementation(() => Promise.resolve([]));
    jest.spyOn(logger, 'logInfo').mockImplementation(() => {});
  });

  afterEach(() => {
    // Clear all mocks
    jest.clearAllMocks();
  });

  it('should filter data based on custom fields', async () => {
    const customFields = [
      { name: 'Location', value: 'New York' },
      { name: 'Job Title', value: 'Developer' },
    ];

    await filterGroupData(customFields);

    expect(db.get).toHaveBeenCalledWith('people', {
      'customFields.Location': 'New York',
      'customFields.Job Title': 'Developer',
    });
    expect(logger.logInfo).toHaveBeenCalledWith('Filtered data based on custom fields');
  });

  it('should handle errors when filtering data', async () => {
    const error = new Error('Database error');
    db.get.mockImplementationOnce(() => Promise.reject(error));

    await expect(filterGroupData([])).rejects.toThrow(error);
    expect(logger.logInfo).toHaveBeenCalledWith('Error occurred while filtering data');
  });
});