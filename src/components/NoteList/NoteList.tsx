import { deleteNote } from '../../services/noteService';
import { Note } from '../../types/note';
import css from './NoteList.module.css';

interface NoteListProps {
  notes: Note[];
  onNoteDeleted: () => void;
}

export default function NoteList({ notes, onNoteDeleted }: NoteListProps) {
  const handleDelete = async (id: string) => {
    try {
      await deleteNote(id);
      onNoteDeleted();
    } catch {
      alert('Failed to delete note');
    }
  };

  return (
    <ul className={css.list}>
      {notes.map(note => (
        <li key={note._id} className={css.listItem}>
          <h2 className={css.title}>{note.title}</h2>
          <p className={css.content}>{note.content}</p>
          <div className={css.footer}>
            <span className={css.tag}>{note.tag}</span>
            <button
              className={css.button}
              onClick={() => handleDelete(note._id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
