
const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

import { mailServices } from "../services/mail.service.js"

export function MailDetails() {
    const [mail, setEmail] = useState(null)
    const { mailId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadMail()
    }, [mailId]);

    function loadMail() {
        mailServices.get(mailId).then((mail) => {
            setEmail(mail)
        }).catch((err) => {
            console.log('got and error in details', err);
            navigate('/mail')
        })
    }
    console.log(mail);
    if (!mail) return <h1>loading...</h1>
    return (
        <div className="mail-details">
            <div className="btn-nav-container">
                <div className="btn-detail-container">
                    <button className="fa-solid fa-delete"></button>
                    <button className="fa-regular fa-star"></button>
                    <button className="fa-regular fa-bookmark"></button>
                    <Link to="/mail" className="fa-solid fa-arrow-right-long arrow-back"></Link>
                </div>
            </div>
            <div className="subject-container">
                <h1>{mail.subject}</h1>
            </div>
            <div className="mail-from-container">
                <h2>from: {mail.from}</h2>
                <h5>me: {mail.to}</h5>
            </div>
            <div className="body-container">
                <div>{mail.body}</div>
            </div> </div>

    )
}