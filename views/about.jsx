const { Outlet, Link } = ReactRouterDOM

export function About() {
    return <div className="about-container">

        <div className="about-imgs-container">
            <img src="./assets/img/oren.jpg" alt="sss" />
            <img src="./assets/img/AI Me.jpg" alt="sss" />
        </div>


        {/* <div className="oren">

            <div className="link-container">
                <a href="https://www.linkedin.com/in/oren-kot-1344681b4/" className="fa-brands fa-linkedin"></a>
                <a href="https://github.com/OrenKotSalomon" className="fa-brands fa-square-github"></a>
            </div>
        </div>

        <div className="harel">
            <div className="harel-img">

            </div>

            <div className="link-container">
                <a href="https://www.linkedin.com/in/oren-kot-1344681b4/" className="fa-brands fa-linkedin"></a>
                <a href="https://github.com/OrenKotSalomon" className="fa-brands fa-square-github"></a>
            </div>
        </div> */}

        <div className="about-txt">
            <h3>Our names are Harel Natan and Oren Kot, we are Full Stack Developers,
                we made AstroNote while doing The Coding
                Academy Bootcamp, Thats was our first react project
                together You Have here a nice examples for the
                power of react, Enjoy 😎</h3>
        </div>
    </div>

}
