

const { useState } = React

export function SideBarFilter({ updatedSentShown, filterCrit, onSetCriteria }) {
    const [updatedFilterCrit, setUpdatedCrit] = useState(filterCrit)

    function onClickInbox(status) {
        setUpdatedCrit((prevCrit) => {
            return { ...prevCrit, status }
        })
        onSetCriteria(updatedFilterCrit)
    }

    function onClickStarFilter(status) {
        setUpdatedCrit((prevCrit) => {
            return { ...prevCrit, status }
        })
        onSetCriteria(updatedFilterCrit)
    }


    return (
        <div className="side-bar-filter">
            <div className="btn-side-bar-container" >
                <div className="compose-container" onClick={() => updatedSentShown(true)} >
                    <div className="compose"></div><button className="fa-solid fa-pencil"  ></button>
                </div>
                <div className="inbox-container" onClick={() => onClickInbox('inbox')} >
                    <div className="inbox"></div> <button className="fa-solid fa-inbox"></button>
                </div>
                <div className="star-container" onClick={() => onClickStarFilter('star')}>
                    <div className="star"></div>  <button className="fa-solid fa-star"></button>
                </div>

            </div>


        </div>

    )
}