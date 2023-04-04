import Navbar from './components/NavBar'
import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import AddNew from './pages/repairs/New';
import About from './pages/About';
import Repairs from './pages/repairs/Index';
import Home from './pages/Home';

function App() {

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)

useEffect( () => {

  async function getRepairs() {
    
    //Get token & User info for login
    // let token = localStorage.getItem("token")

    // if (token) {
    //     getLoggedInUser()
    // } else {
    //     setIsLoading(false)
    // }

    // async function getLoggedInUser() {
    //     const user = await userInfo()
    //     setUser(user)
    //     setIsLoading(false)
    // }



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
      {/* <Navbar user={loggedIn} setUser={setUser} /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/repairs/new" element={<AddNew />}/>
        {/* <Route path="/character/:symbol" element={<Character />}/> */}
        <Route path="/repairs" element={<Repairs />}/>
        <Route path="*" element={<><h1>This Page could not be found...</h1></>} />
      </Routes>

    </div>
  );
}

export default App;
