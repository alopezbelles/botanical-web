import React from "react";
import './Button.css'

function CustomButton(props) {
    return <button className="customButtonDesign">{props.text}</button>;
  }
  
  export default CustomButton;