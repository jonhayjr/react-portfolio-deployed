import {useState, useEffect} from 'react';
import axios from 'axios';

//Import config 
import config from '../config';

//Import Components
import Project from '../Project/Project';

const Projects = () => {

//Set state
  const [skill, setSkill] = useState('All');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //Set isLoading to true
    setIsLoading(true);
    //Get data from projects api
    axios.get(`${config.apiBaseUrl}/projects`)
    .then(res => {
        setData(res.data.data);
        console.log(res.data.data);
        setIsLoading(false);
    })
  }, []);

    //Filter data by skill and update data state
    const filterBySkill = (skill) => {
        //If skill is All, use projects api.  If skill is not All, use projects/:skill api
        const apiUrl = skill ==='All' ? `${config.apiBaseUrl}/projects` : `${config.apiBaseUrl}/projects/${skill}`;
    
        //Get project by skill from skills api
        axios.get(`${apiUrl}`)
        .then(res => {
            setData(res.data.data);
        })
      }
    
      //Function that handle change to skill that is selected
      const handleSkillChange = (skill) => {
        setSkill(skill);
        filterBySkill(skill);
      }


    const handleChange = (e) => {
        handleSkillChange(e.target.value);
    }
    return (
        <div>
            <section className="p-3 p-lg-4" id="projects">
                <div className="container-fluid">
                    <div className="row text-center">
                        <div className="col">
                            <h5 className="display-4 text-white mb-4">Projects</h5>
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
