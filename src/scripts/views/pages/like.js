import FavoriteRestoIdb from '../../data/favorite-resto';
import { RestoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
        <div class="content">
          <h2 class="content__heading">Your Favorite Restaurant</h2>
          <div id="card-container" class="card-container">
     
          </div>
        </div>
      `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllResto();
    const restosContainer = document.querySelector('#card-container');

    restos.forEach((resto) => {
      restosContainer.innerHTML += RestoItemTemplate(resto);
    });
  },
};

export default Like;
