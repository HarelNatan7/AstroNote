
const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

import { mailServices } from "../services/mail.service.js"

export function MailDetails() {
    const [mail, setMail] = useState(null)
    const [mailtoUpdate, setMailToUpdate] = useState('')
    const { mailId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadMail()
    }, []);

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
        console.log(mailtoUpdate);

        if (!mailtoUpdate) return
        console.log(mailtoUpdate);
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
    }

    function onStarMail() {
        setMailToUpdate(() => {
            if (!mail.isStared) {
                return { ...mail, isStared: true }
            } else return { ...mail, isStared: false }
        })

    }


    if (!mail) return <h1>loading...</h1>
    return (
        <div className="mail-details">
            <div className="btn-nav-container">
                <div className="btn-detail-container">
                    <button onClick={onClickTrash} className={`fa-solid fa-delete`}></button>
                    <button onClick={onStarMail} className={`fa-regular fa-star ${mail.isStared ? 'stared' : ''}`}></button>
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