const { useNavigate, useParams, Link } = ReactRouterDOM
const { useRef, Fragment } = React

import { NotePreview } from "./note-preview.jsx"

export function NoteList({ notes, onRemoveNote, onPinNote }) {

    return <Fragment>
        <h1 className="others-label">Others</h1>
        <ul className="notes-container grid clean-list"  >
            {notes = notes.filter(note => !note.isPinned)
                .map(note => <NotePreview
                    note={note} key={note.id}
                    onRemoveNote={onRemoveNote}
                    onPinNote={onPinNote} />)}
        </ul>
    </Fragment>
}

