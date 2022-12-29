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
            <DynNote note={note} />
            {/* {note.info.txt} */}
            {/* <img src={note.info.txt} /> */}
            {/* <iframe src={note.info.txt} width="277" height="177" frameborder="0"></iframe> */}
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

function DynNote({ note }) {
    switch (note.type) {
        case 'txt-note':
            return <TxtNote {...note} />
        case 'img-note':
            return <ImgNote {...note} />
        case 'video-note':
            return <VideoNote {...note} />
        case 'list-note':
            return <ListNote {...note} />
    }
}

function TxtNote({ id, type, info }) {
    return <Fragment>{info.txt}</Fragment>
}
function ImgNote({ id, type, info }) {
    return <img src={info.url} />
}
function VideoNote({ id, type, info }) {
    return <iframe src={info.url} width="277" height="177" frameborder="0"></iframe>
}
function ListNote({ id, type, info }) {
    return <ul>
        {
            info.todos.map(todo => <li>{todo}</li>)
        }
    </ul>
}