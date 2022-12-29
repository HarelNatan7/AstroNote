const { Link, useNavigate } = ReactRouterDOM
const { useState, useEffect } = React

import { MailPreview } from "./mail-preview.jsx";
export function MailList({ mails, updateMail }) {
    // const [clickedMailId, setClickedMailId] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        // navigate(`/mail/${clickedMailId}`)

    }, []);

    if (!mails) return <h1>loading...</h1>
    return (
        <div className="emails-container">
            <div>
                {
                    mails.map(mail =>

                        <MailPreview key={mail.id} mail={mail} updateMail={updateMail} />
                    )
                }
            </div>
        </div>




    )

}
