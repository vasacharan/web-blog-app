import React, { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';

function ContactUs() {
const [contactList, setContactList] = useState({
    name : "",
    email : "",
    phno : "",
    message : ""
})
const handleContactInputs =(e)=>{
setContactList({...contactList, [e.target.name] : e.target.value })
}
var errContact = "Please Enter valid";
// const {name, email, phno,message} = contactList;

const isContactValidate=()=>{
    var contactValid = true;   
    if(contactList.name === null || contactList.name === "" ){
        contactValid = false;
        errContact += " name";
    }

    if(contactList.phno === null || contactList.phno === "" ){
        contactValid = false;
        errContact += " phone number";
    }

    if(contactList.message === null || contactList.message === ""){
        contactValid = false;
        errContact += " text";
    }

    if(!contactValid){
          
        toast.error(errContact);
        errContact = "";

     }else{
         if(/^[6-9]{1}[0-9]{9}$/.test(contactList.phno) && /^[a-zA-Z0-9]+$/.test(contactList.name)){
            
         }else{
            contactValid = false;
           
            toast.error('Please enter the Valid username / Phone number');
             
         }
     }
    return contactValid;
}



const handleContactSubmit =(e)=>{
    e.preventDefault();
    if(isContactValidate()){
        toast.success("Thankyou for Contact We are in touch");
    }
    // else{
    //     toast.error("Enter Valid Data");
    // }
    
   
}
  return (
    <div style={{backgroundColor:"#CFF4FFFF"}}>
       <div className='container contactwidth pt-3'>
                <div className='row'>
                    <div className='col'>
                        <div className='card cardcolor position-relative p-3'>
                            <div className='row'>
                                <div className='col'>
                                    <h4 className='text-center mt-2'>Contact Us</h4>
                                    <form onSubmit={handleContactSubmit}>
                                    <label htmlFor="name" className='mt-4'>Name</label><br/>
                                    <input type='text' id='name' className="rounded backcolor w-100 border-0 shadow-lg" onChange={handleContactInputs} name='name' /><br/>
                                    <label htmlFor="email" className='mt-4' >Email</label><br/>
                                    <input type='email' id='email' className="rounded backcolor w-100 border-0 shadow-lg" onChange={handleContactInputs} name='email' /><br/>
                                    <label htmlFor="number" className='mt-4'>Phone Number</label><br/>
                                    <input type='number' id='number' className="rounded backcolor w-100 border-0" onChange={handleContactInputs} name='phno' /><br/>
                                    <label htmlFor="message" className=' mt-4' >Message</label><br/>
                                    <input type='text' id='message' className="rounded backcolor w-100 border-0" onChange={handleContactInputs} name='message' /><br/>
                                    <button className='butshadow rounded w-100 mt-4 border-0'>Submit</button><br/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
    </div>
  )
}

export default ContactUs;
