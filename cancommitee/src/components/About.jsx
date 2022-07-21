import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div id='container'>
        <div className='box1'>
            <div className='paraonebox'>
               <div style={{width:"500px",height:"450px", margin:"auto", paddingTop:"80px"}}>
               <h2 className='about'>About Indeed</h2>
                <h2 className='parabig'>Indeed is the #1 job site
                     in the world1 with over 250M 
                     unique visitors every month. 
                     Indeed strives to put job seekers
                     first, giving them free access
                     to search for jobs, post 
                     resumes, and research companies. Every day, we connect millions of people to new opportunities.</h2>
               <br />
              <h3 className='paradark'>Please note that Indeed and its affiliates are directly or indirectly owned by a publicly traded Japanese parent company, <a href="/"> Recruit Holdings Co., Ltd.</a></h3>
               </div>
            </div>
            
            <img className='imggirl' src="https://d341ezm4iqaae0.cloudfront.net/jobseeker/wp-content/uploads/2021/07/08192932/Image-Frame.png" alt="" />
        
        </div>
        <div style={{display:"flex" , marginLeft:"30px", padding:"30px", justifyContent:"space-around"}}>
            <div><h1 className='heading4'>250M</h1>
             <h4>Unique monthly visitors</h4>
            </div>
            <div><h1  className='heading4'>225</h1>
            <h4>Resumes on Indeed</h4></div>
            <div><h1  className='heading4'>600M+</h1>
             <h4>Total ratings and reviews</h4>
            </div>
        </div>
        <div className='box2'>

        <img className='imggirl' src="https://d341ezm4iqaae0.cloudfront.net/jobseeker/wp-content/uploads/2021/07/08194002/6col.png" alt="" />
            <div className='paraonebox'>
               <div style={{width:"500px",height:"450px", margin:"auto", paddingTop:"80px"}}>
               <h2 className='about'>Our people</h2>
                <h2 className='parabig'>At Indeed, our mission is to help people get jobs. We have more than 12,200 global employees passionately pursuing this purpose and improving the recruitment journey through real stories and data. We foster a collaborative workplace that strives to create the best experience for job seekers.</h2>
               <br />
              <h3 className='paradark'>Please note that Indeed and its affiliates are directly or indirectly owned by a publicly traded Japanese parent company, <a href="/"> Recruit Holdings Co., Ltd.</a></h3>
               </div>
            </div>             
        </div>
       
    </div>
  )
}

export default About