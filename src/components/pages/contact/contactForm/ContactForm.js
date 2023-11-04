import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link,useNavigate } from "react-router-dom";
import "./contactform.css";
import  axios  from "axios";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const navigate = useNavigate();
  const { name, email, subject, message } = formData;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8000/api/contact/add", {name, email, subject, message})
    .then(res =>navigate(0))
    .catch(err => console.log(err))
  };

  const handleOnChange = (event) => {
    setFormData((preState) => ({
      ...preState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="flex flex-wrap justify-center bgBlue p-10 md:p-15">
      <div className="w-[550px]">
        <h1 className="text-3xl mt-20 text-amber-500  font-bold  uppercase text-center ">
          Send us a Message
        </h1>
        <form onSubmit={handleSubmit} className="mt-8">
          <div>
            <Input
              variant="static"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleOnChange}
              className="font-mideum text-white text-[20px]"
              required
            />
          </div>
          <div className="mt-8">
            <Input
              variant="static"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleOnChange}
              className="font-mideum text-white text-[20px]"
              required
            />
          </div>
          <div className="mt-8">
            <Input
              variant="static"
              placeholder="Subject"
              name="subject"
              value={subject}
              onChange={handleOnChange}
              className="font-mideum text-white text-[20px]"
            />
          </div>

          <div className="mt-8">
            <Textarea
              variant="static"
              placeholder="Message"
              name="message"
              value={message}
              onChange={handleOnChange}
              className="font-mideum text-white text-[20px]"
              required
            />
          </div>
          <div className="mt-8">
            <input
              type="submit"
              className="contuct-btn px-5 py-4 md:px-[30px] md:py-[15px] lg:px-[30px] lg:py-[15px]"
              value="Send Message"
            />
          </div>
        </form>
      </div>
      <div className="w-[550px] mt-8 md:mt-10 lg:mt-0  lg:ml-20 ">
        <h1 className="text-3xl mt-20  text-amber-500 font-bold  uppercase text-center ">
          Our Location
        </h1>
        <div>
          <h1 className="text-xl text-white font-medium mt-8">ADDRESS</h1>
          <p className="text-white">
            Atimkhana Market (2nd floor),Azimpur road,Dhaka-1205
          </p>
          <p className="text-white">
            Free Helpline <a href="tel:+88 01911-382094">+88 01911-382094</a>
          </p>
          <h1 className="text-xl text-white font-medium mt-8">EMAIL</h1>
          <a href="mailto:rasmul@gmail.com" className="text-white">
            rasmul@gmail.com
          </a>
          <h1 className="text-xl text-white font-medium mt-8">WORK HOURS</h1>
          <p className="text-white">Mon to Fri : 09:00 am - 18:00 pm</p>
          <div className="flex mt-8">
            <Link>
              <FaFacebookSquare className="text-white w-[30px]  h-[30px]" />
            </Link>
            <Link>
              <FaLinkedin className="text-white ml-4 w-[30px]  h-[30px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
