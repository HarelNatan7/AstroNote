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
    getDefaultFilter,
}

function query(filterBy = getDefaultFilter()) {
    return storageService.query(NOTES_KEY)
        .then(notes => {
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                notes = notes.filter(note => regex.test(note.info.title))
            }
            if (filterBy.type) {
                const regex = new RegExp(filterBy.type, 'i')
                notes = notes.filter(note => regex.test(note.type))
            }
            return notes
        })
}

function getDefaultFilter() {
    return { txt: '', type: '' }
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
                isPinned: false,
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
                isPinned: true,
                info: {
                    title: 'The Best Player In The World',
                    url: 'https://www.youtube.com/embed/Rh6R4aMm_PA',
                    todos: []
                },
                style: {
                    backgroundColor: ''
                }
            },
            {
                id: 'n106',
                type: 'list-note',
                isPinned: true,
                info: {
                    title: 'My Todos',
                    todos: [
                        { txt: 'Mastering React', isDone: false },
                        { txt: 'Win The World Cup', isDone: false },
                        { txt: 'Be A Proffesional Full Stack Developer', isDone: false },
                        { txt: 'Kill The Pope', isDone: false },
                    ]
                },
                style: {
                    backgroundColor: 'lightpink'
                }
            },
        ]
        utilService.saveToStorage(NOTES_KEY, notes)
    }
}