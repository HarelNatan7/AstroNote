const { Link, useNavigate } = ReactRouterDOM
const { useState, useEffect } = React

import { MailPreview } from "./mail-preview.jsx";
export function MailList({ mails }) {
    const [clickedMailId, setClickedMailId] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        navigate(`/mail/${clickedMailId}`)

    }, [clickedMailId]);

    if (!mails) return <h1>loading...</h1>
    return (
        <table className="emails-container">
            <tbody>
                {
                    mails.map(email => <tr className="email-container" key={email.id} onClick={() => setClickedMailId(email.id)}>
                        <MailPreview email={email} />
                    </tr>)
                }
            </tbody>
        </table>




    )

}
