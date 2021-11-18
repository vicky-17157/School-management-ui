import React,{component} from 'react';
import '../pages/event.css'
import img3 from '../images/cultural.jpeg' ;
import school from '../images/school.jpeg' ;
import img1 from '../images/teachers day.jpeg' ;
import img2 from '../images/childerns day.jpeg' ;
function Event() {
    return (
      <div className='body'>  <header className="d1"><h1><i>Events & Activities</i></h1></header>
      <section className="d2"><h3>We are Greatful to have you at our Website</h3></section>
          <br />
          <br />
          <br />
          <br />
      <div classname="container1">
      <div className="card">
        <div className="card_body">
        <img src={school} className="card_image"/>
        <h2 className="card_title"> About our school  </h2>
        <p className="card_discription">  School is the place where we learn to read and write. It is the most crucial place for a student, and it helps us to learn new things. The teachers are always helpful and teach us important things in life. We must always be regular to school as missing classes can lead to problems during exams </p>
        </div>
        <button className="card_button"> Know More  </button>
      </div>
          <br />
          <br />
          <br />
          <br />

      <div className="card">
        <div className="card_body">
        <img src={img1} className="card_image"/>
        <h2 className="card_title"> Teachers Day </h2>
        <p className="card_discription">  Teacher’s day is one of the most celebrated days in schools and colleges. It’s a day when you appreciate teachers for having a tremendous impact on your life.Teacher’s day is a day that is celebrated all over the country on the 5th of September. </p>
        </div>
        <button className="card_button"> Know More  </button>
      </div>
          <br />
          <br />
          <br />
          <br />

      <div className="card">
        <div className="card_body">
        <img src={img2} className="card_image"/>
        <h2 className="card_title"> Cultural Activites  </h2>
        <p className="card_discription">  Celebrating events and festivals in schools have become an integral part of learning and building a strong cultural belief in a child.Children will remember an important day only if they are told what the occasion signify, making them aware of the world in a more fun way. </p>
        </div>
        <button className="card_button"> Know More  </button>
      </div> 
          <br />
          <br />
          <br />
          <br />

      <div className="card">
        <div className="card_body">
        <img src={img3} className="card_image"/>
        <h2 className="card_title"> Childerns Day </h2>
        <p className="card_discription"> We celebrate Children's day in India on 14th of November every year. India's First Prime Minister Pundit Jawaharlal Nehru was born in Allahabad on 14th November 1889. Pt. Jawaharlal Nehru popularly known as Chacha Nehru was very fond of children. His love for Children was immense. </p>
        </div>
        <button className="card_button"> Know More  </button>
          <br />
          <br />
          <br />
          <br />
      </div>
      </div>
      </div>
    )
      
}
  
  export default Event;