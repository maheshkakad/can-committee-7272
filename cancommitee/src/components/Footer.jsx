import React from 'react';
import { Link } from "react-router-dom"
  
const Footer = () => (
  <footer className="footer">
    <ul style={{ display: "flex", listStyleType: "none"  ,fontSize: "15px" ,gap:"20px"}}>
        <li><Link to="#">Career Advice</Link></li>
        <li><Link to="#">Browse Jobs</Link></li>
        <li><Link to="#">Browse Companies</Link></li>
        <li><Link to="#">Salaries</Link></li>
        <li><Link to="#">Indeed Events</Link></li>
        <li><Link to="#">Work at Indeed</Link></li>
        <li><Link to="#">Countries</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="#">Help Center</Link></li>
        <li><Link to="#">Post a job</Link></li>
    </ul>
    <p>                               </p>
    <ul style={{ display: "flex", listStyleType: "none"  ,fontSize: "15px" ,gap:"20px"}}>
        <li><Link to="#">© 2022 Indeed</Link></li>
        <li><Link to="#">Accessibility at Indeed</Link></li>
        <li><Link to="#">Privacy Center</Link></li>
        <li><Link to="#">Cookies</Link></li>
        <li><Link to="#">Privacy</Link></li>
        <li><Link to="#">Terms</Link></li>
    </ul>
  </footer>
);
  
export default Footer;