import React from 'react';

const styles = [
  {background: "bg-green-400", position: "top-0"},
  {background: "bg-blue-400", position: "right-0"},
  {background: "bg-teal-400", position: ""},
];

function Gradient({styleId}) {
  const style = styles[styleId] || styles[0];
  return (
    <div className={`gradientBlur ${style.background} ${style.position} z-1`}></div>
  );
}

export default Gradient;
