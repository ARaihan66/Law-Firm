//import React from "react";
//import { Button } from "@material-tailwind/react";
//import {
//  Dialog,
//  DialogHeader,
//  DialogBody,
//  DialogFooter,
//} from "@material-tailwind/react";
//const OneAttorney = ({ attorney }) => {
//  const { imageUrl, name, designation, description, experience } = attorney;
//  const [open, setOpen] = React.useState(false);

//  const handleClickOpen = () => {
//    setOpen(true);
//  };

//  const handleClose = () => {
//    setOpen(false);
//  };
//  return (
//    <div className="grid grid-cols-1 lg:grid-cols-1 px-4">
//      <div className="attorneyshadow flex flex-col justify-between">
//        <div className=" h-[300px]" >
//          <img
//            src={`http://localhost:8000/` + imageUrl}
//            alt=""
//            className="w-[100%] h-[100%] object-cover"
//          />
//        </div>

//        <div className="p-5 text-center">
//          <h1 className="text-xl font-medium text-navyblue"> {name}</h1>
//          <h3 className="mt-2.5 font-medium text-navyblue">{designation}</h3>
//          </div>
//          <div className="mb-5 px-3"> 
//            <Button
//            onClick={handleClickOpen}
//            variant="gradient"
//            size="md"
//            className="w-[100%]"
//          >
//            View Advocate
//          </Button>
//          </div>
         
        
//      </div>

//      <Dialog open={open} className="h-[600px] overflow-auto"   aria-labelledby="alert-dialog-title"
//        aria-describedby="alert-dialog-description">
        
        
//        <DialogHeader className="flex justify-center items-center">
//          <div>
//            <img
//              src={`http://localhost:8000/` + imageUrl}
//              alt=""
//              className="w-[200px] h-[200px] object-cover"
//            />
//          </div>
//        </DialogHeader>
        
       
//        <DialogBody>
//          <div className="p-5 text-center ">
//            <h1 className="text-2xl font-bold text-navyblue"> {name}</h1>
//            <h3 className="mt-2.5 font-medium text-navyblue">{designation}</h3>
//            <h3 className="mt-2.5 font-medium text-navyblue">{experience}</h3>
//            <h3 className="mt-2.5 mb-2.5 text-2xl font-bold text-navyblue">
//              About {name}
//            </h3>
//            <h3 className="mt-2.5 font-medium text-navyblue text-justify">{description}</h3>
//          </div>
//        </DialogBody>
        
        
//          <DialogFooter>
//          <Button
//            variant="gradient"
//            color="red"
//            onClick={handleClose}
//            className="mr-1"
//          >
//            <span>Cancel</span>
//          </Button>
         
//        </DialogFooter>
        
      
      
        
//      </Dialog>
//    </div>
//  );
//};

//export default OneAttorney;

import React from "react";
import { Button } from "@material-tailwind/react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const OneAttorney = ({ attorney }) => {
  const { imageUrl, name, designation, description, experience } = attorney;
  const [open, setOpen] = React.useState(false);
  const [currentAttorney, setCurrentAttorney] = React.useState(attorney);
  const modalContentRef = React.useRef(null);

  const handleClickOpen = () => {
    setCurrentAttorney(attorney);
    setOpen(true);

    // Ensure modalContentRef is defined before attempting to scroll
    if (modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-1 px-4">
      <div className="attorneyshadow flex flex-col justify-between">
        <div className="h-[300px]">
          <img
            src={`http://localhost:8000/` + imageUrl}
            alt=""
            className="w-[100%] h-[100%] object-cover"
          />
        </div>

        <div className="p-5 text-center">
          <h1 className="text-xl font-medium text-navyblue"> {name}</h1>
          <h3 className="mt-2.5 font-medium text-navyblue">{designation}</h3>
        </div>
        <div className="mb-5 px-3">
          <Button
            onClick={handleClickOpen}
            variant="gradient"
            size="md"
            className="w-[100%]"
          >
            View Advocate
          </Button>
        </div>
      </div>

      <Dialog
        open={open}
        className="h-[600px] overflow-auto"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogHeader className="flex justify-center items-center">
          <div>
            <img
              src={`http://localhost:8000/` + currentAttorney.imageUrl}
              alt=""
              className="w-[200px] h-[200px] object-cover"
            />
          </div>
        </DialogHeader>

        <DialogBody ref={modalContentRef}>
          <div className="p-5 text-center ">
            <h1 className="text-2xl font-bold text-navyblue">
              {" "}
              {currentAttorney.name}
            </h1>
            <h3 className="mt-2.5 font-medium text-navyblue">
              {currentAttorney.designation}
            </h3>
            <h3 className="mt-2.5 font-medium text-navyblue">
              {currentAttorney.experience}
            </h3>
            <h3 className="mt-2.5 mb-2.5 text-2xl font-bold text-navyblue">
              About {currentAttorney.name}
            </h3>
            <h3 className="mt-2.5 font-medium text-navyblue text-justify">
              {currentAttorney.description}
            </h3>
          </div>
        </DialogBody>

        <DialogFooter>
          <Button
            variant="gradient"
            color="red"
            onClick={handleClose}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default OneAttorney;
