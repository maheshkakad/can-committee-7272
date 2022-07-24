import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import AllRoutes from "./AllRutes/AllRoutes";
import Footer from "./components/Footer";
import About from "./components/About";
import CareerAdvise from "./components/CareerAdvise";
import useFetchJobs from "./components/useFetchJobs";
import { Container } from 'react-bootstrap'
import Search from "./components/Search";

function App() {

  const { jobs, loading, error} = useFetchJobs();
  const isAuth = false;
  return (
    <div className="App">
            <Navbar/>

            {/* <Container>
               { loading && <h1>loading...</h1>}
               {error && <h1>Error. Try Refreshing</h1>}
              <h1>{jobs.length}</h1>
            </Container>  */}
           <AllRoutes/>

          
          
          <Footer />

    </div>
  );
}

export default App;
