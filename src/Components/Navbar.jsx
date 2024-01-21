import React, { useEffect, useState } from 'react';
import blog_logo from '../Assets/blogs.png';
import {Link} from 'react-router-dom';


const Navbar = () => {

  const [isLogin, setIsLogin] = useState(true);
  
  const userProfile = JSON.parse(sessionStorage.getItem("userProfile"));
  
  useEffect(()=>{
      setIsLogin(userProfile)
  },[sessionStorage])

  
  return (
    <div>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#1F618D'}}>
            <div className="container">
                <Link to="/" className="navbar-brand"><img src={blog_logo} alt='blog_logo' width="55px" height="55px" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown" >
                        <ul className="navbar-nav" >
                          <li className="nav-item">
                            <Link to="/Home" className="nav-link active fw-bolder" aria-current="page" style={{color:"#D5DBDB"}}>Home</Link>
                          </li>
                          <li className="nav-item">
                            <Link to='/ContactUs' className="nav-link fw-bolder" style={{color:"#D5DBDB"}}>Contact Us</Link>
                          </li>
                          <li className="nav-item">
                            <Link to='/Contributors' className="nav-link fw-bolder" style={{color:"#D5DBDB"}}>Contributors</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/CreateBlog" className="nav-link fw-bolder" style={{color:"#D5DBDB"}}>Create Blog</Link>
                          </li>
                          {
                            (!isLogin) ?
                              
                               <li className="nav-item">
                                <Link to="/Login" className="nav-link fw-bolder" style={{color:'orange'}}>Sign in</Link>
                              </li>
                             
                            :
                             
                              <li className="nav-item">
                                <Link to="/CreateAccount" className="nav-link fw-bolder" style={{color:'tomato'}}>Sign out</Link>
                              </li>
                             
                            }
                            {
                              (!isLogin) ?
                              <span></span> 
                              : 
                              <li className="nav-item">
                               <Link className="nav-link fw-bolder bg-info">{userProfile?.data.name}</Link>
                              </li>

                            }
                            
                        </ul>
                       
                    </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;
