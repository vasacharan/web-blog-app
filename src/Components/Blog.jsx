import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Link ,useParams } from 'react-router-dom';

const Blog = () => {
  const params = useParams();
  const _id = params._id;
  const [blogData, setBlogData] = useState(null);


   useEffect(()=>{
    const readMore =async (id)=>{
      const url3 = `https://blog-application-qiks.onrender.com/api/v1/blog/singleblog/${id}`;
      const response = await fetch(url3,{
        headers: {'Content-Type': 'application/json; charset=utf-8'}
      })
      const resp = await response.json()
      setBlogData(resp)
  
         
      };
      readMore(_id)
   },[_id]);


return (
    <div>
    {
      blogData?.data ? 
    (<div>
  
      <div className='container mt-5 mb-5'>
      <figure>
      <img src={`https://source.unsplash.com/random?${blogData?.data?.topic}`} alt='blog_img' width="100%" height="400px" />
      </figure>
        <div className='p-3' style={{backgroundColor:"#ffd3b6"}}>
          <h3>{moment(blogData?.data?.createdAt).format('DD/MM/YYYY HH:mm')}</h3>
          <h5>Title : {blogData?.data?.title}</h5><h5>Author : {blogData?.data?.user.name} </h5>
          <h5>Topic : {blogData?.data?.topic}</h5>
          <p>Blog Details : {blogData?.data?.content}</p>
        </div>
        <Link to="/Home">Back to Home page</Link>
      </div>
     
    </div>)
     : 
    (<div>
    <h4>charan from Blog</h4>
      <div className="loader">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    </div>
    </div>)
    }
    </div>
);

}

export default Blog;

