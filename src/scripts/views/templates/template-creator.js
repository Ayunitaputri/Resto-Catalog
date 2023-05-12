import CONFIG from '../../globals/config';

const RestoDetailTemplate = (restaurants) => `
<h2 class="movie__title">${restaurants.name}</h2>
<img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}"/>
  <div class="movie__info">
    <h3>Information</h3>
    <h4>Address</h4>
    <p>${restaurants.address}</p>
    <h4>City</h4>
    <p>${restaurants.city}</p>
    <h4>Description</h4>
    <p>${restaurants.description}</p>
    <h4>Foods Menu</h4>
    <p>${restaurants.menus.foods.map((food) => food.name)}</p>
    <h4>Drinks Menu</h4>
    <p>${restaurants.menus.drinks.map((drink) => drink.name)}</p>

    <div class="cust-review">
    <h4>Customer Review: </h4>
      ${restaurants.customerReviews.map((review) => `
        <div class="info-review">
          <b>${review.name}</b>
          <p>${review.date}</p>
          <p>Review: ${review.review}</p>
        </div>`).join('')}
        </div>
    </div>
    `;

const RestoItemTemplate = (restaurants) => `
<div class="card-list">
  <div class="card-item" tabindex="0">
    <img class="card-img" src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}"/>
          <div class="card-info">
            <h2 class="resto-name" tabindex="0"><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h2>
            <h3>Rating</h3>
            <div class="movie-item__header__rating">
            <p>⭐️<span class="movie-item__header__rating__score">${restaurants.rating}</span></p>
            </div>
            <p>Kota ${restaurants.city}</p>
            <p>Deskripsi: <br>${restaurants.description}</p>
          </div>
  </div>


  <div class="resto-item-content">
  </div>

</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  RestoItemTemplate,
  RestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
