import React from "react";
import "./Home.css";
import Footer from "../Footer/footer"
function Homepgs() {
  function onLoad(){  
    window.location = "/aboutpg";  }
  
    
  
  
  return (
    <div>
    
      <div className="background">


        <div className="content">
          <h1>
            ARE YOU READY TO APPLY? 
          </h1>
          <p>"Education is the most powerful weapon which you can use to change the world"
            <br />
            Education is key of success</p>
            <div className="button-home">
              <button className="button1"onClick={onLoad}><span className="span1"></span>READ MORE</button>
             
              
            </div>
    
        </div>
        

      </div>
     <Footer />
    </div>
  );
}

export default Homepgs;

