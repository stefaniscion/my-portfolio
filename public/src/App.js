import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionNavbar from './SectionNavbar.js';
import SectionAbout from './SectionAbout.js';
/*
import SectionSkills from './SectionSkills.js';
import SectionStack from './SectionStack.js';
import SectionExperience from './SectionExperience.js';
import SectionFormation from './SectionFormation.js';
import SectionAccolades from './SectionAccolades.js';
import SectionOthers from './SectionOthers.js';*/

function App() {
    return (  
        <div id="app">
            <SectionNavbar />
            <SectionAbout />
        </div>
        /*<SectionSkills />*/
        /*<SectionStack />*/
        /*<SectionExperience />*/
        /*<SectionFormation />*/
        /*<SectionAccolades />*/
        /*<SectionOthers />*/
    );
}
export default App;