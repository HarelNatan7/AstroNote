
export function NoteList({ notes, onRemoveNote }) {
    console.log('notes:', notes)

    function s(id) {
        console.log('id:', id)
    } 
    
    return <ul className="notes-container grid clean-list">
        {notes.map(note => 
            <li onClick={() => s(note.id)} className="note" key={note.id} contenteditable="true">
                {note.info.txt}
                <div className="note-btn-container">
                    <button className="fa-solid fa-pin"></button>
                    <button className="fa-solid fa-color"></button>
                    <button className="fa-solid fa-edit"></button>
                    <button className="fa-solid fa-mail"></button>
                    <button className="fa-solid fa-delete" onClick={() => onRemoveNote(note.id)}></button>
                </div>
            </li>
        )}
    </ul>
}
