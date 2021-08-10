const About = () => {
    return (
        <div>
            <section className="p-3 p-lg-4" id="about"> 
                <div className="container-fluid">
                    <div className="row text-white text-center">
                    <div className="col">
                        <h5 className="display-4">About</h5>
                        <img src={`${process.env.PUBLIC_URL}/img/JonHeadShot.jpeg`} className="img-fluid img-radius my-3" alt="Jon Headshot"/>
                        <p className="lead line-height">My passion for programming began after I took my first programming class in high school.  In January 2021, I decided to take this passion to the next level and enrolled in the Front End Development Techdegree Program with Team Treehouse.  After completing this Techdegree, I still wanted to learn more and decided to pursue the Full Stack JavaScript Techdegree which I completed in July 2021.  In my free time, you can find me learning new programming technologies or building cool projects.  You can check out some of those projects below.</p>
                    </div>
                    </div>
                </div>
            </section>
            <hr/>
        </div>
    )
}

export default About
