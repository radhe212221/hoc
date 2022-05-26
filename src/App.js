import React, { useState } from 'react';
import './style.css';

const C1 = (props) => {
  return <h1 onClick={props?.onchilClick}>counter : {props?.x}</h1>;
};

const C2 = (props) => {
  return <h2 onMouseOver={props?.onchilClick}>counter : {props?.x}</h2>;
};

const C3 = (props) => {
  return <h3 onDoubleClick={props?.onchilClick}>counter : {props?.x}</h3>;
};
function hoc(PassedComponent) {
  const NewComponent = (props) => {
    const [x, setx] = useState(0);
    return <PassedComponent x={x} onchilClick={() => setx(x + 1)} />;
  };
  return <NewComponent />;
}

export default function App() {
  return (
    <div>
      {hoc(C1)}
      {hoc(C2)}
      {hoc(C3)}
    </div>
  );
}
