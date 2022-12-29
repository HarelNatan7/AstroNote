const { useState, useEffect, useRef } = React
const { useNavigate, useParams, Link, useOutletContext } = ReactRouterDOM

import { noteService } from "../services/note.service.js"
import { utilService } from "../../../services/util.service.js"
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'

export function NoteEdit() {

    const [noteToEdit, setNoteToEdit] = useState(noteService.getEmptyNote())
    const [noteType, setNoteType] = useState('txt-note')
    const navigate = useNavigate()
    const { noteId } = useParams()
    const addInput = useRef()
    const [notes, setNotes, isAddingNote, setIsAddingNote] = useOutletContext()


    useEffect(() => {
        noteToEdit.type = noteType
    }, [noteType])

    useEffect(() => {
        utilService.animateCSS(addInput.current, 'fadeInUp')
        if (!noteId) return
        loadNote()
    }, [])

    function loadNote() {
        noteService.get(noteId)
            .then((note) => setNoteToEdit(note))
            .catch(err => {
                console.log('Had issues in note details', err)
                navigate('/note')
            })
    }

    function onSaveNote() {
        // ev.preventDefault()
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
        setNoteToEdit(prevNote => {
            if (field === 'txt') prevNote.info.txt = value
            if (field === 'url') prevNote.info.url = value
            if (field === 'todos') {
                if (value === ',') return
                console.log('value:', value)
                value.split(',').map(todo => prevNote.info.todos.push(todo))
                console.log('prevNote.info.todos:', prevNote.info.todos)
            }
            // return { ...prevNote, [field]: value }
            return prevNote
        })
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') onSaveNote()
    }

    return <div className="add-note-container flex" ref={addInput}>
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

function NoteInput({ noteType, handleChange, handleKeyPress }) {
    return <input type="text"
        required
        className="add-input"
        name="txt"
        id="txt"
        // value={noteToEdit.info.txt}
        placeholder="Write Here..."
        onChange={handleChange}
        onKeyDown={handleKeyPress}
    />
}

function ImgInput({ noteType, handleChange, handleKeyPress }) {
    return <input type="text"
        required
        className="add-input"
        name="url"
        id="url"
        // value={noteToEdit.info.txt}
        placeholder="Enter Img Url..."
        onChange={handleChange}
        onKeyDown={handleKeyPress}
    />
}

function VideoInput({ noteType, handleChange, handleKeyPress }) {
    return <input type="text"
        required
        className="add-input"
        name="url"
        id="url"
        // value={noteToEdit.info.txt}
        placeholder="Enter Video Url..."
        onChange={handleChange}
        onKeyDown={handleKeyPress}
    />
}

function ListInput({ noteType, handleChange, handleKeyPress }) {
    return <input type="text"
        required
        className="add-input"
        name="todos"
        id="todos"
        // value={noteToEdit.info.txt}
        placeholder="Write Todos Seperated By Commas..."
        onChange={handleChange}
        onKeyDown={handleKeyPress}
    />
}
