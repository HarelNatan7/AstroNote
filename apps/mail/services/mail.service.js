import { storageService } from "../../../services/async-storage.service.js"
import { utilService } from "../../../services/util.service.js"

console.log('Hi')


export const mailServices = {
    query,
    get,
    put,
}

const EMAILS_KEY = 'emailsDB'
const USER_KEY = 'userDB'

const loggedinUser = {
    mail: 'user@NoteHub.com',
    fullname: 'The Oren/Harel'
}
createEmails()

storageService._save(USER_KEY, loggedinUser)


function createEmails() {
    let mails = utilService.loadFromStorage(EMAILS_KEY)
    if (!mails || !mails.length) {
        mails = [
            {
                id: 'e101',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 1551133930594,
                to: 'user@NoteHub.com',
                from: 'nana@nana.com'
            },
            {
                id: 'e102',
                subject: 'Miss mama mama you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 1551133930594,
                to: 'user@NoteHub.com',
                from: 'lala@lala.com'
            },
            {
                id: 'e103',
                subject: 'Miss lala lala you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 1551133930594,
                to: 'user@NoteHub.com',
                from: 'mamam@mama.com'
            },
        ]
    }
    utilService.saveToStorage(EMAILS_KEY, mails)
}


function put(updatedMail) {

    return storageService.put(EMAILS_KEY, updatedMail)
}

function get(mailId) {

    return storageService.get(EMAILS_KEY, mailId)
}

function query() {

    return storageService.query(EMAILS_KEY)

}
