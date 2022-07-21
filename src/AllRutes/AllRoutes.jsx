import React from 'react'
import Home from "../components/Home";
import LogoIndeed  from '../components/LogoIndeed';
import Product from "../components/Product";
import { Routes , Route } from 'react-router-dom';
import LogoFlower from '../components/LogoFlower';
import FindJobs from '../components/FindJobs';
import CompanyReviews from '../components/CompanyReviews';
import PostYourResume from '../components/PostYourResume';
import SignIn from '../components/SignIn';


const AllRoutes = () => {
  return (
<Routes>
    <Route path="/" element={ <Home/>}></Route>
    <Route path="/logoindeed" element={<LogoIndeed />}></Route>
    <Route path="/findjobs" element={<FindJobs />}></Route>
    <Route path="/companyreviews" element={<CompanyReviews />}></Route>
    <Route path="/products/:id" element={<Product/>}></Route>
     <Route path="/logoflower" element={<LogoFlower />}></Route>
     <Route path='/postyourresume' element={<PostYourResume />}></Route>
     <Route path='/signin' element={<SignIn />}></Route>
  
 </Routes>
  )
}

export default AllRoutes