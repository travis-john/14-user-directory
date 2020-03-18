import React from "react";

function Card(props) {
  return (
    <div className='card mb-4'>
      <img className='card-img-top' src={props.image} alt={props.name} />
      <div className='card-body'>
        <h5 className ='card-title'>{props.name}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Location:</b> {props.location}</li>
          <li className="list-group-item"><b>Email:</b> {props.email}</li>
          <li className="list-group-item"><b>Phone:</b> {props.phone}</li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
