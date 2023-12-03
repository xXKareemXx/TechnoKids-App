import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/header.css';

function Header() {
  const [activeLink, setActiveLink] = useState('Home');
  const navigate = useNavigate();
  const [coursesClicked, setCoursesClicked] = useState(false);
  const location = useLocation();




  useEffect(() => {
    // Set activeLink based on the current URL
    const pathToLink = {
      '/': 'Home',
      '/courses': 'Courses',
      '/competitions': 'Competitions',
      '/about': 'About',
      '/form': 'form',
    };
  
    setActiveLink(pathToLink[location.pathname] || '');
  
    if (location.pathname === '/' && coursesClicked) {
      const coursesElement = document.getElementById('courses');
      if (coursesElement) {
        coursesElement.scrollIntoView({ behavior: 'smooth' });
      }
      setCoursesClicked(false);
    }
  }, [location.pathname, coursesClicked]);


  const handleClick = (event, link) => {
    event.preventDefault();
    setActiveLink(link);
    if (link === 'Courses') {
      setCoursesClicked(true);
      navigate('/');
      const coursesElement = document.getElementById('courses');
      if (coursesElement) {
        coursesElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    else if(link === 'Home')
    {
      navigate('/');
    }
    else{
    navigate(`/${link.toLowerCase()}`);
    }
  }

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a
              href="#"
              className={activeLink === 'Home' ? 'active' : ''}
              onClick={(event) => handleClick(event, 'Home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#courses"
              className={activeLink === 'Courses' ? 'active' : ''}
              onClick={(event) => handleClick(event, 'Courses')}
            >
              Courses
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLink === 'Competitions' ? 'active' : ''}
              onClick={(event) => handleClick(event, 'Competitions')}
            >
              Competitions
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLink === 'About' ? 'active' : ''}
              onClick={(event) => handleClick(event, 'About')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLink === 'form' ? 'active' : ''}
              onClick={(event) => handleClick(event, 'form')}
            >
              Join us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
