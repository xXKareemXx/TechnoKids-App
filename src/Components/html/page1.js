import React, { useState, useEffect } from 'react';
import '../css/page1.css';
import Header from './header'; 
import Footer from './footer';
import Slideshow from './slideshow';
import CardCollection from './slidecourses';
import technoImage from '../images/techno.jpeg';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Page1() {

  
  const [text, setText] = useState(' ');
  const words = 'We are a company that specializes in teaching technology to kids.';
  
  const addWord = () => {
    setText(text + words[text.length]);
    if(text.length>=100)
    {
      setText(' ')
    }
    
  }
  
  useEffect(() => {
    const timeout = setTimeout(() => addWord(), 180);
    return () => clearTimeout(timeout);
  }, [text]);

  const [showSpinner, setShowSpinner] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setShowSpinner(false);
  }, 800);
}, []);
  

  if(showSpinner)
    return(<Box  sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh' 
    }} >
      <CircularProgress  size={100}  />
          </Box>)
else
  return (

   <body>
     <Header />
     <main>
       <div style={{display:'flex' ,flexFlow:"left"}}>
         <h1>Welcome to  </h1><img src={technoImage} style={{height: '40px', width: '150px',marginTop:'25px', marginLeft:'5px' }}/>
       </div>
       
       <p style={{backgroundColor:'transparent', padding:'5px', fontWeight:'bold'}}>
         <span style={{animation: `revealWords 1s steps(${words.length}) forwards`}}>
           {words.substring(0,text.length)}
         </span>
       </p>
       
       {/* Video embed */}
       <div class="video">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/ax6bUF_8txM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
         </iframe>
       </div>
       
       {/* Slideshow */}
       <div style={{margin:"40px"}}>
         <h1>Why to learn technology</h1>
         <Slideshow/>
       </div>
       
       {/* Card collection */}
       <div style={{margin:"40px"}} id='courses'>
         <h1 style={{color:"#02006b"}}>Courses:</h1>
         <CardCollection/>
       </div>       
     </main>
     
     <Footer />
   </body>
 );
}

export default Page1;