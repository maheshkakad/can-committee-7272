import React, { useState } from 'react'
import './cartInfo.css'
import {useNavigate} from "react-router-dom"
import LogoIndeed from './LogoIndeed'
import LogoFlower from './LogoFlower'
import PostYourResume from './PostYourResume'
import { Button } from "@chakra-ui/react"


const CartInfo = ({data  , setDataa}) => {
 
    
  

     
  return (
    <div className='cartbox'>
       <div  className='cartbox1'>
        
           <h3 className='titlebold'>{data.title}</h3>
           <h3>{data.company}</h3>
           <h3>{ data.location }</h3>
           <br />
           <h3>{ data.type}</h3>
           <h4>{ "o"+data.created_at}</h4>
           <Button onClick={()=> setDataa(data) }>See more...</Button>
       </div>
      
    </div>
  )
}

export default CartInfo