import React, { useState, useEffect } from 'react';
import '../css/page1.css'; 
import oneImage from '../images/one.jpg';
// Import your CSS here

function Slideshow () {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const showSlides = (n) => {
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[n - 1].style.display = 'block';
    dots[n - 1].className += ' active';
  };

  const plusSlides = (n) => {
    setSlideIndex((prevSlideIndex) => {
      const newIndex = prevSlideIndex + n;
      if (newIndex > document.getElementsByClassName('mySlides').length) {
        return 1;
      }
      if (newIndex < 1) {
        return document.getElementsByClassName('mySlides').length;
      }
      return newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <div >
      {/* Your slideshow elements go here */}
      
      <div class="slideshow-container">

       
<div class="mySlides fade">
    <div class="numberquote">
        1 / 3
    </div>
    <div className='photo' > 
    <div class="quote">
        <h2>"Education is not the learning of facts, but the training of the mind to think."
        </h2>
        <p>- Albert Einstein</p>
        <br/>
        {/*<h3>Our robotics and programming courses not only teach technical skills, but also foster critical thinking and problem solving abilities.</h3>*/}
        <br/>
    </div>
    </div>
</div>

<div class="mySlides fade">
    <div class="numberquote">
        2 / 3
    </div>
    
    <div className='photo' >
    <div class="quote">
        <h2>"The best way to predict the future is to invent it."
        </h2>
        <p>- Alan Kay</p>
        <br/>
     {/*  <h3>Give your child the power to create and innovate by enrolling them in our programming and robotics courses.</h3>*/}
    </div>
    </div>
</div>

<div class="mySlides fade">
    <div class="numberquote">
        3 / 3
    </div>
   <div className='photo' >
    <div class="quote">
        <h2>Teaching kids to code isn't just about preparing them for the workforce; it's about preparing them for the world. Invest in your child's future by providing them with the opportunity to learn robotics and programming at our center.</h2>
    </div>
    </div>
</div>


<a class="prev" onClick={()=> plusSlides(-1)}>&#10094;</a>
<a class="next" onClick={()=> plusSlides(1)}>&#10095;</a>
</div>

<br/>


<div  style={{textAlign: 'center'}}>
<span class="dot" onClick={() => currentSlide(1)}></span>
<span class="dot" onClick={() => currentSlide(2)}></span>
<span class="dot" onClick={() => currentSlide(3)}></span>
</div>


      {/* Add onClick handlers to your controls */}
    </div>
  );
} export default Slideshow