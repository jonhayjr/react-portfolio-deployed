const Skills = () => {
    const handleClick = (e) => {
        //Get current skill and make lowercase
        const skill = e.target.innerText.toLowerCase();
        //Get current class
        const currentClass = e.target.className;
        //Initialize new class variable
        let newClass;
        
        //If class contains inverted, replace with blank.  If it doesn't contain inverted, add it.
        if (currentClass.indexOf('inverted') >= 0) {
            newClass = currentClass.replace('-inverted', '');
        } else {
            newClass = currentClass.replace(`list-item-${skill}`, `list-item-${skill}-inverted`);
        }

        //Update to new class
        e.target.className = newClass;
    }

    return (
        <div>
            <section className="skills p-3 p-lg-4" id="skills">
                <div className="container-fluid">
                <div className="row text-center">
                    <div className="col">
                    <h5 className="display-4 text-white mb-4">Skills</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <ul className="list-group text-center">
                        <li className="list-group-item list-item-html5 font-weight-bold mb-2 w-75 mx-auto" onClick={handleClick}>HTML5</li>
                        <li className="list-group-item list-item-css3 font-weight-bold mb-2 w-75 mx-auto" onClick={handleClick}>CSS3</li>
                        <li className="list-group-item list-item-javascript font-weight-bold mb-2 w-75 mx-auto" onClick={handleClick}>JavaScript</li>
                        <li className="list-group-item list-item-sass font-weight-bold mb-2 w-75 mx-auto" onClick={handleClick}>Sass</li>
                        <li className="list-group-item list-item-github font-weight-bold mb-2 w-75 mx-auto" onClick={handleClick}>Github</li>
                        <li className="list-group-item list-item-git font-weight-bold mb-2 w-75 mx-auto" onClick={handleClick}>Git</li>
                        <li className="list-group-item list-item-bootstrap font-weight-bold mb-2 w-75 mx-auto" onClick={handleClick}>Bootstrap</li>
                        <li className="list-group-item list-item-react font-weight-bold mb-2 w-75 mx-auto" onClick={handleClick}>React</li>
                        <li className="list-group-item list-item-node font-weight-bold mb-2 w-75 mx-auto" onClick={handleClick}>Node</li>
                        <li className="list-group-item list-item-express font-weight-bold mb-2 w-75 mx-auto" onClick={handleClick}>Express</li>
                        <li className="list-group-item list-item-sql font-weight-bold mb-2 w-75 mx-auto" onClick={handleClick}>SQL</li>
                    </ul>
                    </div>
                </div>
                </div>
                
            </section>
        <hr/>
        </div>
    )
}

export default Skills
