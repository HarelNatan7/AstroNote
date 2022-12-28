

const { Fragment } = React

export function MailPreview({ email }) {


    if (!email) return <h1>loading...</h1>
    return (
        <Fragment>
            <td>{email.from}</td>
            <td>{email.subject}</td>
            <td>{email.body}</td>
            <td>{new Date(email.sentAt).toLocaleString('default', {
                month: 'long',
            })}</td>
        </Fragment>
    )
}