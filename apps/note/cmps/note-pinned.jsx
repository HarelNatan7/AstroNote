
import { NotePreview } from "./note-preview.jsx"

export function PinnedNote({ notes, onRemoveNote }) {
    // const navigate = useNavigate()
console.log('notesPin:', notes)
    return <ul className="notes-container grid clean-list"  >
        <h1>Hi From Pinned Notes</h1>
        {notes.filter(note => note.IsPinned).map(note => <NotePreview note={note} key={note.id} onRemoveNote={onRemoveNote} />)}
    </ul>
}
