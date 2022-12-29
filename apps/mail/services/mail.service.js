import { storageService } from "../../../services/async-storage.service.js"
import { utilService } from "../../../services/util.service.js"

console.log('Hi')


export const mailServices = {
    query,
    get,
    put,
    getFilterCriteria
}

const MAILS_KEY = 'mailsDB'
const USER_KEY = 'userDB'

const loggedinUser = {
    mail: 'user@NoteHub.com',
    fullname: 'The Oren/Harel'
}
createEmails()

storageService._save(USER_KEY, loggedinUser)


function createEmails() {
    let mails = utilService.loadFromStorage(MAILS_KEY)
    if (!mails || !mails.length) {
        mails = [
            {
                id: 'e101',
                name: 'nana',
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
                name: 'lala',
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
                name: 'mamam',
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
    utilService.saveToStorage(MAILS_KEY, mails)
}


function put(updatedMail) {

    return storageService.put(MAILS_KEY, updatedMail)
}

function get(mailId) {

    return storageService.get(MAILS_KEY, mailId)
}

function query(criteria = getFilterCriteria()) {
    console.log('criteria', criteria);

    return storageService.query(MAILS_KEY).then(mails => {
        if (criteria.txt) {
            const regex = new RegExp(criteria.txt, 'i')
            mails = mails.filter(mail => {

                // if (!regex.test(mail.name)) {
                //     return 
                // }
                return regex.test(mail.subject)


            })
            //     || mails.filter(mail => regex.test(mail.subject)) ||
            //     mails.filter(mail => regex.test(mail.body))
            // console.log('mails', mails);

        }
        return mails
    })

}


function getFilterCriteria() {
    const criteria = {
        status: '',
        txt: '',
        isRead: true,
        isStared: true,
        lables: ['important', 'romantic']
    }
    return criteria
}