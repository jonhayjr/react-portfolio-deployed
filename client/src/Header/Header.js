import {useState} from 'react';

const Header = () => {
    //Set state
    const [hover, setHover] = useState(false);
    const [color, setColor] = useState('orange');

    //Function to toggle background image color
    const toggleColor = () => {
        if (color === 'orange') {
            setColor('purple');
        } else {
            setColor('orange');
        }
    }
    
    //Function to handle hover.  Updates hover to opposite value and toggles color 
    const handleHover = () => {
        setHover(!hover);
        toggleColor();
    }

    //Variable to store class name
    const className = `header header-background jumbotron-fluid background-image-${color}`;
    

    return (
        <header className={className}>
            <div className="container-fluid py-5" onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <div className="row text-white text-center">
                <div className="col">
                    {!hover && <p id="header-text-1" className="header-text">My name is Jon</p>}
                    { hover && <p id="header-text-2" className="header-text">And I'm a full stack developer from Santa Barbara.</p>}
                </div>
            </div>
            </div>
      </header>
    )
}

export default Header
