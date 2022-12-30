

const { useState, useEffect } = React

export function SideBarFilter({ updatedSentShown, filterCrit, onSetCriteria }) {
    const [updatedFilterCrit, setUpdatedCrit] = useState(filterCrit)

    useEffect(() => {
        onSetCriteria(updatedFilterCrit)
    }, [updatedFilterCrit]);

    function onClickFilter(status) {

        // console.log(isTrash);
        setUpdatedCrit((prevCrit) => {
            return { ...prevCrit, status }
        })
    }


    return (
        <div className="side-bar-filter">
            <div className="btn-side-bar-container" >
                <div className="compose-container" onClick={() => updatedSentShown(true)} >
                    <div className="compose"></div><button className="fa-solid fa-pencil"  ></button>
                </div>
                <div className="inbox-container" onClick={() => onClickFilter('inbox')} >
                    <div className="inbox"></div> <button className="fa-solid fa-inbox"></button>
                </div>
                <div className="star-container" onClick={() => onClickFilter('star')}>
                    <div className="star"></div>  <button className="fa-solid fa-star"></button>
                </div>
                {/* <div className="trash-container" onClick={() => onClickFilter('trash')}>
                    <div className="trash"></div>  <button className="fa-solid fa-delete"></button>
                </div> */}
                <div className="readMail-container" onClick={() => onClickFilter('readMail')}>
                    <div className="readMail"></div>  <button className="fa-brands fa-readme"></button>
                </div>
                <div className="unreadMail-container" onClick={() => onClickFilter('unreadMail')}>
                    <div className="unreadMail"></div>  <button className="fa-solid fa-envelope-circle-check"></button>
                </div>

            </div>


        </div>

    )
}