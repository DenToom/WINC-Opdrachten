import React from 'react';

// import './UserInput.css';

// UserInput should hold an input element
const userinput = props => {
  const inputStyle = {
    border: '2px solid purple'
  };

  return (
    <div className="UserInput">
      <p> {props.childeren}</p>
      <input
        type="text"
        style={inputStyle}
        onChange={props.changed}
        value={props.currentname}
      />
    </div>
  );
};

export default userinput;
