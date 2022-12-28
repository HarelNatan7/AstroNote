import { PreviewExpanded } from "./preview-expanded.jsx"

const { useState, useEffect, Fragment, useRef } = React


export function MailPreview({ mail, updateMail }) {
    const [isExpanded, setIsExpanded] = useState(false)
    let isChecked = useRef()

    function onOpenMail() {
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

    if (!mail) return <h1>loading...</h1>
    return (
        <Fragment>

            <div className="email-container" onClick={onOpenMail} >
                <div className="btn-list-container">
                    <input onChange={onCheckedMail} type="checkbox" id="filterChecked" name="filterChecked" />
                    <button onClick={onStarMail} className={`fa-regular fa-star ${mail.isStared ? 'stared' : ''}`}  ></button>
                    <button onClick={onUnreadMail} className={`fa-regular ${!mail.isRead ? 'fa-envelope' : 'fa-envelope-open'}`}></button>

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

            </div>
            {isExpanded && < PreviewExpanded mail={mail} />}
        </Fragment>
    )
}