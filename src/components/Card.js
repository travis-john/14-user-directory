import React from "react";

function Card(props) {
  return (
    <div className='card'>
      /* <img className='card-img-top' src={props.picture} /> */
      <div className='card-body'>
        <h5 className ='card-title'>{props.name}</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><b>Company:</b> {props.company}</li>
          <li class="list-group-item"><b>Email:</b> {props.email}</li>
          <li class="list-group-item"><b>City:</b> {props.city}</li>
          <li class="list-group-item"><b>Phone:</b> {props.phone}</li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
