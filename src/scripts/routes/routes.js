import HomePage from '../views/pages/home-page';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': HomePage, // default page
  '/home-page': HomePage,
  '/detail/:id': Detail,
  '/favorite': Like,
};

export default routes;
