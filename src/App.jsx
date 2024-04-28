import React from 'react';
import { Typewriter } from 'react-simple-typewriter'; // Ensure you've installed this library

function App() {
  const handleType = (count) => {
    // Access word count number
    console.log(count); // Correct syntax
  };

  const handleDone = () => {
    console.log('Done after 5 loops!');
  };

  return (
    <div className="App" style={{ textAlign: 'center' }}> {/* Center the content */}
      <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        Life is simple{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Typewriter effect with specified words */}
          <Typewriter
            words={['Eat', 'Sleep', 'Code', 'Repeat!']} // Words to display
            loop={5} // Number of times to loop
            cursor // Enable cursor
            cursorStyle="_" // Cursor style
            typeSpeed={70} // Speed of typing
            deleteSpeed={50} // Speed of deletion
            delaySpeed={1000} // Delay between loops
            onLoopDone={handleDone} // Callback after loops are done
            onType={handleType} // Callback when a word is typed
          />
        </span>
      </h1>
    </div>
  );
}

export default App;
