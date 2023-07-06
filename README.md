# Serverless CRM

This is a serverless CRM that can be hosted on Cloudflare pages. The CRM is capable of tracking people, notes, and custom fields. Custom fields can be used to filter and group data in a variety of ways. The CRM also integrates with Google Calendar using Google OAuth.

## Features

- People Tracking
- Notes Tracking
- Custom Fields
- Data Filtering and Grouping
- Google Calendar Integration
- Google OAuth

## Setup

1. Clone the repository
2. Install the dependencies using `npm install`
3. Create a `.env` file in the root directory and add your Google OAuth credentials
4. Run `npm start` to start the application

## File Structure

- `src/` - Contains the source code of the application
  - `main.js` - Entry point of the application
  - `components/` - Contains the components of the application
    - `PeopleTracker.js` - Tracks people
    - `NotesTracker.js` - Tracks notes
    - `CustomFields.js` - Manages custom fields
    - `FilterGroup.js` - Filters and groups data
    - `GoogleCalendarIntegration.js` - Integrates with Google Calendar
    - `GoogleOAuth.js` - Handles Google OAuth
  - `utils/` - Contains utility functions and classes
    - `Database.js` - Handles database operations
    - `Helpers.js` - Contains helper functions
    - `Constants.js` - Contains constants
    - `Config.js` - Handles configuration
    - `ErrorHandler.js` - Handles errors
    - `Logger.js` - Handles logging
    - `Security.js` - Handles encryption and decryption
    - `Validation.js` - Handles data validation
  - `tests/` - Contains tests for the components and utilities
- `package.json` - Contains npm dependencies and scripts
- `webpack.config.js` - Contains webpack configuration
- `.babelrc` - Contains Babel configuration
- `.gitignore` - Specifies files to ignore in git
- `.env` - Contains environment variables (not included in the repository)

## Tests

Run `npm test` to run the tests.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)