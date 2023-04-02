import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import AddNew from './pages/AddNew';
import About from './pages/About';
import Repairs from './pages/Repairs';
import Home from './pages/Home';

function App() {



useEffect( () => {

  async function getRepairs() {
    
    try {
    let response = await fetch('/repairs')
    let data = await response.json()
    console.log(data)
    // setTodos(data)
  } catch(err) {
    console.error(err)
}
  }
  getRepairs()

}, [])





  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/new" element={<AddNew />}/>
        {/* <Route path="/character/:symbol" element={<Character />}/> */}
        <Route path="/repairs" element={<Repairs />}/>
        <Route path="*" element={<><h1>This Page could not be found...</h1></>} />
      </Routes>

    </div>
  );
}

export default App;
