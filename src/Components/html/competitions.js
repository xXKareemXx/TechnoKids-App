import React from 'react';
import Footer from './footer';
import Header from './header';

import '../css/competitions.css';


function Competitions () {

    
    return (

       
  
      <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <Header/>

      <div class="container">
      
        <main>
            <h1>Competitions</h1>
              <div class="competition">
                <img src={require("../images/1.jpeg")} alt="Competition 1"/>
                <div>
                  <h3>First Lego League</h3>
                  <p>Date: January 1, 2022</p>
                  <p>Location: Los Angeles, CA</p>
                  <p>Value: $5,000</p>
                </div>
              </div>
              <div class="competition">
                <div>
                  <h3>RoboCup</h3>
                  <p>Date: June 1, 2022</p>
                  <p>Location: Montreal, Canada</p>
                  <p>Value: $10,000</p>
                </div>
                <img src={require("../images/2.jpeg")}  alt="Competition 2"/>
              </div>
              <div class="competition">
                <img src={require("../images/3.jpg")} alt="Competition 3"/>
                <div>
                  <h3>International Robotics Challenge</h3>
                  <p>Date: September 1, 2022</p>
                  <p>Location: Tokyo, Japan</p>
                  <p>Value: $15,000</p>
                </div>
              </div>
              <div class="competition">
                <img src={require("../images/4.jpeg")} alt="Competition 3"/>
                <div>
                  <h3>Robo Sub</h3>
                  <p>Date: September 3, 2023</p>
                  <p>Location: Tokyo, Japan</p>
                  <p>Value: $1,000</p>
                </div>
              </div>
              <div style={{float:"right"}}><h1>More sooner....</h1></div>
        </main>
        
        
       
    </div>
    



      
   
            <Footer/>
</>
)
}
export default Competitions