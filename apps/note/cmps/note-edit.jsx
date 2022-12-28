const { useState, useEffect, useRef } = React
const { useNavigate, useParams, Link, useOutletContext } = ReactRouterDOM

import { noteService } from "../services/note.service.js"
import { utilService } from "../../../services/util.service.js"
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'

export function NoteEdit() {

    const [noteToEdit, setNoteToEdit] = useState(noteService.getEmptyNote())
    const [noteType, setNoteType] = useState('note-txt')
    const navigate = useNavigate()
    const { noteId } = useParams()
    const addInput = useRef()
    const [notes, setNotes, isAddingNote, setIsAddingNote] = useOutletContext()

    useEffect(() => {
        utilService.animateCSS(addInput.current, 'fadeInUp')
        if (!noteId) return
        loadNote()
    }, [])
    
    
    useEffect(() => {
        console.log('noteType:', noteType)

    }, [noteType])

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
            if (field === 'txt') {
                prevNote.info.txt = value
                console.log('prevNote.info.txt:', prevNote.info.txt)
            }
            return { ...prevNote, [field]: value }
        })
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') onSaveNote()
    }

    return <div className="add-note-container flex" ref={addInput}>
        <div className="add-note-btn-container">
            <button className="fa-solid fa-note" title="Note" onClick={() => setNoteType('note-type')} ></button>
            <button className="fa-solid fa-img" title="Image" onClick={() => setNoteType('img-type')} ></button>
            <button className="fa-solid fa-video" title="Video" onClick={() => setNoteType('video-type')} ></button>
            <button className="fa-solid fa-list" title="List" onClick={() => setNoteType('list-type')} ></button>
        </div>
        <input type="text"
            required
            className="add-input"
            name="txt"
            id="txt"
            value={noteToEdit.info.txt}
            placeholder="Write Here..."
            onChange={handleChange}
            onKeyDown={handleKeyPress}
        />
    </div>
}