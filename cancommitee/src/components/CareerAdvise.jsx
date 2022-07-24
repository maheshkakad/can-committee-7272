import React from 'react'
import './CareerAdvice.css';
import { Link } from 'react-router-dom'

const CareerAdvise = () => {
  return (
    <div>
        <div className='backgroundimg'>

           <div><img className='imgwoman' src="https://images.ctfassets.net/pdf29us7flmy/15oQ2JIYhydw5FFX89zhis/70dfc967bfe63b4ff37691963149d7fa/5.svg?w=1242" alt=''></img>
          <div className='setlink'> <Link to="covid">COVID-19 and Your Job: Tips and Actions to Consider</Link></div>
           </div>

           <div><img className='imgwoman' src="https://images.ctfassets.net/pdf29us7flmy/6tw2vLVpRF894WMF9YL5ZW/0d528e0b5a05d223f494e3b3f905e35e/5.png?w=1242" alt=''></img>
             <div className='setlink'> <Link to="covid">COVID-19 and Your Job: Tips and Actions to Consider</Link></div>
           </div>

           <div><img className='imgwoman' src="https://images.ctfassets.net/pdf29us7flmy/32kBMgEItj3dYXAP88IYVR/5d207060c3ea5a1376c6eb0860ba82a6/1.svg?w=1242" alt=''></img>
           <div className='setlink'> <Link to="covid">COVID-19 and Your Job: Tips and Actions to Consider</Link></div>
           </div>

        </div>
        <h2 className='first-txt'>Indeed</h2>
         <h2  className='first-txt2'>Career Guide</h2>

         <div className='bottombox'>
            <div>
                <img src="https://images.ctfassets.net/pdf29us7flmy/4MXTRJ4tGUmCZp2dZ0b7Xd/f967451f52b339dfd64cbe3f59d75a79/2.png?w=1242" alt="" />
                <div className='smalldiv'>
                  <h1>Email Examples: How to Respond to an Employer Interview Request</h1>
                  <p>Communication skills involve the effective and efficient transfer of information. Developing communication skills will help in the interview process and on the job.</p>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div>
              <img src="https://images.ctfassets.net/pdf29us7flmy/5totgvx59eGhEe82jewsF0/5217efcdef9807109ec2fb46c543e18e/3.svg?w=1242" alt="" />
              <div className='smalldiv'>
                 <h1>How to Reject a Job Offer Politely</h1>
                <p>Learn how to highlight 10 of the best skills that employers look for on your resume, how to choose between hard and soft skills, and more with Indeed Career Guide.</p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div>
              <img src="https://images.ctfassets.net/pdf29us7flmy/5DSHSSwqPEvOaoe2S6Vp4H/0ffc7467a65ac15b8e4932ce850cb210/4.svg?w=1242" alt="" />
              <div className='smalldiv'>
               <h1>How To Write an Email Asking for an Internship (With Examples)</h1>
                <p>Learn how to highlight 10 of the best skills that employers look for on your resume, how to choose between hard and soft skills, and more with Indeed Career Guide.</p>
              </div>
            </div>
         </div>
    </div>
  )
}

export default CareerAdvise