import React from "react";

const OneAttorney = ({ attorney }) => {
  const { imageUrl, name, experience, description } = attorney;
  return (
    <div className="attorneyshadow">
      <div>
        <img src={`http://localhost:8000/` + imageUrl} alt="" className="w-[100%]" />
        <h1 className="text-center text-2xl mt-4 font-medium">{name}</h1>
        <h3 className="text-center text-xl mt-4 font-medium">{experience}</h3>
        <p className="text-center pb-3">{description}</p>
      </div>
    </div>
  );
};

export default OneAttorney;
