import React from "react";

const card = (props) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={props.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>

          <p></p>
          {props.type}
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
