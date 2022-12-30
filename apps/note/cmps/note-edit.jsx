const { useState, useEffect, useRef } = React
const { useNavigate, useParams, Link, useOutletContext } = ReactRouterDOM

import { noteService } from "../services/note.service.js"
import { utilService } from "../../../services/util.service.js"
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'

export function NoteEdit() {

    const [noteToEdit, setNoteToEdit] = useState(noteService.getEmptyNote())
    const [noteType, setNoteType] = useState('txt-note')
    const navigate = useNavigate()
    // const { noteId } = useParams()
    const addInput = useRef()
    const [notes, setNotes, isAddingNote, setIsAddingNote] = useOutletContext()


    useEffect(() => {
        noteToEdit.type = noteType
    }, [noteType])

    useEffect(() => {
        utilService.animateCSS(addInput.current, 'fadeInUp')
        console.log('notes2:', notes)
        // if (!noteId) return
        // loadNote()
    }, [])

    // function loadNote() {
    //     noteService.get(noteId)
    //         .then((note) => setNoteToEdit(note))
    //         .catch(err => {
    //             console.log('Had issues in note details', err)
    //             navigate('/note')
    //         })
    // }

    function onSaveNote() {
        console.log('noteToEdit:', noteToEdit)
        noteService.save(noteToEdit)
            .then(() => {
                noteService.query().then(notes => {
                    setNotes(notes)
                    setIsAddingNote(!isAddingNote)
                    showSuccessMsg('Note Saved')
                    navigate('/note')
                })
            })
    }

    function handleChange({ target }) {
        let { value, name: field, type } = target
        // value = (type === 'number') ? +value : value
        console.log('field:', field)
        setNoteToEdit(prevNote => {
            if (field === 'title') prevNote.info.title = value
            if (field === 'txt') prevNote.info.txt = value
            if (field === 'url') prevNote.info.url = value
            return prevNote
        })
    }

    function handleKeyPress(ev) {
        let { value, name: field } = ev.target
        if (ev.key === 'Enter') {
            if (field === 'todos') {
                value = value.trim()
                setNoteToEdit(prevNote => {
                    value.split(',').map(todo => prevNote.info.todos.push({txt: todo, isDone: false}))
                    return prevNote
                })
            }
            onSaveNote()
        }
    }

    return <div className="add-note-container flex" ref={addInput}>
        <input type="text"
            className="title-input"
            placeholder="Title"
            name="title"
            onChange={handleChange}
        />
        <DynInput noteType={noteType} handleChange={handleChange} handleKeyPress={handleKeyPress} />
        <div className="add-note-btn-container">
            <button className="fa-solid fa-note" title="Note" onClick={() => setNoteType('txt-note')} ></button>
            <button className="fa-solid fa-img" title="Image" onClick={() => setNoteType('img-note')} ></button>
            <button className="fa-solid fa-video" title="Video" onClick={() => setNoteType('video-note')} ></button>
            <button className="fa-solid fa-list" title="List" onClick={() => setNoteType('list-note')} ></button>
        </div>
    </div>
}

function DynInput(props) {
    switch (props.noteType) {
        case 'txt-note':
            return <NoteInput {...props} />
        case 'img-note':
            return <ImgInput {...props} />
        case 'video-note':
            return <VideoInput {...props} />
        case 'list-note':
            return <ListInput {...props} />
    }
}

function NoteInput({ handleChange, handleKeyPress }) {
    return <input type="text"
        required
        className="add-input"
        name="txt"
        placeholder="Write Here..."
        onChange={handleChange}
        onKeyDown={handleKeyPress}
    />
}

function ImgInput({ handleChange, handleKeyPress }) {
    return <input type="text"
        required
        className="add-input"
        name="url"
        placeholder="Enter Img Url..."
        onChange={handleChange}
        onKeyDown={handleKeyPress}
    />
}

function VideoInput({ handleChange, handleKeyPress }) {
    return <input type="text"
        required
        className="add-input"
        name="url"
        placeholder="Enter Video Url..."
        onChange={handleChange}
        onKeyDown={handleKeyPress}
    />
}

function ListInput({ handleChange, handleKeyPress }) {
    return <input type="text"
        required
        className="add-input"
        name="todos"
        placeholder="Write Todos Seperated By Commas..."
        onChange={handleChange}
        onKeyDown={handleKeyPress}
    />
}
