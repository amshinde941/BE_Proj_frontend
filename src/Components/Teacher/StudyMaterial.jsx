import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "../../Images/ArrowIcon.svg";

import { DropDown } from "../InputField";
import { PrimaryButton, SecondaryButton } from "../Button";
import { StudyMaterialData } from "../../Models/StudyMaterialData";
const options = [
  { value: "Class 1", label: "Class 1" },
  { value: "Class 2", label: "Class 2" },
  { value: "Class 3", label: "Class 3" },
  { value: "Class 4", label: "Class 4" },
];
const StudyMaterial = ({}) => {
  return (
    <>
      <div className=" mt-7 ml-7 mr-7 flex gap-2 flex-col my-8">
        <h1 className="text-2xl font-bold">Select Class</h1>
        <hr />
        <DropDown options={options} label={"Class"} />
      </div>
     
       <div className="container">
       <div style={{"display":"flex","flexWrap":"wrap","alignItems":"center"}}>
       {StudyMaterialData.map(post=>{
         return(
           <>
           <div >
      <div className="container" style={{"marginBottom":"30px","display":"flex" ,"flexDirection":"row","padding":"20px"}}>
      <div className="bg-lightGreen  p-4 rounded-md flex flex-col gap-3 shadow hover:shadow-md cursor-pointer">
      <h3 className="text-sm font-medium ">{post.subjectname}</h3>
      <h2 className="text-xl font-medium">{post.bookname}</h2>
      <h2 className="text-xl font-medium">{post.author}</h2>

      <SecondaryButton className="flex items-center">
        Check Out
        <ArrowIcon />
      </SecondaryButton>
      </div>
      </div>
    </div>

           </>
         )
       })}
       </div>
     </div>

      <PrimaryButton
        style={{
          width: "200px",
          marginTop: "15px",
          marginLeft:"426px"
        }}
      >
        Upload
      </PrimaryButton>
   </> 
  );
};

export default StudyMaterial;
