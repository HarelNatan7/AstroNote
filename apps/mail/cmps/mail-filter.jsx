
const { useState } = React


export function MailFilter({ filterCrit, onSetCriteria }) {
    const [criteriaToUpdate, setFilterCrit] = useState(filterCrit)

    // const criteria = {
    //     status: 'inbox/sent/trash/draft',
    //     txt: 'puki', // no need to support complex text search
    //     isRead: true, // (optional property, if missing: show all)
    //     isStared: true, // (optional property, if missing: show all)
    //     lables: ['important', 'romantic'] // has any of the labels
    //    }


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

    }

    return (
        <section className="mail-filter">
            <form onSubmit={onSubmitFilterForm}>

                <input onChange={handleChange} type="text" placeholder="Search in mail" name="txt" />
                <button className="fa-solid fa-magnifying-glass btn-search"></button>


            </form>
        </section>
    )
}