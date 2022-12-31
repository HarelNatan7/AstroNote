import { PreviewExpanded } from "./preview-expanded.jsx"

const { useState, useEffect, Fragment, useRef } = React


export function MailPreview({ mail, updateMail, loggedUser, filterCrit, removeMailFromTrash, getDraftMail }) {
    const [isExpanded, setIsExpanded] = useState(false)

    function onOpenMail(ev) {
        ev.stopPropagation()
        console.log('onOpenMail');
        updateMail(mail, 'readToTrue')
    }
    function onUnreadMail(ev) {
        ev.stopPropagation()
        if (isExpanded) return
        updateMail(mail, 'readToFalse')
    }

    function onStarMail(ev) {
        ev.stopPropagation()
        updateMail(mail, 'star')
    }
    function onCheckedMail(ev) {
        console.log('onCheckedMail');
        ev.stopPropagation()

        updateMail(mail, 'checkBox')
    }

    function onTrashMail(ev) {
        ev.stopPropagation()
        if (filterCrit.status === 'trash') {
            removeMailFromTrash(mail.id)
            return
        }
        console.log('asdasd');
        mail.dateRemoved = Date.now()
        updateMail(mail, 'mailTrash')
    }
    function onUnTrash(ev) {
        ev.stopPropagation()
        updateMail(mail, 'trashToMail')
    }

    function isMailRead() {
        if (mail.isRead) return 'read'
        else return ''
    }
    function onClickMail() {
        console.log(mail);
        if (mail.isDraft) {
            getDraftMail(mail)
        }
        setIsExpanded(!isExpanded)
    }


    if (!mail) return <h1>loading...</h1>
    return (
        <Fragment>

            <div className={`email-container ${!filterCrit.isTrash ? (mail.isTrash ? 'hidden' : '') : ''} `} onClick={onOpenMail} >
                <div className="btn-list-container">
                    <input className="input-list" onClick={onCheckedMail} type="checkbox" id="filterChecked" name="filterChecked" />
                    <button onClick={onUnreadMail} className={`fa-regular ${!mail.isRead ? 'fa-envelope' : 'fa-envelope-open'}`}></button>
                    {!filterCrit.isTrash && <button onClick={onStarMail} className={`fa-regular fa-star ${mail.isStared ? 'stared' : ''}`}  ></button>}
                    <button onClick={onTrashMail} className={!isExpanded ? `fa-solid fa-delete ` : ''} ></button>
                    {filterCrit.isTrash && <button onClick={onUnTrash} className={`fa-solid fa-trash-arrow-up`}  ></button>}

                </div>
                <div className={`mail-list-details ${isMailRead()}`} onClick={() => onClickMail()}>
                    <span className="from">{(mail.name === loggedUser.fullname) ? 'Me' : mail.name}</span>
                    <span className="mail-subject">{mail.subject}</span>
                    <div className="mail-body">{mail.body}</div>
                    <span className="date">{new Date(mail.sentAt).toLocaleString('default', {
                        month: 'long',
                    })}</span>
                </div>

            </div>
            {isExpanded && !mail.isTrash && < PreviewExpanded mail={mail} updateMail={updateMail} setIsExpanded={setIsExpanded} />}
        </Fragment>
    )
}