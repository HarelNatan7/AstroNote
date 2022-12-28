export function MailList({ emails }) {
    console.log(emails);


    if (!emails) return <h1>loading...</h1>
    return (
        <table className="emails-container">
            <tbody>
                {
                    emails.map(email => <tr className="email-container" key={email.id}>
                        {/* from container, need to add stared/labled/select */}
                        <td>{email.from}</td>
                        <td>{email.subject}</td>
                        <td>{email.body}</td>
                        <td>{new Date(email.sentAt).toLocaleString('default', {
                            month: 'long',

                        })}</td>

                    </tr>)
                }


            </tbody>
        </table>




    )

}
