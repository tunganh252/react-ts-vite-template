import { routeType } from '@syy11cn/config-router';
import App from '@/App';
import ErrorPage from '@/views/ErrorPage';

const routes: Array<routeType> = [
  {
    path: '/404',
    component: ErrorPage,
  },
  {
    path: '/',
    exact: true,
    component: App,
  },
];

export default routes;
