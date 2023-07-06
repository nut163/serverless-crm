import { trackNotes } from '../components/NotesTracker';
import { db } from '../utils/Database';
import { NoteSchema } from '../components/NotesTracker';

describe('NotesTracker', () => {
  beforeEach(() => {
    db.clear();
  });

  it('should track notes correctly', () => {
    const note = {
      title: 'Test Note',
      content: 'This is a test note',
      author: 'Test Author',
      date: new Date(),
    };

    trackNotes(note);

    const storedNote = db.get('notes')[0];
    expect(storedNote).toMatchObject(note);
  });

  it('should validate note schema', () => {
    const note = {
      title: 'Test Note',
      content: 'This is a test note',
      author: 'Test Author',
      date: new Date(),
    };

    expect(note).toMatchSchema(NoteSchema);
  });

  it('should throw error for invalid note', () => {
    const note = {
      title: 'Test Note',
      content: 'This is a test note',
      author: 'Test Author',
    };

    expect(() => trackNotes(note)).toThrow();
  });
});