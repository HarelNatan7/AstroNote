
const { useState, useEffect, Fragment } = React

import { noteService } from "../services/note.service.js"

export function NoteFilter({ onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(noteService.getDefaultFilter())

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setFilterByToEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    return <Fragment>
        <input type="text"
            className="search-input"
            placeholder="Search Note"
            name="txt"
            onChange={handleChange}
            value={filterByToEdit.txt} />
        <section className="select-container">
            <label htmlFor="type">By Type: </label>
            <select name="type" id="type" onChange={handleChange}>
                <option value="">Select Type</option>
                <option value="txt-note">Text Note</option>
                <option value="img-note">Image Note</option>
                <option value="video-note">Video Note</option>
                <option value="list-note">List Note</option>
            </select>
        </section>
    </Fragment>
}