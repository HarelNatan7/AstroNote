const { useState, useEffect } = React
const { Outlet, useNavigate } = ReactRouterDOM

import { noteService } from '../services/note.service.js'
import { NoteList } from '../cmps/note-list.jsx'
// import { NoteEdit } from '../cmps/note-edit.jsx'
import { UserMsg } from '../../../cmps/user-msg.jsx'
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'


export function NoteIndex() {

    const navigate = useNavigate()
    const [notes, setNotes] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isAddingNote, setIsAddingNote] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        loadNotes()
    }, [])

    useEffect(() => {
        navigateToEdit()
    }, [isAddingNote])

    function loadNotes() {
        noteService.query().then(notesToUpdate => {
            setNotes(notesToUpdate)
            setIsLoading(false)
        })
    }

    function onRemoveNote(ev, noteId) {
        noteService.remove(noteId).then(() => {
            const updatedNotes = notes.filter(note => note.id !== noteId)
            setNotes(updatedNotes)
            showSuccessMsg('Note removed')
        })
            .catch((err) => {
                console.log('Had issues removing', err)
                showErrorMsg('Could not remove note, try again please!')
            })
    }

    function navigateToEdit() {
        if (isAddingNote) navigate('/note/edit')
        else navigate('/note')
    }

    return <section className="note-app-container">
        {userMsg && <UserMsg msg={userMsg} />}
        <div className="inputs-container flex column">
            <input type="text" className="search-input" placeholder="Search Note" />
            {!isAddingNote && <input type="text" className="first-add-input" placeholder="Take A Note..."
                onClick={() => { setIsAddingNote(!isAddingNote) }} />}
            <div className="nested-route">
            <Outlet context={[notes, setNotes, isAddingNote, setIsAddingNote]} />
            </div>
            <div></div>
        </div>
        <NoteList notes={notes} onRemoveNote={onRemoveNote} />
        {isLoading && <div>Loading..</div>}


    </section>
}
