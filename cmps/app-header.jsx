const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {

    return <header className="app-header-container">
        <div className="header-container">
            <Link to="/"><img className="logo" src='../../assets/svg/Astronote-Cyan.svg' /></Link>
            <nav className="app-nav">
                <div className="nav-link-container">
                    <NavLink to="/" className="fa-solid fa-home"><span>Home</span></NavLink>
                </div>
                <div className="nav-link-container">
                    <NavLink to="/mail" className="fa-solid fa-mail"><span>Mail</span></NavLink>
                </div>
                <div className="nav-link-container">
                    <NavLink to="/note" className="fa-solid fa-notes"><span>Notes</span></NavLink>
                </div>
                <div className="nav-link-container">
                    <NavLink to="/about" className="fa-solid fa-about"><span>About</span></NavLink>
                </div>
            </nav>
        </div>
    </header >
}
