const { Outlet, Link } = ReactRouterDOM

export function About() {
    return <section className="about">

        <div className="detail-container">
            <div className="oren">
                <div className="oren-img">
                    <img src="../../assets/img/oren.jpg" alt="sss" />
                </div>
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat laborum nam nobis odit fugiat soluta tempora vitae iure atque beatae, maxime, incidunt, a provident inventore sed exercitationem maiores excepturi culpa esse? Facere accusamus doloremque consectetur nobis atque. Provident, fugit corrupti mollitia, neque vitae nemo error consequatur optio, minus distinctio cumque harum numquam. Voluptates labore cum quod aliquam veniam nesciunt, culpa magni similique repudiandae nostrum vel, hic, laudantium molestiae consequuntur porro fugit! Distinctio iusto quaerat fuga quod necessitatibus. Minima nobis distinctio odio incidunt perspiciatis dolores facilis! Assumenda, ipsa pariatur incidunt ipsam molestias iste. In magnam voluptatem tempore molestias inventore? Natus, iusto nam illum ipsum alias quidem laborum cupiditate ratione perferendis, labore explicabo sint nihil magni deserunt non consequatur exercitationem cumque fugiat corrupti, placeat eveniet laudantium! Voluptatum quae quis, inventore, suscipit perspiciatis, fuga aliquid maxime laboriosam veniam nisi vitae nemo. Earum, laboriosam sequi deserunt aliquam omnis delectus dolore sint. Repudiandae perspiciatis sint adipisci quo nisi laborum necessitatibus, maxime, qui dicta fugit quidem, repellat illum? Ad cupiditate pariatur itaque illum rem vero at, quas debitis aliquid nemo modi animi sequi. Doloribus, consequuntur voluptate maiores quo molestiae veritatis laborum perspiciatis ullam sint vitae, commodi repellendus consequatur. Modi iste suscipit repellat, dolorem ipsa possimus!</h3>
                <footer className="btn-footer">
                    here goes buttons
                </footer>
            </div>
            <div className="harel">
                <div className="harel-img">
                    <img src="../../assets/img/me.jpg" alt="sss" />
                </div>
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat laborum nam nobis odit fugiat soluta tempora vitae iure atque beatae, maxime, incidunt, a provident inventore sed exercitationem maiores excepturi culpa esse? Facere accusamus doloremque consectetur nobis atque. Provident, fugit corrupti mollitia, neque vitae nemo error consequatur optio, minus distinctio cumque harum numquam. Voluptates labore cum quod aliquam veniam nesciunt, culpa magni similique repudiandae nostrum vel, hic, laudantium molestiae consequuntur porro fugit! Distinctio iusto quaerat fuga quod necessitatibus. Minima nobis distinctio odio incidunt perspiciatis dolores facilis! Assumenda, ipsa pariatur incidunt ipsam molestias iste. In magnam voluptatem tempore molestias inventore? Natus, iusto nam illum ipsum alias quidem laborum cupiditate ratione perferendis, labore explicabo sint nihil magni deserunt non consequatur exercitationem cumque fugiat corrupti, placeat eveniet laudantium! Voluptatum quae quis, inventore, suscipit perspiciatis, fuga aliquid maxime laboriosam veniam nisi vitae nemo. Earum, laboriosam sequi deserunt aliquam omnis delectus dolore sint. Repudiandae perspiciatis sint adipisci quo nisi laborum necessitatibus, maxime, qui dicta fugit quidem, repellat illum? Ad cupiditate pariatur itaque illum rem vero at, quas debitis aliquid nemo modi animi sequi. Doloribus, consequuntur voluptate maiores quo molestiae veritatis laborum perspiciatis ullam sint vitae, commodi repellendus consequatur. Modi iste suscipit repellat, dolorem ipsa possimus!</h3>
                <footer className="btn-footer">
                    here goes buttons
                </footer>
            </div>
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
