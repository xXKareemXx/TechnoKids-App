import React, { useState, useEffect } from 'react';
import '../css/form.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";


function Form() {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    age: '',
    phoneNumber: '',
    course: '',
    paymentMethod: '',
    additionalInfo: '',
  });

  const navigate = useNavigate();

  const [courses, setcourses]= useState(null);
  const [spinner, setSpinner] = useState(true); 

  

  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  //  console.log(formData);

    if (!validateForm()) {
      return;
    }
    // leave this as a comment till a real deployment when we need a server to hold data users will enter
/*
    let existingData = await fetch('http://localhost:5000/array');
    let data = await existingData.json();
    if (data.some(d => {
      return d.parentName === formData.parentName &&
             d.childName === formData.childName &&
             d.course === formData.course ;
             
    })) {
      // Data already exists, don't POST 
      alert('Duplicates are not allowed');
     
    } else {
      let res = await fetch('http://localhost:5000/array', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(formData),
       });*/
       navigate('./thanks');
   // }
     
     
  };

  const validateForm = () => {
    const nameRegex = /^[a-zA-Z]{3,}$/;
    const phoneRegex = /^\d{11}$/;
    
    const nameInput = document.getElementById('childName');
    console.log(nameInput);
    const parentInput = document.getElementById('parentName');
    const phoneInput = document.getElementById('phoneNumber');
    
    const name = nameInput ? nameInput.value.trim() : '';
    const pname = parentInput ? parentInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim() : '';
    
    if (!nameRegex.test(name)) {
      alert('Name must be at least 3 characters long and contain only letters.');
      nameInput.focus();
      return false;
    }
    if (!nameRegex.test(pname)) {
      alert('Name must be at least 3 characters long and contain only letters.');
      nameInput.focus();
      return false;
    }
    
    if (!phoneRegex.test(phone)) {
      alert('Phone number must be exactly 11 digits long and contain only numbers.');
      phoneInput.focus();
      return false;
    }
    
    return true;
  };



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
{

  return (
    
    <div className="form">
      <h1>We are happy to have your child with us</h1>
      <form onSubmit={handleSubmit} className="enrollmentForm">
        <label htmlFor="parentName">Your Name:</label>
        <input type="text" id='parentName' name="parentName" value={formData.parentName} onChange={handleChange} required />

        <label htmlFor="childName">Child's Name:</label>
        <input type="text" id='childName' name="childName" value={formData.childName} onChange={handleChange} required />

        <label htmlFor="age">Child's Age:</label>
        <input type="number"  name="age" value={formData.age} onChange={handleChange} min="4" max="16" required />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id='phoneNumber'  name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

        <label htmlFor="course">Choose a Course:</label>
        <select name="course" value={formData.course} onChange={handleChange} required>
          <option value="" disabled>Select a course</option>
  {courses.map((course) => (
    <option key={course.id} value={course.name}>
      {course.name}
    </option>
  ))}
</select>

        <label htmlFor="paymentMethod">Payment Method:</label>
        <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
          <option value="" disabled>Select a payment method</option>
          <option value="creditCard">Credit Card</option>
          <option value="Vodafone Cash">Vodafone Cash</option>
          <option value="In center">In center</option>
        </select>

        <label htmlFor="additionalInfo">Any Additional Information:</label>
        <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} />

        <button className='but' type="submit">Submit</button>
      </form>
    </div>
  

  );
}
}
export default Form;
