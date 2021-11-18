import React from 'react'
import "./About.css"
import img from '../images/school.jpg'
import img1 from '../images/logo.jpg'
import img2 from '../images/bk.jpg'
import img3 from '../images/bus.jpg'
import img4 from '../images/class.jpg'
import img5 from '../images/children.jpg'
import img6 from '../images/1.jpg'
import img7 from '../images/2.jpg'
import img8 from '../images/3.jpg'
import { Grid } from '@material-ui/core'
export default function Aboutus() {
    return (    
    <div className="about">
      <h1 className="div1"><center>ABOUT <font>MGM</font></center></h1>
      <h2 id="motto"><p><center>A place for learning, discovery, innovation, expression and discourse</center></p></h2>
      <img className="div2" src={img}></img>
      <br/>
    <div>

        <section><h2 className="div3"><center>VISION AND MISSION</center></h2></section>
        
        <table>
              <tr>
                  <th className="div4"><h3>Vision</h3></th>
                  <th className="div4"><h3>Mision</h3></th>
              </tr>

              <tr>
                  <td className="sp"><p>Developing into a world-class, pace-setting Institute with distinct identity and character, meeting the goals and aspirations of the society.</p></td>
                  <td className="sp">
                      <ul>
                          <li>To maintain a conducive infrastructure and learning environment for world class education.</li>
                          <li>To nurture a team of dedicated, competent and research oriented faculty.</li>
                          <li>To develop students with moral & ethical values, for their successful career by offering variety of programmes and services.</li>
                      </ul>
                 </td>
              </tr>
        </table>
        
        
    </div>
    <br />
    <div>
          <h2 className="div3"><center>OVERVIEW</center></h2>
    </div>
    <br/>
    <div className="grid">
        <Grid container>
            <Grid>    
        <table>
            <tr>
                <td><img className="div9" src={img2}></img></td>
                <td><p className="div10">The establishment of our school ,was the fulfillment of a long cherished dream of providing
                                          facilities for education to children .Discipline, hard work, positive thinking,commitment to
                                          excellence and abiding faith in the Almighty are the guiding principles of our school.</p></td>
            </tr>
            <tr>
                
               <td><p className="div10">A lot of facilities are provided here for personality development, yoga and meditation training,
                                        learning skills development, communication skills development, expert counselling services,
                                         special tuition and coaching for weaker students and sports and games facilities.</p></td> 
                <td><img className="div9" src={img3}></img></td>
            </tr>
            <tr>
                <td><img className="div9" src={img4}></img></td>
                <td><p className="div10"> Situated in a serene and picturesque location at the foot-hills of the High Range Mountains,
                                          the campus provides an environment conducive to learning and achieving the academic and aspirations
                                           of the students. We are dedicated to preserve the eco-systems and live in harmony with nature.
                                            We maintain a green and absolutely clean campus. We use only wooden furniture in the school. 
                               and hostels.</p></td>
            </tr> 
            <tr>
                <td><p className="div10">We follows a strategic planning approach to development insisting on Total Quality Management and continuous improvement at all levels.
                                      We aim to achieve 100% results in examinations for all our students.We have a team of well-qualified, dedicated and training teachers 
                                      and we follow the most innovative teaching-learning processes.MGM is also an ISO 9001:2007 certified institution.Every talent and innovation
                                       is encouraged in order to bring out the best in students. We are committed to provide the best learning experience for students.</p></td>
                <td><img className="div9" src={img5}></img></td>               
            </tr>
        </table> 
         </Grid>
         </Grid>
    </div>
    <div>
        <h2 className="div3"><center>HISTORY</center></h2>
        <br/>
        <table>
            <tr className="hp">
                <td className="sm"><img className="gb" src={img6}></img><br/>
                <h3> MGM History</h3>
                <p> It is established in 1971 and owned by "Catholicate & M.D Schools Corporate under the control of Malankara Orthodox Syrian Church'.
                     The school celebrated its centenary in 2002.</p>
                </td>
                <td className="sm"><img className="gb" src={img7}></img><br/>
                <h3>MGM Then & Now</h3>
                 <p>MGM has changed with the world over the last 50 years, often leading the way with new ideas and discoveries.</p>
                </td>
                <td className="sm">
                    <img className="gb" src={img8}></img>
                    <h3>MGM Experience</h3>
                    <p>The institution brings to bear a focus not only on academic excellence, but also cultural, emotional and spiritual empowerment of youth. </p>
                </td>
                    
            </tr>
        </table>
    </div>
    <div classnName="img">
          <h2 className="div3"><center>SCHOOL EMBLEM</center></h2>
          <center><img src={img1}></img></center>
          <br/>
    </div>
    
    </div>
  );
}

