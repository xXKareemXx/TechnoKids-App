import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import '../css/course.css';
import { useParams, useNavigate } from 'react-router-dom';



function Course () {
  const navigate = useNavigate();

    const [courses, setcourses]= useState(null);
    const { id } = useParams();
    const [spinner, setSpinner] = useState(true); 

  useEffect(()=>{
    setSpinner(true);
      fetch('https://api.npoint.io/b8770e6c15bf3ba55b8b/array')
      .then(res=>{
          return res.json();
      }).then(data=>{
         
          setcourses(data);
          setSpinner(false);
      })
  
  },[]);

  function nav(){

    navigate('/form');

  }

if(spinner)
    return(<Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh' 
    }} >
      <CircularProgress  size={100}  />
          </Box>)
else
    return (

       
  
      <>
<div className='body'>
  <div class="course-container">
  <img src={`${courses[id].img}`} alt="Course Image" className="course-image" style={{ margin:"10px"}}/>
    <div class="course-info">
      <h1 class="course-title">{courses[id].name}</h1>
      <p class="course-price"><h4 style={{ display: 'inline-block'}}>Price:</h4> {courses[id].cost}EGP</p>
      <p class="course-age"><h4 style={{ display: 'inline-block'}}>Recommended Age:</h4> {courses[id].age}-{String(parseInt(courses[id].age)+3)}</p>
      <p class="course-description">{courses[id].des.split('\n').map(str => <p>{str}</p>)}</p>
      <p class="course-types"><h4 style={{ display: 'inline-block'}}>Types:</h4> Online, In-person</p>
      <button class="apply-button" onClick={nav}>Apply Now</button>
    </div>
  </div>
</div>
</>
)
}
export default Course
