import { storageService } from "../../../services/async-storage.service.js"
import { utilService } from "../../../services/util.service.js"

console.log('Hi')


export const mailServices = {
    query,
    get,
    put,
    post,
    getFilterCriteria,
    getDefaultSentMail,
    getLoggedUser,
    getUnreadMailCount,
    remove
}

const MAILS_KEY = 'mailsDB'
const USER_KEY = 'userDB'

const loggedinUser = {
    mail: 'user@NoteHub.com',
    fullname: 'Oren'
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
                body: 'Would adadaf love to catch up sometimes',
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 155133930594,
                to: 'user@NoteHub.com',
                from: 'nana@nana.com'
            },
            {
                id: 'e102',
                name: 'lala',
                subject: 'Miss mama mama you!',
                body: 'Would masdad love to catch up sometimes',
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 155113930594,
                to: 'user@NoteHub.com',
                from: 'lala@lala.com'
            },
            {
                id: 'e103',
                name: 'mamam',
                subject: 'Miss lala lala you!',
                body: 'Would  kaka love to catch up sometimes',
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 155115930594,
                to: 'user@NoteHub.com',
                from: 'mamam@mama.com'
            },
            {
                id: 'e104',
                name: 'mamam',
                subject: 'Miss lala lala you!',
                body: 'Would  kaka love to catch up sometimes',
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 15511399930594,
                to: 'user@NoteHub.com',
                from: 'mamam@mama.com'
            },
            {
                id: 'e105',
                name: 'mamam',
                subject: 'Miss lala lala you!',
                body: 'Would  kaka love to catch up sometimes',
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 1551133930594,
                to: 'user@NoteHub.com',
                from: 'mamam@mama.com'
            },
            {
                id: 'e106',
                name: 'mamam',
                subject: 'Miss lala lala you!',
                body: 'Would  kaka love to catch up sometimes',
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

    console.log('criteriaService', criteria);

    return storageService.query(MAILS_KEY).then(mails => {
        // console.log('mails', mails);

        if (criteria.status === 'inbox' && !criteria.txt) {
            const regex = new RegExp(criteria.txt, 'i')
            return mails.filter((mail) => {
                if (mail.from !== loggedinUser.mail) {
                    return mail
                }
            })
        }

        if (criteria.status === 'sent' && !criteria.txt) {
            const regex = new RegExp(criteria.txt, 'i')
            return mails.filter((mail) => {
                if (mail.from === loggedinUser.mail && !mail.isDraft) {
                    return mail
                }
            })
        }
        if (criteria.status === 'star' && criteria.isStared) {
            return mails.filter(mail => mail.isStared === criteria.isStared)
        }
        if (criteria.status === 'readMail') {
            console.log('hello from open');

            return mails.filter(mail => mail.isRead === criteria.isRead)
        }
        if (criteria.status === 'unreadMail') {
            console.log('hello from open');

            return mails.filter(mail => mail.isRead !== criteria.isRead)
        }
        if (criteria.status === 'trash' && criteria.isTrash) {
            console.log('im in trash');

            return mails.filter(mail => mail.isTrash === criteria.isTrash)
        }
        if (criteria.status === 'draft') {
            return mails.filter(mail => mail.isDraft === criteria.isDraft)
        }

        if (criteria.txt) {
            const regex = new RegExp(criteria.txt, 'i')
            mails = mails.filter((mail, idx) => {
                console.log('hii im here too');

                return (regex.test(mail.name) || regex.test(mail.subject) || regex.test(mail.body))
            })
        }

        // console.log('mail', mails);
        // console.log('criteria', criteria);

        return mails
    })

}

function remove(mailId) {
    return storageService.remove(MAILS_KEY, mailId)
}

function post(mail) {

    return storageService.post(MAILS_KEY, mail)
}


function getDefaultSentMail() {
    const mailSent = {
        name: loggedinUser.fullname,
        subject: '',
        body: '',
        sentAt: Date.now(),
        to: '',
        isRead: false,
        isStared: false,
        isChecked: false,
        isTrash: false,
        from: loggedinUser.mail
    }
    return mailSent
}
function getFilterCriteria() {
    const criteria = {
        status: 'inbox',
        txt: '',
        isRead: true,
        isStared: true,
        isTrash: false,
        isDraft: true,
        lables: ['important', 'romantic']
    }
    return criteria
}

function getLoggedUser() {
    return loggedinUser
}

function getUnreadMailCount() {
    return storageService.query(MAILS_KEY).then(mails => {
        const mailLength = mails.filter(mail => mail.isRead === false && mail.name !== loggedinUser.fullname)
        return mailLength.length
    })
}