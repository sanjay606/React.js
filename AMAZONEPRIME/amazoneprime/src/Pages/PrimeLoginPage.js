// import React, { useState } from 'react';

import React, { useState } from "react";

const PrimeLoginPage = () => {
  const [Data, SetFullData] = useState({
    Name: "",
    LName: "",
    Email: "",
    Mobile: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.name);
    SetFullData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(Data);
  };
  return (
    <div className="container">
      <div ><img className="photo" src="https://m.media-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"></img></div>
      <div className="Container-1">

      <div className="sin"><h1> Sign in</h1></div>&nbsp;
      
      <form  onSubmit={HandleSubmit}>
        <div>
        <label>Name:</label>
          <input
            type="text"
            name="Name"
            value={Data.Name}
            onChange={HandleChange}
           className="" placeholder="Enter your name"
          />
        </div>

        <div>
        <label>LName:</label>
          <input
            type="text"
            name="LName"
            value={Data.LName}
            onChange={HandleChange}
            placeholder="Enter your LName"
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="text"
            name="Email"
            value={Data.Email}
            onChange={HandleChange}
            placeholder="Enter your Email"
          />
        </div>

        <div>
        <label>Mobile:</label>
          <input
            type="text"
            name="Mobile"
            value={Data.Mobile}
            onChange={HandleChange}
            placeholder="Enter your Mobile"
          />
        </div>
        <button className="btn" type="submit">Submit</button>
        </form>
        </div>
    </div>
  );
};

export default PrimeLoginPage;
