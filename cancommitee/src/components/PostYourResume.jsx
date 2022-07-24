import React from 'react'
import './PostYourResume.css';
import { Button } from "@chakra-ui/react"

const PostYourResume = (props) => {
 
 const { info , data } = props;
 
 console.log(data)
 console.log(info)
const isauth = false;
  return (
    <div className='rightdiv'>
        <img className='img' src={data.url} alt="" />
      <div className='logodiv'>
         <img className='logo' src={data.company_logo} alt="" />
      </div>
    
      <div className='starting'>
      {data.company}
      <br />
      {data.title}
      <br />
      {data.type}
      <br />
      {data.location}
      <br />
      <Button>Apply on company site</Button>
       {/* { 
          isauth? <Button>button</Button> : ""
       } */}
      <div className='paragra'>
         {data.description}
     
       
      </div>
      </div>
    </div>
  )
}

export default PostYourResume