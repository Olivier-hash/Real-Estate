import React from 'react'
import { toast } from 'react-toastify';
import { motion } from "motion/react"

function Contact() {
  
  //web3forms code to submit form data 

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dc387df4-f19b-41e2-871a-5a46496f851a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");  
      // toastify notification
      toast.success("form submitted successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };





  return (
    <motion.div 
    

    // Animation properties
    initial={{opacity:0, x:-200}}
    transition={{duration: 1.5}}
    whileInView={{opacity:1, x:0}}
    viewport={{once:true}}
    
    
    
    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>

         <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact 
         <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span>
         </h1>
          <p className='text-center text-gray-500 mb-12 mx-w-80 mx-auto'>
           Ready to make a Move? Let's Build your Future Together</p> 
            
            {/* Form to fill */}
            <form  onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
                <div className='flex flex-wrap'>

                  <div className='w-full md:w-1/2 text-left'>Your name
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
                     type="text" name='name' placeholder='your name' required />
                  </div>

                   <div className='w-full md:w-1/2 text-left md:pl-4'>Your Email
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
                     type="email" name='email' placeholder='your Email' required />
                   </div>

                </div>
                {/* text message */}
                <div className='text-left'>
                    Message
                    <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 '
                     name="Message" placeholder='Message' required></textarea>
                </div>
                <button className='bg-blue-600 text-white py-2 px-12 mb-10'>
                   {result ? result : "Send Message"} 
                </button>

            </form>
    </motion.div>
  )
}

export default Contact