import React from 'react'
import './contactstyle.css'
import { useState } from 'react';

function Contact() {


    const [details,setdetails]=useState({
        name:"",
        email:"",
        contact:"",
        message:"",
      })
      
      const handlechange=(e)=>{
        const {name,value}=e.target;
      setdetails((prev)=>{
        return {...prev,[name]:value}
      })
      };
      
      const handlesubmit=(e)=>{
        e.preventDefault();
        alert("Thanks for contacting")
        console.log(details);
      }

  return (
    <section className="contact" id="contact">

<form action="" onSubmit={handlesubmit} className="form">
 <h1 className="text-3xl">Contact Us</h1>
<label htmlFor="">Name:</label>
<input type="text" className="input" placeholder="Enter your name" name="name" onChange={handlechange}/>
<label htmlFor="">Email:</label>
<input type="text" className="input" placeholder="Enter your email" name="email" onChange={handlechange}/>
<label htmlFor="">Contact No.:</label>
<input type="text" className="input" placeholder="Enter your contact" name="contact" onChange={handlechange}/>
<label htmlFor="">Message:</label>
<textarea name="message" className="input" id="text" placeholder="Enter your message" rows={5} onChange={handlechange} ></textarea>
<button type="submit">
Submit
</button>

</form>


</section>
  )
}

export default Contact