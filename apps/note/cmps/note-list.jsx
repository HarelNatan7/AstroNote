const { useNavigate, useParams, Link } = ReactRouterDOM

export function NoteList({ notes, onRemoveNote }) {

    const navigate = useNavigate()

    function onSelectNote(id) {
        console.log('id:', id)
        navigate(`/note/edit/${id}`)
    } 
    
    return <ul className="notes-container grid clean-list">
        {notes.map(note => 
            <li onClick={() => onSelectNote(note.id)} className="note" key={note.id} contentEditable="true">
                {note.info.txt}
                <div className="note-btn-container">
                    <button className="fa-solid fa-pin"></button>
                    <button className="fa-solid fa-color"></button>
                    <button className="fa-solid fa-edit"></button>
                    <button className="fa-solid fa-mail"></button>
                    <button className="fa-solid fa-delete" onClick={() => onRemoveNote(event, note.id)}></button>
                </div>
            </li>
        )}
    </ul>
}
