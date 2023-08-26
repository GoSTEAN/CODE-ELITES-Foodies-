import { useState } from 'react';
import './App.css';
import NavigationBar from './components/NavBar';
import Footer from './components/Footer';
import Home from "./components/Home/Home"
import FoodList from "./Components/AvailableFood/FoodList";
import Contact from './components/contact/Contact';
import { Route, BrowserRouter as BR, Routes } from "react-router-dom";
import Signup from './components/Registration/Signup/Signup';



function App() {
  const [page, setPage] = useState("home");
  function pageHandler(data) {
    setPage(data);
  }
  return (
    <>
      {/* <BR>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BR> */}
      <NavigationBar handlePage={pageHandler} navbar={page} />
      {page === "home" && <Home handlePage={pageHandler} />}
      {page === "contact" && <Contact />}
      {page === "order" && <FoodList />}
      {page === "Join Us" && <Signup />}

      <Footer />
    </>
  );
}

export default App
