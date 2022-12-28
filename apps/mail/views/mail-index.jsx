const { useState, useEffect } = React

import { storageService } from "../../../services/async-storage.service.js"
import { MailList } from "../cmps/mail-list.jsx"
import { mailServices } from "../services/mail.service.js"

export function MailIndex() {
    const [mails, setEmails] = useState([])
    const [mailToUpdate, setMailToUpdate] = useState('')




    useEffect(() => {
        loadEmails()


    }, [mailToUpdate])





    function updateMail(mailToUpdate) {

        console.log(mailToUpdate.id);
        mailServices.put(mailToUpdate).then((mail) => {
            setMailToUpdate(mail)
        })

    }

    function loadEmails() {
        mailServices.query().then(mails => {
            setEmails(mails)
        })
    }



    return (
        <div>
            <h1>Welcome mail</h1>
            <MailList mails={mails} updateMail={updateMail} />
        </div>
    )

}

