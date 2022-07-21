import React from 'react'
import './CareerAdvice.css';
import { Link } from 'react-router-dom'

const CareerAdvise = () => {
  return (
    <div>
        <div className='backgroundimg'>

           <div><img className='imgwoman' src="https://images.ctfassets.net/pdf29us7flmy/15oQ2JIYhydw5FFX89zhis/70dfc967bfe63b4ff37691963149d7fa/5.svg?w=1242" alt=''></img>
          <div className='setlink'> <Link to="#">COVID-19 and Your Job: Tips and Actions to Consider</Link></div>
           </div>

           <div><img className='imgwoman' src="https://images.ctfassets.net/pdf29us7flmy/6tw2vLVpRF894WMF9YL5ZW/0d528e0b5a05d223f494e3b3f905e35e/5.png?w=1242" alt=''></img>
             <div className='setlink'> <Link to="#">COVID-19 and Your Job: Tips and Actions to Consider</Link></div>
           </div>

           <div><img className='imgwoman' src="https://images.ctfassets.net/pdf29us7flmy/32kBMgEItj3dYXAP88IYVR/5d207060c3ea5a1376c6eb0860ba82a6/1.svg?w=1242" alt=''></img>
           <div className='setlink'> <Link to="#">COVID-19 and Your Job: Tips and Actions to Consider</Link></div>
           </div>

        </div>
        <h2 className='first-txt'>Indeed</h2>
         <h2  className='first-txt2'>Career Guide</h2>
    </div>
  )
}

export default CareerAdvise