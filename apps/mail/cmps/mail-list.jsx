const { Link, useNavigate } = ReactRouterDOM
const { useState, useEffect } = React

import { MailPreview } from "./mail-preview.jsx";
export function MailList({ mails }) {
    // const [clickedMailId, setClickedMailId] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        // navigate(`/mail/${clickedMailId}`)

    }, []);

    if (!mails) return <h1>loading...</h1>
    return (
        <table className="emails-container">
            <tbody>
                {
                    mails.map(mail =>
                        <MailPreview key={mail.id} mail={mail} />
                    )
                }
            </tbody>
        </table>




    )

}
