const { Outlet, Link } = ReactRouterDOM

export function About() {
    return <section className="about">
    <div className="about-header">
        {/* <img src='../../assets/img/Me.jpg' /> */}
    </div>
    <h3>My name is Harel Natan, Im a Full Stack Developer,
        I made this Book Store while doing The Coding
        Academy Bootcamp, Thats was my first react project
        You Have here a nice examples for the
        power of react, Enjoy 😎</h3>

    {/* <div className="nested-route">
        <Outlet />
    </div> */}
</section>
}
