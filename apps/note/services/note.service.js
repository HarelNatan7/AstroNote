import { storageService } from '../../../services/async-storage.service.js';
import { utilService } from '../../../services/util.service.js';

const NOTES_KEY = 'notesDB'
_createNotes()

export const noteService = {
    query,
    get,
    post,
    remove,
    save,
    getEmptyNote,
    // getDefaultFilter,
}

function query() {
    return storageService.query(NOTES_KEY)
        .then(notes => {
            return notes
        })
}

function get(noteId) {
    console.log('noteId:', noteId)
    return storageService.get(NOTES_KEY, noteId)
}

function remove(noteID) {
    return storageService.remove(NOTES_KEY, noteID)
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTES_KEY, note)
    } else {
        return post(note)
    }
}

function post(newNote) {
    return storageService.post(NOTES_KEY, newNote)
}

function getEmptyNote() {
    return {
        id: '',
        type: 'txt-note',
        isPinned: false,
        info: {
            txt: '',
            todos: []
        },
        style: {
            backgroundColor: ''
        }
    }
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY)
    if (!notes || !notes.length) {
        console.log('notes:Are You?', notes)
        notes = [
            {
                id: 'n101',
                type: 'txt-note',
                isPinned: false,
                info: {
                    txt: 'I Like To Move It Move It',
                    todos: []
                },
                style: {
                    backgroundColor: ''
                }
            },
            {
                id: 'n102',
                type: 'txt-note',
                isPinned: false,
                info: {
                    txt: '“A girl is allowed to be crazy as long as she is equally hot. Thus, if shes *this* crazy, she has to be *this* hot. You want the girl to be above this line. Also known as the ‘Vickie Mendoza Diagonal.’ This girl I dated. She played jump rope with that line. She’d shave her head, then lose 10 pounds. She’d stab me with a fork, then get a boob job. [Pauses] I should give her a call.”',
                    todos: []
                },
                style: {
                    backgroundColor: 'lightseagreen'
                }
            },
            {
                id: 'n103',
                type: 'txt-note',
                isPinned: false,
                info: {
                    txt: '“When I get sad, I stop being sad and be awesome instead.”',
                    todos: []
                },
                style: {
                    backgroundColor: ''
                }
            },
            {
                id: 'n104',
                type: 'img-note',
                info: {
                    url: 'https://miro.medium.com/max/800/0*0ZgS_Z1-5VBdbN3u.png',
                    title: 'The Best Framework'
                },
                style: {
                    backgroundColor: 'sandybrown'
                }
            },
            {
                id: 'n105',
                type: 'video-note',
                info: {
                    title: 'The Best Player In The World',
                    url: 'https://www.youtube.com/embed/Rh6R4aMm_PA',
                    todos: [
                        { txt: 'Driving liscence', doneAt: null },
                        { txt: 'Coding power', doneAt: 187111111 }
                    ]
                },
                style: {
                    backgroundColor: ''
                }
            },
        ]
        utilService.saveToStorage(NOTES_KEY, notes)
    }
}