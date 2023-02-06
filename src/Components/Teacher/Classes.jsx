import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "../../Images/ArrowIcon.svg";
import { TeacherLayout } from "../Layout";
import {  DropDown,InputField } from "../InputField"
import { PrimaryButton,SecondaryButton } from "../Button";

import { ClassCoData } from "../../Models/ClassCoData";
const options = [
    { value: "Class 1", label: "Class 1" },
    { value: "Class 2", label: "Class 2" },
    { value: "Class 3", label: "Class 3" },
    { value: "Class 4", label: "Class 4" },
  ];
const Classes = ({  }) => {
  return (
    
       <>
       <div className=" mt-7 ml-7 mr-7 flex gap-2 flex-col my-8">
          <h1 className="text-2xl font-bold">Select Class</h1>
          <hr />
          <DropDown options={options} label={"Class"} />
        </div>
        {ClassCoData.map(post=>{
         return(
           <>
           <div >
      <div className="container" style={{"marginBottom":"30px","display":"flex" ,"flexDirection":"row","padding":"20px"}}>
      <div className="bg-lightGreen  p-4 rounded-md flex flex-col gap-3 shadow hover:shadow-md cursor-pointer">
        <h2 className="text-xl font-medium " >Class Coordinator</h2>
      <h3 className="text-xl font-medium "> {post.name}</h3>
      <h4 className="text-sm font-medium"> {post.email}</h4>
      <h4 className="text-sm font-medium">{post.contact}</h4>

      
      </div>
      </div>
    </div>

           </>
         )
       })}
      
  

</> 
  );
};

export default Classes;