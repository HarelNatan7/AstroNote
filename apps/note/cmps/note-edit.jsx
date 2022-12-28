const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { noteService } from "../services/note.service.js"
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'

export function NoteEdit() {

    const [noteToEdit, setNoteToEdit] = useState(noteService.getEmptyNote())
    const navigate = useNavigate()
    const { noteId } = useParams()

    useEffect(() => {
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
        noteService.save(noteToEdit)
            .then(() => {
                showSuccessMsg('Note Saved')
                navigate('/')
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

    return <div className="add-note-container">
        <input type="text"
            className="add-input"
            name="txt"
            id="txt"
            value={noteToEdit.info.txt}
            placeholder="Take A Note..."
            onChange={handleChange}
        />
        <button onClick={onSaveNote}>Save Note</button>
    </div>
}