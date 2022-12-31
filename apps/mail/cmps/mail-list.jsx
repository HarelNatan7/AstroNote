const { Link, useNavigate } = ReactRouterDOM
const { useState, useEffect } = React

import { MailPreview } from "./mail-preview.jsx";
export function MailList({ mails, updateMail, loggedUser, filterCrit, removeMailFromTrash, getDraftMail }) {


    function emptyMailMsg() {
        if (filterCrit.status === 'star' && !mails.length) return 'No stared mails found'
        if (filterCrit.status === 'inbox' && !mails.length) return 'No mails found'
        if (filterCrit.status === 'draft' && !mails.length) return 'No draft mails found'
        if (filterCrit.status === 'sent' && !mails.length) return 'No sent mails found'
        if (filterCrit.status === 'trash' && !mails.length) return 'No trashed mails found'
        if (filterCrit.status === 'readMail' && !mails.length) return 'No read mails found'
        if (filterCrit.status === 'unreadMail' && !mails.length) return 'No opened mails found'
    }


    if (!mails || !mails.length) return <h1>{emptyMailMsg()}</h1>
    return (
        <div className="emails-container">
            <div>
                {
                    mails.map(mail =>
                        <MailPreview key={mail.id} mail={mail}
                            loggedUser={loggedUser}
                            updateMail={updateMail}
                            filterCrit={filterCrit}
                            removeMailFromTrash={removeMailFromTrash}
                            getDraftMail={getDraftMail} />
                    )
                }
            </div>
        </div>




    )

}
