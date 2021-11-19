import React from "react";
import { TiContacts,TiMail, TiLocation } from "react-icons/ti";
import "./contactus.css"
import Footer from "../Footer/footer"
function Contactus() {
  return (
      <div className='contact'>
    <><><div classname="page-heading">
          <h1 className='d11'> Contact Us</h1>
          <h2 className='d22'>Feel free  to reach out to us </h2>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
      </div><div className="flexbox-container">
              <div className="flexbox-item flexbox-item-1">
                  <table>
                      <tr>
                          <td className='large'><TiMail /></td><br />


                      </tr>
                      <tr>

                          <td className='bold'>email Id</td>
                          <td><div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div></td>
                      </tr>
                      <tr>

                          <td><a href="https://www.google.com/intl/en_in/gmail/about/"> mgmhsstvla44@gmail.com</a></td>
                      </tr>
                  </table>

              </div>
              <div className="flexbox-item flexbox-item-2">
                  <table>
                      <tr>
                          <td className='largerr'><TiContacts /></td>

                      </tr>
                      <tr>

                          <td className='bold'>   Phone No :</td> <hr />
                          <td><div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div></td>
                      </tr>
                      <tr>

                          <td> 0469-262425 <br />
                               0469-2785425
                          <br />
                          </td>
                      </tr>
                  </table>
              </div>
              <div className="flexbox-item flexbox-item-3">
                  <table>
                      <tr>
                          <td className='large1'><TiLocation /></td>

                      </tr>
                      <tr>

                          <td className='bold'>Address</td>
                          <td><div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div></td>
                      </tr>
                      <tr>

                          <td>
                          <p>M.G.M Higher Secondary School,
                          <br />
                          Market Junction, Thiruvalla-689101
                          <br />
                           Pathanamthitta District, Kerala State<br />
                           </p>
          
                          </td>
                      </tr>
                  </table>
              </div>

          </div></><br /><br /><br /><br /><br /><br /></>
          <Footer />
          </div>
    
  );
}

export default Contactus;