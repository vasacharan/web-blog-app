import React from 'react';
import { Link } from 'react-router-dom';
import blogimg from '../Assets/blogs.png';


function Footer() {
  return (
    <div>
      <div style={{backgroundColor:'#2B47C4'}}>
      <span className='float-start fs-5 ms-5 text-white'>also follow in social netwoking sites</span>
      <div className='d-flex justify-content-end fs-4 pe-5'>
        
        <a href='www.facebook.co.in'><i className="fa-brands fa-facebook"></i></a>
        <a href='www.facebook.co.in'><i className="fa-brands fa-facebook-messenger ms-2"></i></a>
        <a href='www.facebook.co.in'><i className="fa-brands fa-square-instagram ms-2"></i></a>
        <a href='www.facebook.co.in'><i className="fa-brands fa-github ms-2"></i></a>
        <a href='www.facebook.co.in'><i className="fa-brands fa-youtube ms-2"></i></a>
        
      </div>
      </div>
      <div className='mt-3' style={{backgroundColor:'#1F618D'}}>
      <div className='container' style={{backgroundColor:'#1F618D'}}>
        <div className='row g-3'>
            <div className='col-md-3 col-6'>
                <div className='card border-0' style={{backgroundColor:'#1F618D'}}>
                    <div className='row'>
                      <div className='col'>
                        <h6 className='text-white'>WEB BLOG</h6>
                        <figure><img src={blogimg} style={{width:'35px', height:'35px'}}/></figure>
                        <p>A blog, short for weblog, is a frequently updated web page used for personal commentary or business content.</p>
                      </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className='col-md-3 col-6'>
                <div className='card  border-0' style={{backgroundColor:'#1F618D'}}>
                    <div className='row'>
                      <div className='col' >
                         <ul className='liststyle lh-lg'>
                          <h6 className='text-white'>PRODUCT</h6>
                          <li><a href='#'>Web Development</a></li>
                          <li><a href='#'>Frontend Development</a></li>
                          <li><a href='#'>Careear</a></li>
                          <li><a href='#'>Freshers</a></li>
                         </ul>
                      </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className='col-md-3 col-6'>
                <div className='card  border-0' style={{backgroundColor:'#1F618D'}}>
                    <div className='row'>
                      <div className='col'>
                      <ul  className='liststyle lh-lg'>
                          <h6 className='text-white'>USEFUL LINKS</h6>
                          <li><Link to='/CreateBlog'>Create Blog</Link></li>
                          <li><Link to='/ContactUs'> Contactus</Link></li>
                          <li><Link to='/web-blog-app'>About</Link></li>
                          <li><Link to='/Home'>Home</Link></li>
                         </ul>
                      </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className='col-md-3 col-6'>
                <div className='card  border-0' style={{backgroundColor:'#1F618D'}}>
                    <div className='row'>
                      <div className='col'>
                      <ul className='liststyle lh-lg'>
                          <h6 className='text-white'>CONTACT</h6>
                          <li>Bengaluru, Karnataka</li>
                          <li>vasa.charanpratap@gmail.com</li>
                          <li>Web Development</li>
                          
                         </ul>
                         
                      </div>
                    </div>
                </div>
            </div>
            
        </div>
      </div>
    </div>
    <div className='container-fluid mb-0' style={{backgroundColor:'#1F618D'}}><p className='p-3 text-white'>-: Created by vasa.charanpratap @ 2024 :-</p></div>
    </div>
  )
}

export default Footer;
