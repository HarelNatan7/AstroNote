const { useState, useEffect, Fragment } = React
const { Outlet, useNavigate } = ReactRouterDOM

import { noteService } from '../services/note.service.js'
import { PinnedNote } from '../cmps/note-pinned.jsx'
import { NoteList } from '../cmps/note-list.jsx'
import { NoteFilter } from '../cmps/note-filter.jsx'
import { UserMsg } from '../../../cmps/user-msg.jsx'
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'

export function NoteIndex() {

    const navigate = useNavigate()
    const [notes, setNotes] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isAddingNote, setIsAddingNote] = useState(false)
    const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())
   

    useEffect(() => {
        setIsLoading(true)
        loadNotes()
    }, [filterBy])

    useEffect(() => {
        navigateToEdit()
    }, [isAddingNote])

    function loadNotes() {
        noteService.query(filterBy).then(notesToUpdate => {
            setNotes(notesToUpdate)
            setIsLoading(false)
        })
    }

    function onSetFilter(filterByFromFilter) {
        setFilterBy(filterByFromFilter)
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

    const loader = <div class="lds-ring"><div></div><div></div><div></div><div></div></div>

    return <Fragment>

     <section className="note-app-container">

            {isLoading && <section>{loader}</section>}
        {userMsg && <UserMsg msg={userMsg} />}

        <div className="inputs-container flex column">
            <NoteFilter onSetFilter={onSetFilter}/>
            {!isAddingNote && <input type="text" className="first-add-input" placeholder="Take A Note..."
                onClick={() => { setIsAddingNote(!isAddingNote) }} />}
            <div className="nested-route">
            <Outlet context={[notes, setNotes, isAddingNote, setIsAddingNote]} />
            </div>
            <div></div>
        </div>
        <PinnedNote notes={notes} onRemoveNote={onRemoveNote} />
        <NoteList notes={notes} onRemoveNote={onRemoveNote} />


    </section>
                </Fragment>
}
