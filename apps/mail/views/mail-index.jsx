const { useState, useEffect } = React

import { storageService } from "../../../services/async-storage.service.js"
import { MailFilter } from "../cmps/mail-filter.jsx"
import { MailList } from "../cmps/mail-list.jsx"
import { SentMail } from "../cmps/sent-mail.jsx"
import { SideBarFilter } from "../cmps/side-bar-filter.jsx"
import { mailServices } from "../services/mail.service.js"

export function MailIndex() {
    const [mails, setEmails] = useState([])
    const [filterCrit, setFilterCrit] = useState(mailServices.getFilterCriteria())
    const [isSentShow, setIsSentShow] = useState(false)
    const [sentMail, setSentMail] = useState(mailServices.getDefaultSentMail())


    useEffect(() => {
        loadEmails()
    }, [])
    useEffect(() => {

    }, [filterCrit])


    console.log('filterCrit', filterCrit);
    function updateMail(mailToUpdate, field) {
        console.log('mail with field', mailToUpdate, field);
        if (field === 'readToTrue') {
            mailToUpdate.isRead = true
        }
        if (field === 'readToFalse') {
            mailToUpdate.isRead = false
        }
        if (field === 'star') {
            mailToUpdate.isStared = !mailToUpdate.isStared
        }
        if (field === 'checkBox') {
            mailToUpdate.isChecked = !mailToUpdate.isChecked
        }
        if (field === 'mailTrash') {
            mailToUpdate.isTrash = true
            mailToUpdate.dateRemoved = Date.now()
        }
        mailServices.put(mailToUpdate).then((updatedMail) => {
            setEmails(() => {
                return mails.map((mail) => {
                    if (mail.id === updatedMail.id) {
                        mail = updatedMail
                    }
                    return mail
                })
            })
        })
    }

    function loadEmails() {
        mailServices.query(filterCrit).then(mails => {
            setEmails(mails)
        })
    }
    function onSetCriteria(criteriaToUpdate) {
        setFilterCrit(criteriaToUpdate)
        console.log('criteriaToUpdate22222', criteriaToUpdate);
    }

    function updatedSentShown(field) {
        setIsSentShow(field)
    }

    function getSentedMail(mail) {
        mailServices.post(mail).then(() => {
            setIsSentShow(false)
        })
    }

    // console.log(sentMail);
    return (
        <div>
            <MailFilter filterCrit={filterCrit} onSetCriteria={onSetCriteria} />
            <SideBarFilter updatedSentShown={updatedSentShown} filterCrit={filterCrit} onSetCriteria={onSetCriteria} />
            <MailList mails={mails} updateMail={updateMail} />
            {isSentShow && <SentMail updatedSentShown={updatedSentShown}
                sentMail={sentMail} getSentedMail={getSentedMail} />}
        </div>
    )

}

