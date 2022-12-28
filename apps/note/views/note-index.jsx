const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import { noteService } from '../services/note.service.js'
import {NoteList} from '../cmps/note-list.jsx'
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

    return <section className="note-app-container">
        <div className="inputs-container flex column">
        <input type="text" className="search-input" placeholder="Search Note" />
        <input type="text" className="add-input" placeholder="Take A Note..." />
        </div>
        {!isLoading && <NoteList notes={notes}/>}
        {isLoading && <div>Loading..</div>}
        

    </section>
}
