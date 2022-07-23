import React, { useState } from 'react'
import './cartInfo.css'
import {useNavigate} from "react-router-dom"
import LogoIndeed from './LogoIndeed'
import LogoFlower from './LogoFlower'
import PostYourResume from './PostYourResume'


const CartInfo = (props) => {
    const { setDataa , data } = props;
    const [d , setD] = useState({})
    const navigate = useNavigate();
    const handleadd =(data)=> {
         setDataa(data)
      }

      console.log(data)
  return (
    <div className='cartbox'>
       <div onClick={handleadd(data)} className='cartbox1'>
        
           <h3>{data.title}</h3>
           <h3>{data.company}</h3>
           <h3>{ data.location }</h3>
           <br />
           <h3>{ data.type}</h3>
           <h4>{ "o"+data.created_at}</h4>
         
       </div>
       <div>
        
       </div>
    </div>
  )
}

export default CartInfo