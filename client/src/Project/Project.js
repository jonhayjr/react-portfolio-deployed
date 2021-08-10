const Project = ({projects}) => {

    const projectElements = 
    projects
    ?
            projects.map((project, index) =>
            
        (
            <div className="text-center mb-4 col-xs-12 col-md-6 col-lg-4" key={index} data-index={index}>
                <div className="card text-center bg-light border-dark rounded h-100 p-4">
                    <img src={`${process.env.PUBLIC_URL}/img/${project.image}`} className="card-img-top img-fluid mb-4" alt={project.name}/>
                    <div className="card-body d-flex flex-column text-center">
                        <h5 className="card-title">{project.name}</h5>
                        <p className="card-text">{project.description}</p>
                        <p className="skills-used mt-auto card-text"><span className="font-weight-bold">Skills Used:</span> {project.skills}</p>
                        <a href={project.github} className="btn btn-secondary mb-4" target="_blank" rel="noopener noreferrer">View Code</a>
                        <a href={project.livepreview} className="btn btn-dark" target="_blank" rel="noopener noreferrer">Go to Website</a>
                    </div> 
                </div>
            </div>
        )
    )
    : '';

    return (
        <div className="container-fluid">
            <div className="row">
                {
                projectElements
                }
                </div>
        </div>
    )
}

export default Project
