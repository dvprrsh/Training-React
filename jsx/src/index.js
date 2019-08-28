// Import the react and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    const buttonText = { text: 'Click me!', otherText: 'Click' };
    const labelText = 'Enter name:';

    return (<div>
        <label className="label" htmlFor="name">
          {labelText}
        </label>
        <input id="name" type="text" />
        <button style={{ backgroundColor: 'blue', color: 'white' }}>
          {buttonText.text}
        </button>
      </div>);
};

// Take react component and show on screen
ReactDOM.render(<App />,document.querySelector('#root'));