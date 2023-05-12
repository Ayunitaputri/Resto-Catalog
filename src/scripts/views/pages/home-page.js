import RestoDbSource from '../../data/restaurant-source';
import { RestoItemTemplate } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
    <div class="hero">
    <img src="./images/hero-image_4.jpg" alt="Hero-Element">
    <div class="hero-inner">
    <h1 tabindex="0">Let's Find the best foods here !</h1>
    </div>
    </div>

    <div class="content">

      <div class="header-content">
      <h1 tabindex="0">Explore Restaurant</h1>  
      </div>

      <div id="card-container" class="card-container"></div>
    </div>
      `;
  },

  async afterRender() {
    const restos = await RestoDbSource.getListResto();
    const restoContainer = document.querySelector('#card-container');
    restos.forEach((restaurants) => {
      restoContainer.innerHTML += RestoItemTemplate(restaurants);
    });
  },
};

export default HomePage;
