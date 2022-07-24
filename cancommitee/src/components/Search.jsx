import React from 'react'
import { useState } from 'react'
import data from './data.json'
import CartInfo from './CartInfo'
import { Input , Button, Divider} from '@chakra-ui/react'
import PostYourResume from './PostYourResume'
import './Search.css'
import { Link } from 'react-router-dom'

const Search = () => {
const [search , setSearch] = useState('');
const [dataa , setDataa] = useState({})
   

  return (
    <div>
       <div style={{display:"flex", gap:"20px", justifyContent:"center", marginTop:"50px"}}>
       <Input width="350px" type="text" placeholder='Job title, Keyword or' onChange={e => { setSearch(e.target.value)}}/>
        <Input width="350px" type="text" placeholder='Location...' onChange={e => { setSearch(e.target.value)}}/>
         <Button color="white" background="rgb(37, 87, 167)">Find jobs</Button>
       </div>
       <Divider marginTop="30px"></Divider>
        <div className='brothers'>
        
       <div>
       <p className='headline'>Jobs based on your activity on Indeed • Updated just now</p>
       <br />
       <div className='leftbox'>
       
       {data.filter((val)=> {
            if(search == ""){
                return val;
            }else if(val.title.toLowerCase().includes(search.toLowerCase())){
                return val;
            }
         }).map((val,key)=> {
            return <div>
                <div key={val.id} className='user'>
                <CartInfo  key={val.id} data={val} setDataa={setDataa} />
               
            </div>
                
            </div>
         })}
       </div>
       </div>
          <div className='rigthbox'>
                <PostYourResume info={data} data={dataa}/>
                 
            </div>
        </div>
    </div>
  )
}

export default Search