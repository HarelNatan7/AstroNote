const { useState } = React



export function SentMail({ updatedSentShown, sentMail, getSentedMail }) {
    const [updatedSentMail, setUpdatedSentMail] = useState(sentMail)

    function handleChange({ target }) {
        let { value, name: field } = target
        console.log('value', value);
        console.log('field', field);
        setUpdatedSentMail((prevMaill) => {
            console.log(prevMaill);
            return { ...prevMaill, [field]: value }
        })
    }
    console.log(updatedSentMail);
    function onSubmintSentMail(ev) {
        ev.preventDefault()
        getSentedMail(updatedSentMail)
        // updatedSentShown(false)
    }

    /// need to support טיוטות

    return (
        <form className="sent-mail" onSubmit={onSubmintSentMail}>
            <div className="sent-message">
                <span>New Message</span>
                <button className="fa-solid fa-xmark" onClick={() => updatedSentShown(false)}></button>
            </div>
            <div className="sent-emailTo">
                <label htmlFor="email"></label>
                <input onChange={handleChange} type="email" name="to" id="email" placeholder="To" required />
            </div>
            <div className="sent-subject">
                <label htmlFor="text"></label>
                <input onChange={handleChange} type="text" name="subject" id="subject" placeholder="Subject" />
            </div>
            <div className="sent-textarea">
                <label htmlFor="body"></label>
                <textarea onChange={handleChange} type="textarea" name="body" id="body" placeholder="enter text" ></textarea>
            </div>
            <div className="sent-btn-container">
                <button className="sent-button" type="submit">Send</button>
                <button className="fa-solid fa-delete" onClick={() => updatedSentShown(false)}></button>
            </div>
        </form>

    )
}