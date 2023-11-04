import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/autoplay";
import "./testimonial.css";
import Avater from "../../../../assets/avater.png";
//import { commnetDataFetching } from "../../../../feature/commentSlice";
import { fetchCommentData } from "../../../../feature/dataSlice";
const Testimonial = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });

  const {commentData} = useSelector((state) => state.storeData);
  //console.log(commentData.data);
  const navigate = useNavigate();

  const { name, phone, email, comment } = formData;

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8000/api/comment/create", {
        name,
        phone,
        email,
        comment,
      })
      .then((result) => {
        if (result.data.message === "successful") navigate(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOnChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCommentData());
  }, [dispatch]);

  return (
    <div className="pt-20 testimonila-background1">
      <h1 className="text-3xl font-bold md:font-bold lg:font-bold text-navyblue uppercase text-center mb-10">
        Words Form Clients
      </h1>
      <div
        className="rounded-2xl testimonial-swiper testimonila-background w-[300px] md:w-[770px] lg:w-[1200px] md:p-8 "
        id="testimonial"
      >
        <div>
          <div className="md:my-8 cursor-grabbing p-6 rounded">
            {commentData && commentData.data && (
              <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                autoplay={{ delay: 2000 }}
                breakpoints={{
                  375: { slidesPerView: 1 },
                  767: { slidesPerView: 1 },
                  1200: { slidesPerView: 2 },
                }}
              >
                {commentData.data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="card bg-base-100 shadow-xl p-4">
                      <figure className="">
                        <img
                          src={Avater}
                          alt={item.name}
                          className="rounded-xl w-[170px]"
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <p className="text-justify">{item.comment}</p>
                        <div className="card-actions">
                          <h2 className="font-bold">{item.name}</h2>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
      <div className="testimonial-commentSection mt-20 p-10">
        <form
          className="testimonial-form md:w-[700px] lg:md:w-[700px]"
          onSubmit={handleSubmit}
        >
          <h1 className="font-semibold text-xl uppercase text-white pb-4">
            Leave a Comment
          </h1>

          <input
            className="mt-4 p-2"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={handleOnChange}
            name="name"
          />
          <input
            className="mt-4 p-2"
            type="number"
            placeholder="Your Phone Number"
            value={phone}
            name="phone"
            onChange={handleOnChange}
          />
          <input
            className="p-2 mt-4"
            type="email"
            placeholder="Enter Your E-mail"
            value={email}
            name="email"
            id=""
            onChange={handleOnChange}
          />
          <textarea
            className="mt-4 p-2"
            placeholder="Comment Here"
            value={comment}
            name="comment"
            onChange={handleOnChange}
          />

          <div className="commentbtn1 ">
            <input
              className="comment-submit mt-4 p-3 w-[100%]"
              type="submit"
              value="Post Comment"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Testimonial;
