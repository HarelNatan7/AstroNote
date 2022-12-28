const { useState, useEffect, Fragment } = React


export function NoteReview({ note, onRemoveNote }) {

    return <Fragment>
        {note.info.txt}
        <div className="note-btn-container">
            <button className="fa-solid fa-pin"></button>
            <button className="fa-solid fa-color"></button>
            <button className="fa-solid fa-edit"></button>
            <button className="fa-solid fa-mail"></button>
            <button className="fa-solid fa-delete" onClick={() => onRemoveNote(event, note.id)}></button>
        </div>
    </Fragment>
}