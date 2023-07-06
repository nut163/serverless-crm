import { db } from '../utils/Database.js';
import { logger } from '../utils/Logger.js';
import { validation } from '../utils/Validation.js';

const notesList = document.getElementById('notes-list');

const NoteSchema = {
  id: String,
  personId: String,
  content: String,
  date: Date,
};

function trackNotes() {
  db.on('notes', (notes) => {
    notesList.innerHTML = '';
    notes.forEach((note) => {
      if (validation.validateData(note, NoteSchema)) {
        const noteElement = document.createElement('li');
        noteElement.textContent = `${note.content} (Date: ${note.date})`;
        notesList.appendChild(noteElement);
      } else {
        logger.logError('Invalid note data');
      }
    });
  });
}

export { trackNotes, NoteSchema };