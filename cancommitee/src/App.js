import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import AllRoutes from "./AllRutes/AllRoutes";
import Footer from "./components/Footer";
import About from "./components/About";
import CareerAdvise from "./components/CareerAdvise";



function App() {
  return (
    <div className="App">
            <Navbar/>
          <CareerAdvise />
          
          <AllRoutes/>
          
          <Footer />

    </div>
  );
}

export default App;
