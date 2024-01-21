import React from "react";
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import CreateAccount from "./Components/CreateAccount";
import CreateBlog from "./Components/CreateBlog";
import Login from "./Components/Login";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Contributors from "./Components/Contributors";
import AboutBlog from "./Components/AboutBlog";
import { ToastContainer } from "react-toastify";
import Blog from "./Components/Blog";


const Router = () => {

  return (
    <div>
    <ToastContainer theme="colored"></ToastContainer>
      <BrowserRouter basename="/web-blog-app">
      <Navbar />
     
        <Routes>
        <Route exact path="/web-blog-app" element={<AboutBlog />}/>
        <Route exact path="/Home" element={<Home />}/>
        <Route exact path="/CreateAccount" element={<CreateAccount />} />
        <Route exact path="/CreateBlog" element={<CreateBlog />}/>
        <Route exact path="/Login" element={<Login />}/>
        <Route exact path="/ContactUs" element={<ContactUs />}/>
        <Route exact path="/Contributors" element={<Contributors />}/>
        <Route exact path="/Blog/:_id" element={<Blog/>}/>
        </Routes>
      
        <Footer />
      </BrowserRouter>
    
    
    </div>
  )
}

export default Router;