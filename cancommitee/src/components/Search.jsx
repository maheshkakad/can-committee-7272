import React from 'react'
import { useState } from 'react'
import data from './data.json'
import CartInfo from './CartInfo'
import { Input , Button, Divider} from '@chakra-ui/react'
import PostYourResume from './PostYourResume'

const Search = () => {
const [search , setSearch] = useState('');
const [dataa , setDataa] = useState({})
    console.log(dataa)

  return (
    <div>
       <div style={{display:"flex", gap:"20px", justifyContent:"center", marginTop:"50px"}}>
       <Input width="350px" type="text" placeholder='Search...' onChange={e => { setSearch(e.target.value)}}/>
        <Input width="350px" type="text" placeholder='Search...' onChange={e => { setSearch(e.target.value)}}/>
         <Button background="rgb(37, 87, 167)">Find jobs</Button>
       </div>
       <Divider marginTop="30px"></Divider>
         {data.filter((val)=> {
            if(search == ""){
                return val;
            }else if(val.title.toLowerCase().includes(search.toLowerCase())){
                return val;
            }
         }).map((val,key)=> {
            return <div>
                <div key={val.id} className='user'>
                <CartInfo setDataa={setDataa} data={val} />
            </div>
                <PostYourResume data={dataa}/>
            </div>
         })}
    </div>
  )
}

export default Search