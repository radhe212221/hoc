import React, { useState } from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <C1 />
      <C2 />
      <C3 />
    </div>
  );
}

const C1 = () => {
  const [x, setx] = useState(0);
  console.log(useState(0));
  return <h1 onClick={() => setx(x + 1)}>counter : {x}</h1>;
};

const C2 = () => {
  const [x, setx] = useState(0);
  return <h2 onMouseOver={() => setx(x + 1)}>counter : {x}</h2>;
};

const C3 = () => {
  const [x, setx] = useState(0);
  return <h3 onDoubleClick={() => setx(x + 1)}>counter : {x}</h3>;
};
