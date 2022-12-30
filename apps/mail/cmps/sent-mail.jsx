const { useState, useEffect } = React



export function SentMail({ updatedSentShown, sentMail, getSentedMail, filterCrit, onSetCriteria }) {
    const [updatedSentMail, setUpdatedSentMail] = useState(sentMail)
    const [updateCrit, setUpdateCrit] = useState(filterCrit)
    const [draftMail, setDraftMail] = useState(updatedSentMail)


    function handleChange({ target }) {
        let { value, name: field } = target

        setUpdatedSentMail((prevMaill) => {
            console.log(prevMaill);
            return { ...prevMaill, [field]: value }
        })
        setDraftMail(prevMail => {
            prevMail.isDraft = true
            return { ...prevMail, [field]: value }
        })
        if (updateCrit.status !== 'inbox') {
            setUpdateCrit(prevCrit => {
                console.log(prevCrit);
                return { ...prevCrit, status: 'inbox' }
            })
        }
    }
    console.log(updatedSentMail);
    function onSubmintSentMail(ev) {
        ev.preventDefault()
        getSentedMail(updatedSentMail)

        console.log(updateCrit, 'updateCrit');
        onSetCriteria(updateCrit)
    }


    function onClickDraft() {
        getSentedMail(draftMail)
        updatedSentShown(false)
        onSetCriteria(updateCrit)
    }

    /// need to support טיוטות

    return (
        <form className="sent-mail" onSubmit={onSubmintSentMail}>
            <div className="sent-message">
                <span>New Message</span>
                <button className="fa-solid fa-xmark" onClick={() => onClickDraft()}></button>
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