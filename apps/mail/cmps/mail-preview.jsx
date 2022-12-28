const { useState, useEffect, Fragment } = React


export function MailPreview({ mail }) {
    const [isExpanded, setIsExpanded] = useState(false)

    if (!mail) return <h1>loading...</h1>
    return (
        <Fragment>
            <tr className="email-container" onClick={() => {
                setIsExpanded(!isExpanded)
            }}>
                <td>{mail.from}</td>
                <td>{mail.subject}</td>
                <td>{mail.body}</td>
                <td>{new Date(mail.sentAt).toLocaleString('default', {
                    month: 'long',
                })}</td>
            </tr>

            <tr className="expanded-subject-btn" hidden={!isExpanded}>
                <td colSpan='3' className="expanded-subject">{mail.subject}</td>
                <td className="expanded-btn">
                    <button className="fa-solid fa-delete"></button>
                    <button className="fa-solid fa-delete"></button>
                </td>
            </tr>


        </Fragment>
    )
}