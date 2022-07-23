import React from "react";
import { Link } from "react-router-dom";
import { Box,Flex,Image,Divider } from "@chakra-ui/react"


const Navbar = () => {

 
   return(
      <Box>
   <Flex justifyContent="space-between">
      <Box padding="20px 40px 10px 40px">
       <Flex justifyContent="space-between" gap="20px" >
        <Box width="100px"> <Link  to="/logoindeed"><img src="https://i.pinimg.com/736x/67/6e/3a/676e3aada56f68de9413bfe54d8b539a.jpg" alt="" /></Link></Box>
        <Box > <Link to="./logoflower"><Image height="45px"
        src='https://d3fw5vlhllyvee.cloudfront.net/dist/header/ukraine_support.7ad2b5d444bc427dbc5d.png'/></Link></Box>
         <Link to="/findjobs">Find Jobs</Link>
         <Link to="/companyreviews">Company Reviews</Link>
       </Flex>
      </Box>
      <Box padding="20px 40px 10px 40px">
        <Flex  gap="20px">
          <Link to="/postyourresume">Post Your Resume</Link>
          <Link to="/signin"><h3 style={{color:"blue" , fontSize:"16px" , fontWeight:"bold"}}>Sign in</h3></Link>
         <label htmlFor="">|</label>
          <Link to="/signin"> Employers / Post</Link>
        </Flex>
      </Box>
     
      </Flex>
      <Divider />
      </Box>
   )
    
}

export default Navbar;