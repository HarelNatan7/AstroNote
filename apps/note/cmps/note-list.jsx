const { useNavigate, useParams, Link } = ReactRouterDOM
const { useRef } = React

import { NotePreview } from "./note-preview.jsx"

export function NoteList({ notes, onRemoveNote }) {

    const navigate = useNavigate()

    // function onSelectNote(id) {
    //     console.log('id:', id)
    //     navigate(`/note/edit/${id}`)
    // } 

   

    return <ul className="notes-container grid clean-list"  >
        {notes.map(note =>
            <li className="note" key={note.id} >
                <NotePreview note={note} onRemoveNote={onRemoveNote} />
            </li>
        )}
    </ul>

}
