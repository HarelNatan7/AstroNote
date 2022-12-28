const { useNavigate, useParams, Link } = ReactRouterDOM

import { NoteReview } from "./note-review.jsx"

export function NoteList({ notes, onRemoveNote }) {

    const navigate = useNavigate()

    // function onSelectNote(id) {
    //     console.log('id:', id)
    //     navigate(`/note/edit/${id}`)
    // } 
    
    return <ul className="notes-container grid clean-list" contenteditable="true">
        {notes.map(note => 
            <li draggable className="note" key={note.id} >
                <NoteReview note={note} onRemoveNote={onRemoveNote}/>
            </li>
        )}
    </ul>
    
}
