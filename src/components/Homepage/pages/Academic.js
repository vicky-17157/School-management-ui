import React from 'react';
import ReactDOM from 'react-dom';
import './Academic.css';
//import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import StudentApp from './components/app';
import AdmissionDetails from './academics/pages/admissionentry';
import StudentDetail from './academics/pages/students';
import FacultyDetails from './academics/pages/facultyentry';
import Academicinfo from './academics/pages/home'
import FacultyDetail from './academics/pages/faculty'
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
     <Switch>
        <Route exact path="/" component={Academicinfo}/>
        <Route exact path="/admission" component={AdmissionDetails}/>
        <Route exact path="/student" component={StudentDetail}/>
        <Route exact path="/faculty" component={FacultyDetail}/>
    </Switch>
  </Router>,
  document.getElementById('root')
)
);
}

export default Academic;

