import React, { useState } from 'react';

const CreateBlog = () => {

    const [blogContent, setBlogContent] = useState({
        topic : "",
        title : "",
        content : ""
    });

    const handleBlogContent=(e)=>{
        setBlogContent({...blogContent, [e.target.name] : e.target.value})
    }
 
    async function handleBlogSubmit(e){
        e.preventDefault();

        const token = JSON.parse(sessionStorage.getItem("userProfile"))?.token;
        // console.log("token ",token);                  //blog content console
        try{
            const blogResp = await fetch("https://blog-application-qiks.onrender.com/api/v1/blog/createNewBlog",{
                method : "POST",
                headers : {"Content-Type" : "application/json", "Authorization" : `Bearer ${token}`},
                body : JSON.stringify(blogContent)
            })

            if(blogResp.success){
                alert("Blog created successfully !!!");
            }

        }catch(error){
            console.log(error.message);
            throw  "Invaid Token";
          
        }
        
    }

  return (
    <div style={{backgroundColor:"#CFF4FFFF"}}>
    <div className='d-flex justify-content-center p-3'>
        <div className='card w-50'style={{backgroundColor:'#c4c1e0'}}>
        <div className='card-body text-start'>
        <h2 className='text-center fst-italic'>Create Blog</h2>
            <form onSubmit={handleBlogSubmit}>

            <label htmlFor="exampleFormControlInput1" className="form-label">Topic*</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" name='topic' placeholder="Topic of blog" onChange={handleBlogContent} />
               
            <br />
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" className="form-label ">Title*</label>
                <input type="text" className="form-control" id="exampleFormControlInput2" name='title' placeholder="Title of blog" onChange={handleBlogContent} />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Blog Content*</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" name='content' placeholder="Write here about blog" onChange={handleBlogContent}></textarea>
            </div>
            <button className='btn btn-primary' type='submit'>Submit</button>
            </form>
        </div>
        </div>
    </div>
    </div>
  )
}

export default CreateBlog;

