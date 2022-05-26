import React, { useState } from 'react';
import './style.css';

const useMyState = () => ['html', 'css', 'js'];
const useMyEffect = () => ({ name: 'radhe', email: 'radhe@gmail.com', id: 1 });

export default function App() {
  const { email, phone, pass, con, repass, otp, name, id } = useMyEffect();
  // const [topic1, topic2, topic3, topic4] = useMyState();
  // console.log(useMyState())
  // console.log(topic1);
  // console.log(topic2);
  // console.log(topic3);
  // console.log(topic4);
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
