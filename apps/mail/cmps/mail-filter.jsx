
const { useState, useRef } = React


export function MailFilter({ filterCrit, onSetCriteria }) {
    const [criteriaToUpdate, setFilterCrit] = useState(filterCrit)
    const formInput = useRef()

    function handleChange({ target }) {
        let { value, name: field } = target
        console.log(criteriaToUpdate);
        setFilterCrit((prevCrit) => {
            return { ...prevCrit, [field]: value }
        })

    }

    function onSubmitFilterForm(ev) {
        ev.preventDefault()
        onSetCriteria(criteriaToUpdate)
        console.log(ev.target.value);
        formInput.current.value = ''
    }

    return (
        <section className="mail-filter">
            <form onSubmit={onSubmitFilterForm}>
                {/* <select className="fa-solid fa-calendar-days" name="" id="">
                    <option value="january">january</option>
                </select> */}
                <input ref={formInput} onChange={handleChange} type="text" placeholder="Search in mail" name="txt" />
                <button type="submit" className="fa-solid fa-magnifying-glass btn-search"></button>

            </form>
        </section>
    )
}