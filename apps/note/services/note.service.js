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
    console.log('note:', note)
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
    return  {
            id: '',
            type: 'note-txt',
            isPinned: false,
            info: {
                txt: ''
            }
    }
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY)
    if (!notes || !notes.length) {
        notes = [
            {
                id: 'n101',
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sit sequi commodi inventore amet facilis vel accusamus.'
                }
            },
            {
                id: 'n102',
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ut.'
                }
            },
            {
                id: 'n103',
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: '    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat vitae eligendi similique provident? Deserunt, modi.'
                }
            },
            // {
            //     id: 'n102',
            //     type: 'note-img',
            //     info: {
            //         url: 'http://some-img/me',
            //         title: 'Bobi and Me'
            //     },
            //     style: {
            //         backgroundColor: '#fff'
            //     }
            // },
            // {
            //     id: 'n103',
            //     type: 'note-todos',
            //     info: {
            //         label: 'Get my stuff together',
            //         todos: [
            //             { txt: 'Driving liscence', doneAt: null },
            //             { txt: 'Coding power', doneAt: 187111111 }
            //         ]
            //     }
            // }
        ]
        utilService.saveToStorage(NOTES_KEY, notes)
    }
}