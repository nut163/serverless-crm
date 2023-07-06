```javascript
class Validation {
  static validateData(data, schema) {
    const errors = [];
    for (const key in schema) {
      if (schema.hasOwnProperty(key)) {
        if (!data.hasOwnProperty(key)) {
          errors.push(`Missing property ${key}`);
        } else if (typeof data[key] !== schema[key]) {
          errors.push(`Invalid type for ${key}. Expected ${schema[key]}, got ${typeof data[key]}`);
        }
      }
    }
    return errors;
  }
}

export const validation = new Validation();
```