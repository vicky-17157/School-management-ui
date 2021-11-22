import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Homepage/Navbar/Navbar";
import Homepgs from "./Homepage/pages/Home";
import Contactus from "./Homepage/pages/contactus";
import Aboutus from "./Homepage/pages/Aboutus";
import Event from "./Homepage/pages/Event";
import Academic from "./Homepage/pages/Academic"

import "./App.css";
import AdmissionDetails from "./Homepage/pages/academics/pages/admissionentry";
import StudentDetail from "./Homepage/pages/academics/pages/students";
import FacultyDetail from "./Homepage/pages/academics/pages/faculty";
//import Footer from "./Homepage/Footer/footer";





function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepgs} />
          <Route path="/academicspg" exact component={Academic} />
          <Route path="/eventpg" exact component={Event} />
          <Route path="/aboutpg" exact component={Aboutus} />
          <Route path="/contactpg" exact component={Contactus} />
          <Route path="/admission" exact component={AdmissionDetails} />
          <Route path="/student" exact component={StudentDetail} />
          <Route path="/faculty" exact component={FacultyDetail} />
        </Switch>
        
      </Router>
      


      
      


        


    


      
    </div>
  );
}

export default App;
