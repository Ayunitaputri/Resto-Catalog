import FavoriteRestoIdb from '../../data/favorite-resto';
import FavoriterestoSearchView from './liked-resto/favorite-resto-search-view';
import FavoriterestoShowPresenter from './liked-resto/favorite-resto-show-presenter';
import FavoriterestoSearchPresenter from './liked-resto/favorite-resto-search-presenter';

const view = new FavoriterestoSearchView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriterestoShowPresenter({ view, FavoriteResto: FavoriteRestoIdb });
    new FavoriterestoSearchPresenter({ view, FavoriteResto: FavoriteRestoIdb });
  },
};

export default Like;
