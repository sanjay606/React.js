import React, { useState } from 'react';

function HomeOption() {
  const [optionsVisible, setOptionsVisible] = useState(false);

  const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  };

  const handleOptionClick = (option) => {
    // Add logic to handle the selected option here
    console.log(`Selected option: ${option}`);
    // You can replace the console.log with actual navigation or other actions
  };

  return (
    <div>
      <button onClick={toggleOptions}>Home</button>
      {optionsVisible && (
        <div className="options-menu">
          <ul>
            <li onClick={() => handleOptionClick('Option 1')}>Option 1</li>
            <li onClick={() => handleOptionClick('Option 2')}>Option 2</li>
            <li onClick={() => handleOptionClick('Option 3')}>Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HomeOption;
