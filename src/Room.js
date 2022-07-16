import React from "react";

const Room = ({ superHost, title, rating, beds, type, photo }) => {
  return (
    <section>
      <img className="room--img" src={photo} alt="" />
      <div className="room--description">
        <div className="room-description--host">
          {superHost && <span className="room--host">super host</span>}
          <p className="room--type">
            {type}
            {beds ? (
              <span>. {beds > 1 ? `${beds} beds` : "1 bed"} </span>
            ) : null}
          </p>
        </div>
        <h5 className="room--rating">
          <span className="room-rating--star">⭐</span>
          {rating}
        </h5>
      </div>
      <p className="room--title">{title}</p>
    </section>
  );
};

export default Room;
