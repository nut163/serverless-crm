```javascript
class Logger {
  constructor() {
    this.logs = [];
  }

  logInfo(message) {
    this.logs.push({
      timestamp: new Date(),
      level: 'INFO',
      message: message
    });
    this.printLatestLog();
  }

  logError(message) {
    this.logs.push({
      timestamp: new Date(),
      level: 'ERROR',
      message: message
    });
    this.printLatestLog();
  }

  printLatestLog() {
    const latestLog = this.logs[this.logs.length - 1];
    console.log(`[${latestLog.timestamp.toISOString()}] [${latestLog.level}] ${latestLog.message}`);
  }
}

const logger = new Logger();

export default logger;
```