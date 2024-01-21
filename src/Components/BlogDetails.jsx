import React, { useEffect } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';



function BlogDetails({blogData, fetchData}){

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div>
    <div className="row p-3">

    {
      blogData?.data.length > 0 ? (
        
                    blogData.data.map((blog)=>{
                      return (  
                        
                      <div className="col-lg-4 mb-3 mb-sm-0" key={blog._id}>
                        <div className='card mt-3 mb-3'>
                          <figure>
                          <img src={`https://source.unsplash.com/random?${blog.topic}`} alt='blog_img' width="100%" height="200px" />
                          </figure>
                          
                          <div className='card-body text-start' style={{backgroundColor:"#ffd3b6"}}>

                              <h6 className='d-inline-block text-start p-2 rounded' style={{maxWidth:"100%", backgroundColor:"#FF8C00", alignItems:'start'}}>Author : {blog.user.name}</h6>
                              <span className='d-inline-block text-end fw-medium ms-3 p-2 rounded ' style={{backgroundColor:"#A5FF8CFF"}} >Created on: {moment(blog.createdAt).format('DD/MM/YYYY HH:mm')}</span><br />
                              <h6 className='d-inline-block text-start p-2 rounded' style={{maxWidth:"100%", backgroundColor:"#4c9173"}}>Title : {blog.title}</h6><br />
                              <h5 className='text-end bg-secondary rounded p-2'>Topic : {blog.topic}</h5><br />
                              <p> {blog.content.slice(0,200)}</p>
                              <Link to={`/Blog/${blog._id}`}>Read More</Link>
                            
                          </div>
                        </div>
            
                      </div>
                      
                    )})
                  
                    ) : (<div className="loader">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>)
      }
    </div>
 </div>
  )
}

export default BlogDetails;