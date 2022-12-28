
const { useState, useEffect, Fragment } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function PreviewExpanded({ mail }) {
    const [currExpandedMailId, setCurrExpandedMailId] = useState(null)
    const navigate = useNavigate()

    function onClickExpandMail(mailId) {
        setCurrExpandedMailId(mailId)
        navigate(`/mail/${mailId}`)
    }

    return (
        <div className="main-expanded">
            <div className="expanded-subject-btn" >
                <div colSpan='3' className="expanded-subject">{mail.subject}</div>
                <div className="expanded-btn">
                    <button className="fa-solid fa-delete"></button>
                    <button className="fa-solid fa-expand" onClick={() => onClickExpandMail(mail.id)}></button>
                </div>
            </div>
            <div >
                <div>name: {mail.from}</div>
            </div>
            <div className="expanded-body" >
                <div > {mail.body}</div>
            </div>
        </div>

    )

}