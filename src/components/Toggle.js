import React, { useState } from "react";


function Toggle() {
  const [active, setActive] = useState(false);

  function handleClick() {

    setActive(active => !active)
  }

  const color = active ? 'white' : 'red';

  return <button style={{ background: color }} onClick={handleClick}>{active ? 'ON' : 'OFF'}</button>;
}

export default Toggle;