import {useState, useEffect} from 'react';
import axios from 'axios';

//Import config 
import config from '../config';

//Import Components
import Project from '../Project/Project';

const Projects = () => {

  //Set state
  const [skill, setSkill] = useState(localStorage.getItem('skill') ? localStorage.getItem('skill') : 'All');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    //Set isLoading to true
    setIsLoading(true);

    //Set URL based on skill value
    const url = skill === 'All' ? `${config.apiBaseUrl}/projects` : `${config.apiBaseUrl}/projects/${skill}`

    //Get data from projects api
    axios.get(url)
    .then(res => {
        setData(res.data);
        setIsLoading(false);
    })
  }, [skill]);

   
    const handleChange = (e) => {
        //Set state for skill
        setSkill(e.target.value);

        //Set skill value in local storage
        localStorage.setItem('skill', e.target.value);
    }

    return (
        <div>
            <section className="p-3 p-lg-4" id="projects">
                <div className="container-fluid">
                    <div className="row text-center">
                        <div className="col">
                            <h5 className="display-4 text-white mb-4">Projects</h5>
                            <form className="mb-4">
                                <select className="form-select-lg form-select-sm my-3 custom-select" aria-label="default select example" onChange={handleChange} value={skill}>
                                <option disabled value="none">Filter by skill</option>
                                    <option value="All">All</option>
                                    <option value="HTML">HTML</option>
                                    <option value="CSS">CSS</option>
                                    <option value="JavaScript">JavaScript</option>
                                    <option value="Sass">Sass</option>
                                    <option value="API">API</option>
                                    <option value="SVG">SVG</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
                {isLoading ?
                <p className="lead text-white mb-4 text-center mt-4">Loading...</p>
                : <Project projects={data}/>
                }
            </section>
            <hr/>
        </div>
    )
}

export default Projects
