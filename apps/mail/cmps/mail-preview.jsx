import { PreviewExpanded } from "./preview-expanded.jsx"

const { useState, useEffect, Fragment, useRef } = React


export function MailPreview({ mail, updateMail }) {
    const [isExpanded, setIsExpanded] = useState(false)
    let isChecked = useRef()


    function onOpenMail(ev) {

        ev.stopPropagation()
        console.log('hi');
        mail.isRead = true
        updateMail(mail)
    }
    function onUnreadMail(ev) {
        ev.stopPropagation()
        if (isExpanded) return
        mail.isRead = false
        updateMail(mail)
    }

    function onStarMail(ev) {
        ev.stopPropagation()
        mail.isStared = !mail.isStared
        updateMail(mail)
    }
    function onCheckedMail(ev) {
        ev.stopPropagation()
        isChecked.current = ev.target.checked
        mail.isChecked = isChecked.current
        updateMail(mail)
    }

    function onTrashMail(ev) {
        ev.stopPropagation()
        mail.isTrash = true
        mail.dateRemoved = Date.now()

        console.log(mail.isTrash);
        console.log(isExpanded);
        updateMail(mail)
    }

    if (!mail) return <h1>loading...</h1>
    return (
        <Fragment>

            <div className={`email-container ${mail.isTrash ? 'hidden' : ''}`} onClick={onOpenMail} >
                <div className="btn-list-container">
                    <input className="input-list" onClick={onCheckedMail} type="checkbox" id="filterChecked" name="filterChecked" />
                    <button onClick={onUnreadMail} className={`fa-regular ${!mail.isRead ? 'fa-envelope' : 'fa-envelope-open'}`}></button>
                    <button onClick={onStarMail} className={`fa-regular fa-star ${mail.isStared ? 'stared' : ''}`}  ></button>


                </div>
                <div className="mail-list-details" onClick={() => {
                    setIsExpanded(!isExpanded)
                }}>
                    <span>{mail.from}</span>
                    <span>{mail.subject}</span>
                    <span>{mail.body}</span>
                    <span>{new Date(mail.sentAt).toLocaleString('default', {
                        month: 'long',
                    })}</span>
                </div>

                <div className="btn-list-hidden">
                    <button onClick={onTrashMail} className={`fa-solid fa-delete `} ></button>
                </div>
            </div>
            {isExpanded && !mail.isTrash && < PreviewExpanded mail={mail} updateMail={updateMail} setIsExpanded={setIsExpanded} />}
        </Fragment>
    )
}