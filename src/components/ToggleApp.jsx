import React, { useState } from 'react';

const ToggleApp = () => {
  const [dark, setDark] = useState(false);
  return (
    <div
      style={{
        background: dark ? '#333' : '#fff',
        color: dark ? '#fff' : '#333',
        padding: '20px',
      }}
    >
      <h1>{dark ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
};

export default ToggleApp;
