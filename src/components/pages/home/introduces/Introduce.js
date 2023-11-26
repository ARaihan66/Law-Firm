import React, { useState, useEffect } from "react";
import "./introduce.css";
import mustafizur from "../../../../assets/mustafizur.png";
const Introduce = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/admin/client/get", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        const serviceData = await response.json();
        //console.log(serviceData);
        const { data } = serviceData;
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="mt-20 mb-[100px]">
      {data &&
        data.map((item, index) => {
          return (
            <div key={index} className="flex justify-center flex-wrap px-8 md:flex-wrap md:px-8">
              <div className="lg:w-[600px] flex justify-center items-center h-screen">
                <div className="">
                  <img
                    src={`http://localhost:8000/` + item.imageUrl}
                    alt="Owner Of this firm"
                    className="rounded-full w-23 h-23 object-cover bg-gray-200"
                  />

                  <p className="mt-10 font-semibold text-navyblue text-2xl text-center">
                    {item.username}
                  </p>
                  <h3 className="mt-4 text-center text-xl">FOUNDER & CEO</h3>
                  <p className="mt-4 text-center text-xl">
                    {item.instituteName}
                  </p>
                  <p className="mt-4 text-center">
                    YOUR TOTAL BUSINESS SOLUTION
                  </p>
                </div>
              </div>

              <div className="md:mt-10 lg:w-[600px] lg:ml-10">
                <p className="md:mt-10 font-semibold text-navyblue text-xl">
                  ABOUT MOSTAFIJUR RAHAMAN
                </p>
                <p className="hcolor text-justify mt-2">{item.about}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Introduce;
