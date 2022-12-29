const { useState, useRef, useEffect, Fragment } = React

import { noteService } from "../services/note.service.js"
import { utilService } from "../../../services/util.service.js"

export function NotePreview({ note, onRemoveNote }) {

    const [bgColor, setBgColor] = useState('')
    const [colorPicker, setColorPicker] = useState(0)
    const noteText = useRef()

    useEffect(() => {
        note.style.backgroundColor = bgColor
        noteService.save(note)
    }, [bgColor])


    function onEditTxt() {
        // utilService.animateCSS(noteText.current, 'headShake')
        let newTxt = noteText.current.textContent
        note.info.txt = newTxt
        noteService.save(note)
    }

    function onBgColorSelect() {
        // setBgColor('red')
        if (!colorPicker) setColorPicker(1)
        else setColorPicker(0)
    }

    return <li
        className={'note ' + note.style.backgroundColor}
        style={{ backgroundColor: bgColor }}>
        {note.info.title && <div className="note-title-container">{note.info.title}</div>}
        <div className="note-content-container"
            // contentEditable
            ref={noteText}
            style={note.info.title && { paddingTop: 15 }}
            onInput={onEditTxt}>
            <DynNote note={note}
            />
        </div>
        <div className="note-btn-container">
            <button className="fa-solid fa-pin"></button>
            <button className="fa-solid fa-color" onClick={() => onBgColorSelect()}></button>
            <button className="fa-solid fa-edit"></button>
            <button className="fa-solid fa-mail"></button>
            <button className="fa-solid fa-delete" onClick={() => onRemoveNote(event, note.id)}></button>
        </div>
        <div className="note-bgc-container"
            style={{ opacity: colorPicker }}>
            <span className="dot"
                id="sandybrown"
                onClick={() => setBgColor('sandybrown')}
                style={{ backgroundColor: 'sandybrown' }}></span>
            <span className="dot"
                id="lightsalmon"
                onClick={() => setBgColor('lightsalmon')}
                style={{ backgroundColor: 'lightsalmon' }}></span>
            <span className="dot"
                id="lightgreen"
                onClick={() => setBgColor('lightgreen')}
                style={{ backgroundColor: 'lightgreen' }}></span>
            <span className="dot"
                id="lightblue"
                onClick={() => setBgColor('lightblue')}
                style={{ backgroundColor: 'lightblue' }}></span>
            <span className="dot"
                id="lightpink"
                onClick={() => setBgColor('lightpink')}
                style={{ backgroundColor: 'lightpink' }}></span>
            <span className="dot"
                id="lightseagreen"
                onClick={() => setBgColor('lightseagreen')}
                style={{ backgroundColor: 'lightseagreen' }}></span>
        </div>
    </li>
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

function TxtNote({ info }) {
    return <Fragment>{info.txt}</Fragment>
}
function ImgNote({ info }) {
    return <img src={info.url} />
}
function VideoNote({ info }) {
    return <iframe src={info.url} width="277" height="177" frameborder="0"></iframe>
}
function ListNote({ info }) {
    return <ul>
        {
            info.todos.map(todo => <li>{todo}</li>)
        }
    </ul>
}