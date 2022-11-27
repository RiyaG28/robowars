import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
      <img alt="robots" src={`http://robohash.org/${id}?size=200x200`} />
      <div>
        <h2> {name}</h2>
        <h3> {email}</h3>
      </div>
    </div>
  );
};

export default Card;
