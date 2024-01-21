import React, { useState } from 'react';
import BlogDetails from './BlogDetails';
import "G:/Realtime_Project/blog_app/src/App.css";

const Home = () => {

const [blogData, setBlogData] = useState(null);
    
    const url = "https://blog-application-qiks.onrender.com/api/v1/blog/allBlogs";
    // const userProfile =  JSON.parse(sessionStorage.getItem("userProfile"));
    // console.log(JSON.stringify(userProfile?.data.name));
    async function fetchData(){
      //fetching data from API
    fetch(url).then(resp=>resp.json())
    .then(response=>setBlogData(response));

    }


  return (
    <div>

      <BlogDetails  blogData = {blogData} fetchData={fetchData}/>
     
    </div>
  )
}

export default Home;
