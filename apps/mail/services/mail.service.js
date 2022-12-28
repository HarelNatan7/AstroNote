import { storageService } from "../../../services/async-storage.service.js"

console.log('Hi')


export const emailServices = {
    query,
}

const EMAILS_KEY = 'emailsDB'
const USER_KEY = 'userDB'


const emails =
    [
        {
            id: 'e101',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 1551133930594,
            to: 'user@NoteHub.com',
            from: 'nana@nana.com'
        },
        {
            id: 'e102',
            subject: 'Miss mama mama you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 1551133930594,
            to: 'user@NoteHub.com',
            from: 'lala@lala.com'
        },
        {
            id: 'e103',
            subject: 'Miss lala lala you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 1551133930594,
            to: 'user@NoteHub.com',
            from: 'mamam@mama.com'
        },
    ]

const loggedinUser = {
    email: 'user@NoteHub.com',
    fullname: 'The Oren/Harel'
}

storageService._save(USER_KEY, loggedinUser)
storageService._save(EMAILS_KEY, emails)


function query() {

    return storageService.query(EMAILS_KEY)

}
