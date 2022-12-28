const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import { noteService } from '../services/note.service.js'
import { NoteList } from '../cmps/note-list.jsx'
import { UserMsg } from '../../../cmps/user-msg.jsx'
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'


export function NoteIndex() {

    const [notes, setNotes] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        loadNotes()
    }, [])

    function loadNotes() {
        noteService.query().then(notesToUpdate => {
            setNotes(notesToUpdate)
            setIsLoading(false)
        })
    }

    function onRemoveNote(noteId) {
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
    return <section className="note-app-container">
        {userMsg && <UserMsg msg={userMsg} />}
        <div className="inputs-container flex column">
            <input type="text" className="search-input" placeholder="Search Note" />
            <div className="add-note-container">
            <input type="text" className="add-input" placeholder="Take A Note..." />
            <button>Save Note</button>
            </div>
        </div>
        {!isLoading && <NoteList notes={notes} onRemoveNote={onRemoveNote} />}
        {isLoading && <div>Loading..</div>}


    </section>
}
