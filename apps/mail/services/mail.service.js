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
                id: utilService.makeId(),
                name: 'Harel',
                subject: 'Got you a big react project',
                body: utilService.makeLorem(),
                isRead: false,
                isStared: true,
                isChecked: false,
                isTrash: false,
                sentAt: 155133930594,
                to: 'user@NoteHub.com',
                from: 'Harel@nana.com'
            },
            {
                id: utilService.makeId(),
                name: 'Shimi',
                subject: 'Please help',
                body: utilService.makeLorem(),
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 115113930594,
                to: 'user@NoteHub.com',
                from: 'lala@lala.com'
            },
            {
                id: utilService.makeId(),
                name: 'Luli',
                subject: 'Nice to meet you',
                body: utilService.makeLorem(),
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 151115930594,
                to: 'user@NoteHub.com',
                from: 'mamam@mama.com'
            },
            {
                id: utilService.makeId(),
                name: 'Puki',
                subject: 'Hello there',
                body: utilService.makeLorem(),
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 15911399930594,
                to: 'user@NoteHub.com',
                from: 'mamam@mama.com'
            },
            {
                id: utilService.makeId(),
                name: 'Shuki',
                subject: 'Great news Nasdaq reach all time low',
                body: utilService.makeLorem(),
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 1511133930594,
                to: 'user@NoteHub.com',
                from: 'mamam@mama.com'
            },
            {
                id: utilService.makeId(),
                name: 'mamam',
                subject: 'Miss lala lala you!',
                body: utilService.makeLorem(),
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 1251133930594,
                to: 'user@NoteHub.com',
                from: 'mamam@mama.com'
            },
            {
                id: 'e101',
                name: 'Lavi',
                subject: 'Sorry to annouce',
                body: utilService.makeLorem(),
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 155133930594,
                to: 'user@NoteHub.com',
                from: 'nana@nana.com'
            },
            {
                id: utilService.makeId(),
                name: 'Halva',
                subject: 'Please ignore',
                body: utilService.makeLorem(),
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 155413930594,
                to: 'user@NoteHub.com',
                from: 'lala@lala.com'
            },
            {
                id: utilService.makeId(),
                name: 'Batel',
                subject: 'You won 100 new brands',
                body: utilService.makeLorem(),
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 155115930594,
                to: 'user@NoteHub.com',
                from: 'mamam@mama.com'
            },
            {
                id: utilService.makeId(),
                name: 'Or',
                subject: 'Miss  you!',
                body: utilService.makeLorem(),
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 15511699930594,
                to: 'user@NoteHub.com',
                from: 'mamam@mama.com'
            },
            {
                id: utilService.makeId(),
                name: 'Oren Charizard',
                subject: 'Come join us!',
                body: utilService.makeLorem(),
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 1556133930594,
                to: 'user@NoteHub.com',
                from: 'mamam@mama.com'
            },
            {
                id: utilService.makeId(),
                name: 'Kai',
                subject: 'Hello!',
                body: utilService.makeLorem(),
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 1551133960594,
                to: 'user@NoteHub.com',
                from: 'mamam@mama.com'
            },
            {
                id: utilService.makeId(),
                name: 'Kirbi',
                subject: 'Lets Eat it all!',
                body: utilService.makeLorem(),
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 1551133630594,
                to: 'user@NoteHub.com',
                from: 'mamam@mama.com'
            },
            {
                id: utilService.makeId(),
                name: 'Ronaldo',
                subject: 'Come play with me!',
                body: utilService.makeLorem(),
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 1551133930594,
                to: 'user@NoteHub.com',
                from: 'mamam@mama.com'
            },
            {
                id: utilService.makeId(),
                name: 'Obama',
                subject: 'Bad news on the east side',
                body: utilService.makeLorem(),
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 155113930594,
                to: 'user@NoteHub.com',
                from: 'mamam@mama.com'
            },
            {
                id: utilService.makeId(),
                name: 'Harel',
                subject: 'Go to notes!',
                body: utilService.makeLorem(),
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 155113930594,
                to: 'user@NoteHub.com',
                from: 'mamam@mama.com'
            },
            {
                id: utilService.makeId(),
                name: 'Frikase',
                subject: 'Buy frikase 0.99$',
                body: utilService.makeLorem(),
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 155113393594,
                to: 'user@NoteHub.com',
                from: 'mamam@mama.com'
            },
            {
                id: utilService.makeId(),
                name: 'linkedin',
                subject: 'found 12 jobs fit for your profile!',
                body: utilService.makeLorem(),
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 155113393054,
                to: 'user@NoteHub.com',
                from: 'mamam@mama.com'
            },
            {
                id: utilService.makeId(),
                name: 'Pikachu',
                subject: 'MAKAT BARAK',
                body: utilService.makeLorem(),
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 155113393594,
                to: 'user@NoteHub.com',
                from: 'mamam@mama.com'
            },
            {
                id: utilService.makeId(),
                name: 'Sells',
                subject: 'LO KANITA LO ASITA!',
                body: utilService.makeLorem(),
                isRead: false,
                isStared: true,
                isChecked: false,
                isTrash: false,
                sentAt: 155113393054,
                to: 'user@NoteHub.com',
                from: 'mamam@mama.com'
            },
            {
                id: utilService.makeId(),
                name: 'Matbuha',
                subject: 'Tasty',
                body: utilService.makeLorem(),
                isRead: false,
                isStared: true,
                isChecked: false,
                isTrash: false,
                sentAt: 155113393059,
                to: 'user@NoteHub.com',
                from: 'mamam@mama.com'
            },
            {
                id: utilService.makeId(),
                name: 'Shimi',
                subject: 'Hello!',
                body: utilService.makeLorem(),
                isRead: false,
                isStared: true,
                isChecked: false,
                isTrash: false,
                sentAt: 151133930594,
                to: 'user@NoteHub.com',
                from: 'mamam@mama.com'
            },
            {
                id: utilService.makeId(),
                name: 'slav',
                subject: 'Gozal',
                body: utilService.makeLorem(),
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: false,
                sentAt: 151133930594,
                to: 'user@NoteHub.com',
                from: 'mamam@mama.com'
            },
            {
                id: utilService.makeId(),
                name: 'Make Pire',
                subject: 'Potatos today!',
                body: utilService.makeLorem(),
                isRead: false,
                isStared: false,
                isChecked: false,
                isTrash: true,
                sentAt: 155133930594,
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
        isDraft: false,
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
        console.log('mailLength', mailLength);

        return mailLength.length
    })
}