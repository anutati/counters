import React from "react";

const Counter = ({id, value, name, onDelete, onIncrement, onDecrement}) => {
  const formValue = () => {
    return value === 0 ? "Ноль" : value;
  };

  const getBageClasses = () => {
    let classes = "badge m-2 bg-";
    classes += value === 0 ? "danger" : "primary";
    return classes;
  };

  return (
    <React.Fragment>
      <h4>{name}</h4>
      <span className={getBageClasses()}>{formValue()}</span>
      <button
        onClick={() => onIncrement(id)}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => onDecrement(id)}
        className="btn btn-secondary btn-sm"
      >
        Decrement
      </button>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </React.Fragment>
  );
};

export default Counter;
