```javascript
import { expect } from 'chai';
import { db } from '../utils/Database';

describe('Database', () => {
  it('should be able to connect to the database', async () => {
    const isConnected = await db.connect();
    expect(isConnected).to.be.true;
  });

  it('should be able to insert data', async () => {
    const data = { name: 'John Doe', email: 'john.doe@example.com' };
    const insertedData = await db.insert('people', data);
    expect(insertedData).to.deep.equal(data);
  });

  it('should be able to fetch data', async () => {
    const data = await db.fetch('people', 'john.doe@example.com');
    expect(data).to.deep.equal({ name: 'John Doe', email: 'john.doe@example.com' });
  });

  it('should be able to update data', async () => {
    const updatedData = { name: 'John Doe', email: 'john.doe@example.com', phone: '1234567890' };
    const result = await db.update('people', 'john.doe@example.com', updatedData);
    expect(result).to.deep.equal(updatedData);
  });

  it('should be able to delete data', async () => {
    const result = await db.delete('people', 'john.doe@example.com');
    expect(result).to.be.true;
  });
});
```