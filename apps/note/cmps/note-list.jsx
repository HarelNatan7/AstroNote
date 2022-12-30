const { useNavigate, useParams, Link } = ReactRouterDOM
const { useRef } = React

import { NotePreview } from "./note-preview.jsx"

export function NoteList({ notes, onRemoveNote }) {
    // const navigate = useNavigate()

    return <ul className="notes-container grid clean-list"  >
        {notes.map(note => <NotePreview note={note} key={note.id} onRemoveNote={onRemoveNote} />)}
    </ul>
}
