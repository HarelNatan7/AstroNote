const { useState, useEffect } = React

import { MailFilter } from "../cmps/mail-filter.jsx"
import { MailList } from "../cmps/mail-list.jsx"
import { SentMail } from "../cmps/sent-mail.jsx"
import { SideBarFilter } from "../cmps/side-bar-filter.jsx"
import { mailServices } from "../services/mail.service.js"


export function MailIndex() {
    const [mails, setEmails] = useState([])
    const [filterCrit, setFilterCrit] = useState(mailServices.getFilterCriteria())
    const [isSentShow, setIsSentShow] = useState(false)
    const [unReadLength, setUnreadLength] = useState(null)
    const [draftMail, setdraftMail] = useState(null)
    const sentMail = mailServices.getDefaultSentMail()
    const loggedUser = mailServices.getLoggedUser()


    useEffect(() => {

        loadEmails()

    }, [filterCrit])

    useEffect(() => {
        loadUnreadLength()

    }, [mails])



    console.log(unReadLength);

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
            console.log(filterCrit);
            mailToUpdate.isTrash = true
            mailToUpdate.dateRemoved = Date.now()

        }
        if (field === 'trashToMail') {
            mailToUpdate.isTrash = false
            console.log(mailToUpdate);
        }
        mailServices.put(mailToUpdate).then((updatedMail) => {
            setEmails(() => {
                return mails.map((mail) => {
                    if (mail.id === updatedMail.id) {
                        console.log('updating');
                        mail = updatedMail

                    }
                    if (filterCrit.status === 'trash') {
                        setFilterCrit(prevCrit => {
                            return { ...prevCrit, status: 'inbox', isTrash: false }
                        })
                    }
                    return mail
                })
            })
        })
    }



    function removeMailFromTrash(mailId) {

        mailServices.remove(mailId).then(() => {
            loadEmails()
        })

    }

    function loadUnreadLength() {
        mailServices.getUnreadMailCount(unReadLength).then(length => {
            setUnreadLength(length)
        })

    }

    function loadEmails() {
        mailServices.query(filterCrit).then(mails => {
            setEmails(mails)
        })
    }

    function onSetCriteria(criteriaToUpdate) {
        if (criteriaToUpdate.status === 'trash') {
            criteriaToUpdate.isTrash = true
        } else criteriaToUpdate.isTrash = false
        setFilterCrit(criteriaToUpdate)
    }

    function updatedSentShown(field) {
        setIsSentShow(field)
    }

    function getSentedMail(mail) {
        mailServices.post(mail).then(() => {
            setIsSentShow(false)
        })
    }

    function getDraftMail(mail) {
        setdraftMail(mail)
        setIsSentShow(true)

    }
    return (
        <div>
            <MailFilter filterCrit={filterCrit} onSetCriteria={onSetCriteria} />
            <SideBarFilter unReadLength={unReadLength}
                updatedSentShown={updatedSentShown}
                filterCrit={filterCrit} onSetCriteria={onSetCriteria} />
            <MailList mails={mails} updateMail={updateMail}
                loggedUser={loggedUser}
                filterCrit={filterCrit}
                getDraftMail={getDraftMail}
                removeMailFromTrash={removeMailFromTrash} />
            {isSentShow && <SentMail draftInfo={draftMail} updatedSentShown={updatedSentShown}
                sentMail={sentMail} getSentedMail={getSentedMail}
                filterCrit={filterCrit} onSetCriteria={onSetCriteria} />}
        </div>
    )

}

