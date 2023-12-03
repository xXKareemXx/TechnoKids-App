import React, { useState, useEffect } from 'react';
import Footer from './footer';
import Header from './header';

import '../css/about.css';


function About () {

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

useEffect(() => {
  const onScroll = () => {
    if (window.scrollY > 350) { // scroll position threshold
      setShow1(true);
    }
    else{
      setShow1(false);
    }
    if (window.scrollY > 200) { // scroll position threshold
      setShow2(true);
    }
    else{
      setShow2(false);
    }
    if (window.scrollY > 500) { // scroll position threshold
      setShow3(true);
    }
    else{
          setShow3(false);
        }
  };
  window.addEventListener('scroll', onScroll);
  return () => window.removeEventListener('scroll', onScroll);
}, []);

    
    return (

       
  
      <>
      <Header/>

      <div class="sections">
                <ul>
                    <li class="section1">
                        <h2>What is Techno Kids?</h2>
                        <p>Techno Kids is a company that provides robotics and programming courses for kids. Our goal is to enhance and prepare them for competitions that our team enters. We believe that technology education is crucial for the future of our children, and we aim to make it fun and accessible.</p>
                    </li>
                    <li class="section2">
                        <p>At Techno Kids, we offer a variety of courses that cover different aspects of technology education. Our courses range from basic programming to advanced robotics, and we provide a hands-on approach that encourages creativity and problem-solving skills.</p>
                        <h2>What We Do?</h2>
                    </li>
                    <li class="section3">
                        <h2>Our Mission</h2>
                        <p>Our mission is to empower the next generation of innovators and leaders by providing them with the skills and knowledge they need to succeed in the digital age. We believe that every child has the potential to create something amazing, and we are here to help them unleash it.</p>
                    </li>
                </ul>
                <br/><br/>
                <div class="instructors">

                  <div class="instructor" style={{ opacity: show1 ? 1 : 0, transition: 'opacity 0.5s ease-in' }} >
                    <img src={require("../images/Kareem.jpeg")} alt="Instructor 1"/>
                    <p><strong>Kareem Akram</strong></p>
                    <p>With over 5 years of experience in robotics , Kareem is one of our most experienced instructors. He has won best award in FLL competition and he loves teaching kids. Kareem is committed to helping students develop the critical thinking skills and problem-solving abilities they need to succeed in the digital age.</p>
                  </div>

                  <div class="instructor" style={{ opacity: show2 ? 1 : 0, transition: 'opacity 0.5s ease-in' }}>
                    <img src={require("../images/Zar2a.jpeg")} alt="Instructor 2"/>
                    <p><strong>Abdelrahman Osama</strong></p>
                    <p>Abdelrahman is a robotics engineer with 5 years of experience in the field. He has worked on various projects in the industry, including the development of autonomous robots for warehouses and factories. Abdelrahman is passionate about sharing his knowledge and expertise with kids and helping them develop their skills in robotics and programming.</p>
                  </div>
                  <div class="instructor" style={{ opacity: show3 ? 1 : 0, transition: 'opacity 0.5s ease-in' }} >
                    <img src={require("../images/Sobhy.jpeg")} alt="Instructor 3"/>
                    <p><strong>Ahmed Sobhy</strong></p>
                      <p>With over 2 years of experience in robotics and programming, Ahmed is one of our most experienced instructors. Ahmed has won multiple awards in robotics competitions and has a passion for teaching kids. He has mentored many young students to success in competitions and loves to share his knowledge with others.</p>
                  </div>
                </div>
            </div>


      
   
            <Footer/>
</>
)
}
export default About