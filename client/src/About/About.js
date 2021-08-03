//Import image
const About = () => {
    return (
        <div>
            <section className="p-3 p-lg-4" id="about"> 
                <div className="container-fluid">
                    <div className="row text-white text-center">
                    <div className="col">
                        <h5 className="display-4">About</h5>
                        <img src={`${process.env.PUBLIC_URL}/img/JonHeadshot.jpeg`} className="img-fluid img-radius my-3" alt="Jon Headshot"/>
                        <p className="lead line-height">I took my first programming class in high school, and since then, I have had an interest in programming.  In September 2020, I decided to make learning to code a priority by setting aside an "hour of learning" each day.  In January 2021, I decided to take my learning journey to the next level and enrolled in the Front End Development Techdegree Program with Treehouse.</p>
                    </div>
                    </div>
                </div>
            </section>
            <hr/>
        </div>
    )
}

export default About
