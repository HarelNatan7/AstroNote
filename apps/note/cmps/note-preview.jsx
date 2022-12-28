const { useState, useRef, useEffect, Fragment } = React

import { noteService } from "../services/note.service.js"
import { utilService } from "../../../services/util.service.js"

export function NotePreview({ note, onRemoveNote }) {

    const noteText = useRef()

    function onEditTxt() {
        utilService.animateCSS(noteText.current, 'headShake')
        let newTxt = noteText.current.textContent
        note.info.txt = newTxt
        noteService.save(note)
    }

    return <Fragment>
        <div className="note-txt-container" ref={noteText} onInput={onEditTxt} contentEditable="true">
            {note.info.txt}
        </div>
        <div className="note-btn-container">
            <button className="fa-solid fa-pin"></button>
            <button className="fa-solid fa-color"></button>
            <button className="fa-solid fa-edit"></button>
            <button className="fa-solid fa-mail"></button>
            <button className="fa-solid fa-delete" onClick={() => onRemoveNote(event, note.id)}></button>
        </div>
    </Fragment>
}