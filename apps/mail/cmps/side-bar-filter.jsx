

// const { useState, useEffect } = React

const { useState, useEffect, Fragment, useRef } = React
export function SideBarFilter({ updatedSentShown, filterCrit, onSetCriteria, unReadLength }) {
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
                    <div className="compose">Compose</div><button className="fa-solid fa-pencil"  ></button>
                </div>
                <div className="inbox-container" onClick={() => onClickFilter('inbox')} >
                    <div className="inbox">IncomingMail</div> <button className="fa-solid fa-inbox"></button>
                </div>
                <div className="star-container" onClick={() => onClickFilter('star')}>
                    <div className="star">Starred</div>  <button className="fa-solid fa-star"></button>
                </div>
                <div className="trash-container" onClick={() => onClickFilter('trash')}>
                    <div className="trash">Trash</div>  <button className="fa-solid fa-recycle"></button>
                </div>
                <div className="readMail-container" onClick={() => onClickFilter('readMail')}>
                    <div className="readMail">Opened</div>  <button className="fa-brands fa-readme"></button>
                </div>
                <div className="unreadMail-container" onClick={() => onClickFilter('unreadMail')}>
                    <div className="unread-length">{unReadLength}</div>   <div className="unreadMail"><div className="unread-txt">Unread</div> </div> <button className="fa-solid fa-envelope-circle-check"></button>
                </div>
                <div className="sent-container" onClick={() => onClickFilter('sent')}>
                    <div className="sent">Sent</div>  <button className="fa-solid fa-paper-plane"></button>
                </div>
                <div className="draft-container" onClick={() => onClickFilter('draft')}>
                    <div className="draft">draft</div>  <button className="fa-regular fa-file-lines"></button>
                </div>

            </div>

        </div>


    )
}