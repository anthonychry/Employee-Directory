import React from "react";
import "./row.css";

function Row (props) {

    return (
          <div className="row"> 
          <div><img src={props.thumbnail} alt="user"></img></div>
          <div>{props.first} {props.last}</div>
          <div>{props.cell}</div>
          <div>{props.email}</div>
          <div>{props.dob}</div>
          </div>
    );
}

export default Row;