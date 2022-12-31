const { useState, useRef, useEffect, Fragment } = React

import { noteService } from "../services/note.service.js"
import { utilService } from "../../../services/util.service.js"

export function NotePreview({ note, onRemoveNote, onPinNote }) {

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

    function onToggleIsDone(idx) {
        note.info.todos[idx].isDone = !note.info.todos[idx].isDone
        noteService.save(note)
    }

    

    function onBgColorSelect() {
        // setBgColor('red')
        if (!colorPicker) setColorPicker(1)
        else setColorPicker(0)
    }

    return <li
        className={'note ' + note.style.backgroundColor}
        style={{ backgroundColor: bgColor.length ? bgColor : note.style.backgroundColor }}>
        {note.info.title && <h1 className="note-title-container">{note.info.title}</h1>}
        <div className="note-content-container"
            // contentEditable
            ref={noteText}
            style={note.info.title && { paddingTop: 15 }}
            onInput={onEditTxt}>
            <DynNote note={note} onToggleIsDone={onToggleIsDone}
            />
        </div>
        <div className="note-btn-container">
            <button className="fa-solid fa-pin" onClick={() => onPinNote(note.id)}></button>
            <button className="fa-solid fa-color" onClick={() => onBgColorSelect()}></button>
            {/* <button className="fa-solid fa-edit"></button> */}
            {/* <button className="fa-solid fa-mail"></button> */}
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

function DynNote({ note, onToggleIsDone }) {
    switch (note.type) {
        case 'txt-note':
            return <TxtNote {...note} />
        case 'img-note':
            return <ImgNote {...note} />
        case 'video-note':
            return <VideoNote {...note} />
        case 'list-note':
            return <ListNote note={note} onToggleIsDone={onToggleIsDone} />
    }
}

function TxtNote({ info }) {
    return <h4 contentEditable >{info.txt}</h4>
}
function ImgNote({ info }) {
    return <img src={info.url} />
}
function VideoNote({ info }) {
    return <iframe src={info.url} width="100%" height="100%" frameBorder="0"></iframe>
}
function ListNote({ note, onToggleIsDone }) {

    const [toggleIsDone, setToggleIsDone] = useState([
        note.info.todos.map(todo => todo.isDone)
    ])

    return <ul className="todo-list">
        {
            note.info.todos.map((todo, idx) => <li
                key={idx}
                className={todo.isDone ? 'done' : ''}
                onClick={() => {
                    setToggleIsDone({ ...toggleIsDone, [idx]: !toggleIsDone[idx] })
                    onToggleIsDone(idx)
                }}
            >{todo.txt}</li>)
        }
    </ul>
}