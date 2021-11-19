import React from 'react';
import ReactDOM from 'react-dom';
import './Academic.css';
//import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
//import StudentApp from './components/app';
import AdmissionDetails from './academics/pages/admissionentry';
import StudentDetail from './academics/pages/students';
import FacultyDetails from './academics/pages/facultyentry';
import Academicinfo from './academics/pages/home'
import FacultyDetail from './academics/pages/faculty'
import Homepgs from "../pages/Home";
import Contactus from "../pages/contactus";
import Aboutus from "../pages/Aboutus";
import Event from "../pages/Event";

//import AddAdmissionForm from './forms/admission_form';

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

/*ReactDOM.render(
  <React.StrictMode>
    <StudentApp />/pages/admissionentry
  </React.StrictMode>,
  document.getElementById('root')
);*/
function Academic() {
return (
ReactDOM.render(
  <Router>
    <Navbar />
     <Switch>
        <Route exact path="/academicspg/" component={Academicinfo}/>
        <Route exact path="/admission" component={AdmissionDetails}/>
        <Route exact path="/student" component={StudentDetail}/>
        <Route exact path="/faculty" component={FacultyDetail}/>
        <Route path="/" exact component={Homepgs} />
        <Route path="/eventpg" exact component={Event} />
        <Route path="/aboutpg" exact component={Aboutus} />
        <Route path="/contactpg" exact component={Contactus} />
    </Switch>
  </Router>,
  document.getElementById('root')
)
);
}

export default Academic;
