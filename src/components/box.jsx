import React from 'react';


function Box({ title, text1, text2 }) {
  return (
    <div className="box">
      <h2>{title}</h2>
      <p>{text1}</p>
      <p>{text2}</p>
      <button>Click Me</button>
    </div>
  );
}

function Page() {
  return (
    <div className='container'>
      <h1>Tanisha Garg</h1>
        <div className="boxes">
            <Box title="tanisha garg" text1="age:20" text2="email:tanishagarg84@gmail.com" />
            <Box title="geetika" text1="age:21" text2="email:geetika@gmail.com" />
            <Box title="mayukh" text1="age:22" text2="email:mayukh@gmail.com" />
        </div>
    </div>
  );
}

export default Page;

