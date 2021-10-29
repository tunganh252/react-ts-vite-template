import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { RouterView } from '@syy11cn/config-router';
import routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RouterView
        routes={routes}
        onEnter={function (to: string, next: (path?: string) => void): void {
          // Let '/' and '/404' go.
          if (to === '/' || to === '/404') {
            next();
            return;
          }
          // Other routes would be redirected to '/404'
          next('/404');
        }}
      ></RouterView>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
