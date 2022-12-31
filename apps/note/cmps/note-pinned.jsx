const { useState, useEffect, Fragment } = React

import { NotePreview } from "./note-preview.jsx"

export function PinnedNote({ notes, onRemoveNote, onPinNote }) {

    let isPinnedNotes = null

    useEffect(() => {
        isPinnedNotes = getPinnedNotes(notes)
    }, [])

    function getPinnedNotes(notes) {
        notes.filter(note => note.pinned)
        console.log('notes:', notes)
        if (notes.length > 0) return true
        else return false
    }

    return <Fragment>
        <h1 className="pinned-label">Pinned</h1>
        <ul className="pinned-notes-container grid clean-list"  >
            {notes = notes.filter(note => note.isPinned)
                .map(note => <NotePreview note={note} key={note.id}
                    onRemoveNote={onRemoveNote}
                    onPinNote={onPinNote} />)}
        </ul>
    </Fragment>
}
