import React from 'react';
import './App.css';
import Weather from './services/main'

function App() {
  const service = Weather.getNest()
  console.log('service: ', service);
  return (
    <div className="App">
      <header className="App-header">
        Header **** {service.firstName}
      </header>
      <main>
        <h1>Content: {service.lastName}</h1>
      </main>
    </div>
  );
}

export default App;
