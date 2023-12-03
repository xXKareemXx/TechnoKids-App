import Page1 from './Components/html/page1'
import Course from './Components/html/course'
import Form from './Components/html/form'
import Thanks from './Components/html/thanks'
import About from './Components/html/About'
import Competitions from './Components/html/competitions'


import { Routes , Route} from 'react-router-dom';







function App() {
  return (
   <>
   
  
   

   <Routes>
   <Route path='*' element={<Page1/>}/>
   <Route path="/courses/:id" element={<Course/>} />
   <Route path="/form" element={<Form/>} />
   <Route path="form/thanks" element={<Thanks/>} />
   <Route path="/about" element={<About/>} />
   <Route path="/about" element={<About/>} />
   <Route path="/competitions" element={<Competitions/>}/>
  </Routes>
    
   </>
  )
}

export default App;
