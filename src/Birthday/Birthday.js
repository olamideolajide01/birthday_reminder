import React from "react";
import infos from "../Birthday/BirthdayData";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(infos);

  const removeItem = (id) => {
    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id);
      return newPeople;
    });
  };

  return (
    <div className="box-container mt-2 ">
      <h1 className="mt-2 heading">{people.length} birthdays today</h1>

      <div>
        {people.map((person) => {
          return (
            <div className="d-flex-btn bg mt-2">
              <Reminder key={person.id} {...person}></Reminder>
              <button onClick={() => removeItem(person.id)}>Remove</button>
            </div>
          );
        })}
        <div className="text-center">
          <button className="btn" onClick={() => setPeople([])}>
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

const Reminder = ({ img, name, years }) => {
  console.log(img);
  return (
    <div>
      <div className="d-flex mt-2">
        <img className="img" src={img} alt="" />
        <div>
          <div>
            <h4>{name}</h4>
            <p>{years}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseStateArray;
