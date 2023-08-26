import React from 'react';
import "./contact.css";
import contactHero from "../Assets/contactHero.jpg";
import {BsFillTelephoneFill} from "react-icons/bs";
import {AiTwotoneMail} from "react-icons/ai";
import {MdLocationOn} from "react-icons/md"

const Contact = () => {

    const [formData, setFormData] = React.useState({
        userName: "",
        email: "",
        phoneNumber: "",
        typeOfEnquiry: "Enquiry",
        message: ""

    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => {
            return {
                ... prevData,
                [name]: value
            }
        })

    }

    const handleForm = (e) => {
        e.preventDefault();
        if (formData.userName.length < 7) {
            alert("Enter a valid name!")
            return
        } else if (formData.phoneNumber.length < 11) {
            alert("Enter a valid Phone number!")
            return
        } else if (formData.message.length < 10) {
            alert("Enter a valid message!")
            return
        } else {
            alert("Submission successful!")
            setFormData((prevData) => {
                return {
                    ...prevData,
                    userName: "",
                    email: "",
                    phoneNumber: "",
                    typeOfEnquiry: "Enquiry",
                    message: ""
                }
            })

            const btn = document.getElementById("submitBtn")
            btn.style.backgroundColor = "green"
            btn.innerHTML = "SUBMISSION SUCCESSFUL!"

            const returnDefault = () => {
                const btn = document.getElementById("submitBtn")
                btn.style.backgroundColor = "rgb(234, 179, 8)"
                btn.innerHTML = "SUBMIT"
            }

            setTimeout(returnDefault, 3000)
        }

    }

  return (
    <section className='bg-white'>

        <div id='cntHero' className='relative flex items-center justify-center cursor-pointer duration-500 border-b-[1rem] border-black'>
            <div className='w-screen h-[50vh] opacity-[.8] hover:opacity-[1]'>
                <img src={contactHero} alt="" className='w-[100%] h-[100%] object-cover object-bottom' />
            </div>
            <h1 className='absolute text-3xl md:text-5xl font-bold text-center text-[#FFE227] top-1/2 drop-shadow-xl'>GET IN TOUCH WITH FOODIES</h1>
        </div>

        <div className='flex flex-col-reverse md:flex-row mt-10 md:space-x-10 py-4 px-10 '>
            <div className='md:w-1/2 flex flex-col  mt-8'>
                <div className='flex flex-col space-y-4 mb-10'>
                    <h2 className='font-bold text-xl md:text-3xl text-gray-800'>Our Contact Info</h2>
                    <div className='flex space-x-4 items-center'>
                        <BsFillTelephoneFill className='text-[#FFE227]' />
                        <span className='text-gray-500'>+234 803 329 6399</span>
                    </div>

                    <div className='flex space-x-4 items-center'>
                        <AiTwotoneMail className='text-[#FFE227]' />
                        <span className='text-gray-500'>foodiescustomercare@yahoo.com</span>
                    </div>

                    <div className='flex space-x-4 items-center'>
                        <MdLocationOn className='text-[#FFE227]' />
                        <span className='text-gray-500'>Kaduna Technology City, 1 Boulevard/Crocodile Road, Kaduna, Kaduna state</span>
                    </div>

                </div>

                <div className=' h-[30rem] bg-black md:mt-0 mt-8'>
                        <iframe width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kaduna%20Technology%20City,%201%20Boulevard/Crocodile%20Road,%20Kaduna,%20Kaduna%20state+(Foodies)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe></div>                
                    

            </div>

            <div className='md:w-1/2'>
                <h2 className='font-bold text-xl md:text-3xl mb-5 text-gray-800'>We value your feedback</h2>
                <form action="" onSubmit={handleForm} className='flex flex-col space-y-8'>
                    <div className='flex flex-col'>
                        <label htmlFor="userName">Full name</label>
                        <input id='userName' type="text" value={formData.userName} placeholder='e.g - Alex Charles' name='userName' required className='border border-gray-500 py-2 text-gray-500 rounded-md px-4 outline-none focus:bg-gray-100' onChange={handleChange} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email">Email</label>
                        <input id='email' type="email" value={formData.email} placeholder='e.g - alexcharles@gmail.com' name='email' required className='border border-gray-500 py-2 text-gray-500 rounded-md px-4 outline-none focus:bg-gray-100' onChange={handleChange} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="phoneNumber">Phone number</label>
                        <input id='phoneNumber' type="number" value={formData.phoneNumber} placeholder='e.g - +234 XXX XXXX XXX' name='phoneNumber' required className='border border-gray-500 py-2 text-gray-500 rounded-md px-4 outline-none focus:bg-gray-100' onChange={handleChange} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="typeOfEnquiry">Subject</label>
                        <select id="typeOfEnquiry" name="typeOfEnquiry" required className='border border-gray-500 py-2 text-gray-500 rounded-md px-4 outline-none focus:bg-gray-100' onChange={handleChange}>
                            <option value="enquiry">Enquiry</option>
                            <option value="complaint">Complaint</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" value={formData.message} id="message" placeholder='I wish to know the...' cols="30" rows="10" required className='border border-gray-500 py-2 text-gray-500 rounded-md px-4 outline-none focus:bg-gray-100' onChange={handleChange}>Message</textarea>
                    </div>
                    <div>
                        <button id='submitBtn' className='bg-[#FFE227] hover:bg-yellow-600 duration-500 w-[100%] py-2 px-4 font-bold rounded-md text-black'>SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>

    </section>
  )

}



export default Contact
