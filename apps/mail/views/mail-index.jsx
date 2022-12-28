const { useState, useEffect } = React

import { MailList } from "../cmps/mail-list.jsx"
import { mailServices } from "../services/mail.service.js"

export function MailIndex() {
    const [mails, setEmails] = useState([])

    useEffect(() => {
        loadEmails()
    }, [])



    function loadEmails() {
        mailServices.query().then(mails => {
            setEmails(mails)
        })
    }

    console.log(mails);

    return (
        <div>
            <h1>Welcome mail</h1>
            <MailList mails={mails} />
        </div>
    )

}

