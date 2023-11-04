import React, { useState, useEffect } from "react";
import team1 from "../../../assets/team-1.jpg";
import team2 from "../../../assets/team-2.jpg";
import team3 from "../../../assets/team-3.jpg";
import team4 from "../../../assets/team-4.jpg";
import "./attorney.css";
import OneAttorney from "./oneattorney/OneAttorney";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdvocateData } from "../../../feature/dataSlice";
const Attorney = () => {
  const { advocateData} = useSelector(
    (state) => state.storeData
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdvocateData());
  });

  const Attorneys = [
    {
      img: team1,
      name: "Paz Coyers",
      desig: "Senior Attorney",
    },
    {
      img: team2,
      name: "Wanita Touchette",
      desig: "Senior Attorney",
    },
    {
      img: team3,
      name: "Jefferson Leveston",
      desig: "Senior Attorney",
    },
    {
      img: team4,
      name: "Gali Borzillo",
      desig: "Senior Attorney",
    },
    {
      img: team2,
      name: "Wanita Touchette",
      desig: "Senior Attorney",
    },
    {
      img: team1,
      name: "Paz Coyers",
      desig: "Senior Attorney",
    },
    {
      img: team4,
      name: "Gali Borzillo",
      desig: "Senior Attorney",
    },

    {
      img: team3,
      name: "Jefferson Leveston",
      desig: "Senior Attorney",
    },
  ];

  const [visibleLetters, setVisibleLetters] = useState(0);
  const slogan =
    "Our progress with yesterday's experience, today's reality and tomorrow's plan.";

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLetters((prevVisibleLetters) => prevVisibleLetters + 1);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className="relative attorney-back Attorney-content">
        <div
          className="absolute z-20 top-5 left-2 p-2  md:top-1/3 md:left-20 md:w-[500px] 
          lg:top-1/3 lg:left-28 lg:w-[850px]"
        >
          <h1 className="text-amber-500 text-3xl mt-1 font-bold md:text-5xl lg:text-5xl lg:font-medium uppercase">
            {slogan.slice(0, visibleLetters)}
            {visibleLetters === slogan.length && (
              <span className="text-transparent">_</span>
            )}
          </h1>
        </div>
        <div className="absolute z-10 top-0 h-[100%] w-full bg-black/80"></div>
      </div>
      <div className="mx-auto my-0 lg:w-[1250px]">
        <h1 className="text-3xl mt-20  font-bold  uppercase text-center text-navyblue">
          Meet Our Lawers
        </h1>
        {advocateData && advocateData.data && 
        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-20 p-10 mt-2 mb-10">
          {advocateData.data.map((attorney, index) => (
            <OneAttorney attorney={attorney} />
          ))}
        </div>
        }
      </div>
    </div>
  );
};

export default Attorney;
