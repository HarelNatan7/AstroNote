
const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

import { mailServices } from "../services/mail.service.js"
import { eventBusService, showSuccessMsg, showErrorMsg } from "../../../services/event-bus.service.js"

export function MailDetails() {
    const [mail, setMail] = useState(null)
    const [mailtoUpdate, setMailToUpdate] = useState('')
    const { mailId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadMail()
    }, [mailtoUpdate]);

    useEffect(() => {
        updateMail()
    }, [mailtoUpdate]);

    function loadMail() {
        mailServices.get(mailId).then((mail) => {
            setMail(mail)
        }).catch((err) => {
            console.log('got and error in details', err);
            navigate('/mail')
        })
    }

    function updateMail() {

        if (!mailtoUpdate) return

        mailServices.put(mailtoUpdate).then((mailtoUpdate) => {

            setMail(mailtoUpdate)
            if (!mailtoUpdate.isTrash) return
            navigate('/mail')
        })
    }

    function onClickTrash() {
        setMailToUpdate(() => {
            if (!mail.isTrash) {
                return { ...mail, isTrash: true }
            } else return { ...mail, isTrash: false }
        })
        showSuccessMsg('Mail sent to trash')
    }

    function onStarMail() {
        setMailToUpdate(() => {
            if (!mail.isStared) {
                return { ...mail, isStared: true }
            } else return { ...mail, isStared: false }
        })

    }

    console.log('mailsdasdasdas mail', mail);
    if (!mail) return <h1>loading...</h1>
    return (
        <div className="mail-details">
            <div className="btn-nav-container">
                <div className="btn-detail-container">
                    <button onClick={onClickTrash} className={`fa-solid fa-delete`}></button>
                    <button onClick={onStarMail} className={`fa-regular fa-star  ${mail.isStared ? 'stared' : ''}`}> </button>
                    <Link to="/mail" className="fa-solid fa-arrow-right-long arrow-back"></Link>
                </div>
            </div>
            <div className="subject-container">
                <h1 className="detail-subject">{mail.subject}</h1>
            </div>
            <div className="mail-from-container">

                <h2 className="detail-from">{mail.name}: {'<' + mail.from + '>'}</h2>
                <h3 className="detail-to">to: {mail.to}</h3>
            </div>
            <div className="body-container">
                <div className="mail-detail-body">{mail.body}</div>
            </div> </div>

    )
}