const { Outlet, Link } = ReactRouterDOM

export function About() {
    return <section className="about">

        <div className="detail-container">
            <div className="oren">
                <div className="oren-img">
                    <img src="../assets/img/oren.jpg" alt="sss" />
                </div>

                <div className="link-container">
                    <a href="https://www.linkedin.com/in/oren-kot-1344681b4/" className="fa-brands fa-linkedin"></a>
                    <a href="https://github.com/OrenKotSalomon" className="fa-brands fa-square-github"></a>
                </div>
            </div>
            <div className="harel">
                <div className="harel-img">
                    <img src="../../assets/img/me.jpg" alt="sss" />
                </div>

                <div className="link-container">
                    <a href="https://www.linkedin.com/in/oren-kot-1344681b4/" className="fa-brands fa-linkedin"></a>
                    <a href="https://github.com/OrenKotSalomon" className="fa-brands fa-square-github"></a>
                </div>
            </div>
            <footer className="">
                <h3>Our names are Harel Natan and Oren Kot, we are Full Stack Developers,
                    we made AstroNote while doing The Coding
                    Academy Bootcamp, Thats was our first react project
                    together You Have here a nice examples for the
                    power of react, Enjoy 😎</h3>
            </footer>
        </div>


        <div className="about-header">
            {/* <img src='../../assets/img/Me.jpg' /> */}
        </div>
        {/* <h3>My name is Harel Natan, Im a Full Stack Developer,
            I made this Book Store while doing The Coding
            Academy Bootcamp, Thats was my first react project
            You Have here a nice examples for the
            power of react, Enjoy 😎</h3> */}

        {/* <div className="nested-route">
        <Outlet />
    </div> */}
    </section>
}
