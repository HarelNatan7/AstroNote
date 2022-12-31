
const { useState, useEffect, Fragment } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function PreviewExpanded({ mail, updateMail, setIsExpanded }) {
    const [currExpandedMailId, setCurrExpandedMailId] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {

    }, [mail]);

    function onClickExpandMail(mailId) {
        setCurrExpandedMailId(mailId)
        navigate(`/mail/${mailId}`)
    }
    function deleteFromExpand() {
        setIsExpanded(false)
        updateMail(mail, 'mailTrash')
    }

    return (
        <div className={`main-expanded`}>
            <div className="expanded-subject-btn" >
                <div colSpan='3' className="expanded-subject">{mail.subject}</div>
                <div className="expanded-btn">
                    <button onClick={deleteFromExpand} className="fa-solid fa-delete"></button>
                    <button className="fa-solid fa-expand" onClick={() => onClickExpandMail(mail.id)}></button>
                </div>
            </div>
            <div >
                <div className="expanded-from">{mail.name}: {'<' + mail.from + '>'}</div>
            </div>
            <div className="expanded-body" >
                <div className="mail-body"> {mail.body}</div>
            </div>
        </div>

    )

}