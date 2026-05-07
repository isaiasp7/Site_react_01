import './style.css'
import { useState, useEffect } from "react";

const Body= () => {
  return (
    <>
    <div className="containerB">
        <div className="img_principal">
          
        </div>
        <h1 className='h1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, facere.</h1>
         <h1 className='h1-background'></h1>
        <div className="Bc">
          <Card path ="img/6cf352c747a73855de8ee3337c464f93-Photoroom.png" text = "068158"/>
          <Card path ="img/75f492e743a991f98def13e1b1b3cb54_upscayl_5x_upscayl-standard-4x-Photoroom.png" text = "065189"/>
          <Card path ="img/temp-15-4-29-d91145aa57dca0929793f69de929368f-1_upscayl_5x_upscayl-standard-4x-Photoroom.png" text = "005168"/>
        </div>
        <div className="Bd"></div>
        <div className="Be"></div>
    </div>
    </>
  );
}

function Card({ path ,text}) {
  return (
    <div className="card">
      <img src={path} alt="" />
      <h4 className='text'>{text}</h4>
    </div>
  );
}




export default Body;
