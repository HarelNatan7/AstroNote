const { useState, useEffect } = React

import { MailList } from "../cmps/mail-list.jsx"
import { emailServices } from "../services/mail.service.js"

export function MailIndex() {
    const [emails, setEmails] = useState([])

    useEffect(() => {
        loadEmails()
    }, [])



    function loadEmails() {
        emailServices.query().then(emails => {
            setEmails(emails)
        })
    }

    console.log(emails);

    return (
        <div>
            <h1>Welcome mail</h1>
            <MailList emails={emails} />
        </div>
    )

}

