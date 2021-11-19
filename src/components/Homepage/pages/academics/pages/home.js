import React from 'react';
import { useState } from 'react';
import img from './Admission.jpg';
import im from './Undergraduates.jpg';
import imgs from './faculty.jpg'
import './home.css'
import AdmissionDetails from './admissionentry';
import {  Route, Router, Link, Switch } from "react-router-dom";







    
const Academicinfo = () =>{
    const [isPreviewShown, setPreviewShown] = useState(false);
    function handleSubmit(e){
        e.preventDefault();
    
        setPreviewShown(true); // Here we change state
    }
  return (
    <div className="yty">
      <h1 className="gg">Academic Information</h1>
      <div className="yty">
          <h3 className="gg1">Academic Details</h3>
          <p className="academic-para">MGM students come from across the U.S. and the world, representing diverse experiences, backgrounds and cultures.</p>
          
          {/* <button onClick={clickme} className="btn">Apply Now</button> */}

          
        
          <Link to="/admission">
            <div><img className="ig"src={img} alt='Logo' />
            <h1 className="centered"><button>Apply Now</button></h1>
            </div>
            </Link>
            
            <div className="yty">
            <div className="divleft">
            <h2 >Student Details </h2>
          <p >About 1,700 freshmen and 30 transfer students are admitted to Stanford each year.
            <br />
             We review each applicant with an eye to academic excellence, intellectual vitality and 
            
             personal context.</p>
          <p>The Associated Students of Stanford University (ASSU) is the student government for 
            
            Stanford and all registered students are members. Its elected leadership consists of the Undergraduate Senate elected by the undergraduate students, the Graduate Student Council elected by the graduate students, and the President and Vice President elected as a ticket by the entire student body.</p>
            <Link to="/student">
              <div><img className="pi"src={im} alt='Logo'/>
              <h1 className="bottom-left"><button> Student Information</button></h1>
              </div>
              </Link> 
              </div>
        
        
        <div className="divright">
          <h2>Faculty Details</h2>
          <p>MGM Engineering has long been at the forefront of groundbreaking research, education and innovation. Through the development and application of engineering principles across disciplines, we are tackling the major challenges of the 21st century.</p>
          <p>Many MGM faculty members live in the "Faculty Ghetto," within walking or biking distance of The academic central campus is adjacent to Palo Alto, bounded by El Camino Real, Stanford Avenue, Jane Stanford Way, and Sand Hill Road. Many Stanford faculty members live in the "Faculty Ghetto," </p>
            <Link to='/faculty'>
              <div className="img"><img className="ip"src={imgs} alt='Logo'/>
              
              <h1 className="bottom-right"><button> Faculty information</button></h1>
              
              </div>
              </Link>
          </div>
          
            </div>
            
          
          
      </div>
    </div>
  );
}

export default Academicinfo;