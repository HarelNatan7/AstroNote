const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { AppHeader } from "./cmps/app-header.jsx"
import { About } from "./views/about.jsx"
import { Home } from "./views/home.jsx"
import { MailIndex } from "./apps/mail/views/mail-index.jsx"
import { NoteIndex } from "./apps/note/views/note-index.jsx"
import { MailDetails } from "./apps/mail/cmps/mail-details.jsx"
import { UserMsg } from "./cmps/user-msg.jsx"
import { NoteEdit } from "./apps/note/cmps/note-edit.jsx"



export function App() {
    return <section className="app-container flex">
        <Router >


            <section className="app-header">
                <AppHeader />
            </section>
            <main className="app-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/mail" element={<MailIndex />} />
                    <Route path="/mail/:mailId" element={<MailDetails />} />
                    <Route path="/note" element={<NoteIndex />} >
                        <Route path="/note/edit" element={<NoteEdit />} />
                        <Route path="/note/edit/:noteId" element={<NoteEdit />} />
                    </Route>
                </Routes>
            </main>
            <UserMsg />
        </Router>
    </section>
}
