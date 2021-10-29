import * as React from 'react';
const { useState } = React;
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>Hello Vite + React + Typescript!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p className="callout">
          Edit <code>/src/routes/index.ts</code> for routes configuration.
        </p>
        <p>
          <a
            className="app-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="app-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          {' | '}
          <a
            className="app-link"
            href="https://github.com/syy11cn/config-router"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Config Router
          </a>
        </p>
      </header>
    </div>
  );
};

export default App;
