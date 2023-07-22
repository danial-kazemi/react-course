import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';

function TestRouter () {
    return(
      <>
        <h2>testRouter</h2>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit voluptates deserunt ratione sint laborum tempore, quisquam quis quia distinctio et, corrupti, dolor commodi tenetur reprehenderit labore! Et magni quia dolore?</p>
      </>
    )
}

function App() {

  return (
    
    <>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/test/" element={<TestRouter />} />
      </Routes>  
      
    </>   
    
  )
}

export default App
