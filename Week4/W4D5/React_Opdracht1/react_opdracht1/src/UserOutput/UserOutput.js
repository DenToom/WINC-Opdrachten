import React from 'react';

import './UserOutput.css';
// UserOutput should contain two paragraphs
// Output multiple UserOutput components in the App
// component (any paragraph texts of your choice)

const useroutput = props => {
  return (
    <div className="UserOutput">
      <p>Name: {props.name} </p>
      <p>I hope I'll be overwritten!</p>
    </div>
  );
};

export default useroutput;
