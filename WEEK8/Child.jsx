import React from "react";
function StudentCard(props){
    return(
        <div>
            <h2>Name : {props.name}</h2>
            <h3>roll number : {props.rollNumber}</h3>
            <h3>Branch : {props.branch}</h3>
            <img src={props.image} />
        </div>
    )
}
export default StudentCard;