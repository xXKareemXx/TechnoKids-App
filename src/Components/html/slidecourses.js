import React, { useState, useEffect } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import '../css/page1.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';



const CardCollection = () => {
  const [visibleCards, setVisibleCards] = useState(4);
  const [courses, setcourses]= useState(null);
  const [spinner, setSpinner] = useState(true); 


  const handleShowMore = () => {
    setVisibleCards(visibleCards + 4);
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
    const cards = [
        { id: 0, title: `${courses[0].name}`, image: `${courses[0].img}` },
        { id: 1, title: `${courses[1].name}`, image: `${courses[1].img}` },
        { id: 2, title: `${courses[2].name}`, image: `${courses[2].img}` },
        { id: 3, title: `${courses[3].name}`, image: `${courses[3].img}` },
        { id: 4, title: `${courses[4].name}`, image: `${courses[4].img}` },
        { id: 5, title: `${courses[5].name}`, image: `${courses[5].img}` },
        { id: 6, title: `${courses[6].name}`, image: `${courses[6].img}` },
        { id: 7, title: `${courses[7].name}`, image: `${courses[7].img}` },
        { id: 8, title: `${courses[8].name}`, image: `${courses[8].img}` },
        { id: 9, title: `${courses[9].name}`, image: `${courses[9].img}`},
        { id: 10, title: `${courses[10].name}`, image: `${courses[10].img}` },
        { id: 11, title: `${courses[11].name}`, image: `${courses[11].img}` },
        { id: 12, title: `${courses[12].name}`, image: `${courses[12].img}` },
        { id: 13, title: `${courses[13].name}`, image: `${courses[13].img}` },
        { id: 14, title: `${courses[14].name}`, image: `${courses[14].img}` },
        { id: 15, title: `${courses[15].name}`, image: `${courses[15].img}` },
      ];

  return (
    <div className="card-container">
      {cards.slice(0, visibleCards).map((card) => (
        <Card key={card.id} as={Link} to={`/courses/${card.id}`} >
          <Image src={card.image} style={{ height: '250px', width: '250px' }}  />
          <Card.Content>
            <Card.Header style={{fontWeight:'bold'}}>{card.title}</Card.Header>
          </Card.Content>
        </Card>
      ))}
      {visibleCards < cards.length && (
        <Button onClick={handleShowMore} style={{color:'blue', borderRadius: '50px', padding: '0px 10px 10px 10px', backgroundSize: 'cover'}} ><h2>Show More</h2></Button>
      )}
    </div>
  );
      }
};
export default CardCollection;
