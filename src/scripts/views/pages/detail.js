import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/restaurant-source';
import { RestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favorite-resto';

const Detail = {
  async render() {
    return `
    <div id="detail-resto" class="detail-resto"></div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoDbSource.getdetailResto(url.id);
    const restoContainer = document.querySelector('#detail-resto');
    restoContainer.innerHTML = RestoDetailTemplate(resto);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteRestoIdb,
      resto: {
        id: resto.id,
        name: resto.name,
        rating: resto.rating,
        city: resto.city,
        pictureId: resto.pictureId,
        description: resto.description,
      },
    });
  },
};

export default Detail;
