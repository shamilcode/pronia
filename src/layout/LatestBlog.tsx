function LatestBlog() {
    return (
        <section id="latestblog">
            <h2 style={{
                fontWeight: 700,
                fontSize: "36px",
                color: "#393939",
                textTransform: "uppercase",
                textAlign: "center"
            }}>
                Latest Blog
            </h2>

            <p id="subtitle">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
            </p>

            <div id="content">
                <div className="card">
                    <div id="top">
                        <p>By: Admin</p>
                        <p>24 April 2021</p>
                    </div>

                    <p id="titletext">There Many Variations</p>
                    <p id="subtitletext">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis,
                        quas. Assumenda quas consequatur dolorem minus voluptatem eaque sunt iure impedit.
                    </p>

                    <img src="https://htmldemo.net/pronia/pronia/assets/images/blog/medium-size/1-2-310x220.jpg" />
                </div>

                <div className="card">
                    <div id="top">
                        <p>By: Admin</p>
                        <p>24 April 2021</p>
                    </div>

                    <p id="titletext">There Many Variations</p>
                    <p id="subtitletext">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis,
                        quas. Assumenda quas consequatur dolorem minus voluptatem eaque sunt iure impedit.
                    </p>

                    <img src="https://htmldemo.net/pronia/pronia/assets/images/blog/medium-size/1-3-310x220.jpg" />
                </div>

                <div className="card">
                    <div id="top">
                        <p>By: Admin</p>
                        <p>24 April 2021</p>
                    </div>

                    <p id="titletext">There Many Variations</p>
                    <p id="subtitletext">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis,
                        quas. Assumenda quas consequatur dolorem minus voluptatem eaque sunt iure impedit.
                    </p>

                    <img src="https://htmldemo.net/pronia/pronia/assets/images/blog/medium-size/1-1-310x220.jpg" />
                </div>
            </div>
        </section>
    )
}

export default LatestBlog