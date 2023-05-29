import { RestoItemTemplate } from '../../templates/template-creator';

class FavoriterestoSearchView {
  getTemplate() {
    return `
       <div class="content">
       <input id="query" type="text">
       <h2 class="content__heading">Your Liked resto</h2>
           <div id="restos" class="restos">
                      
           </div>
       </div>
   `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showrestos(restos) {
    this.showFavoriterestos(restos);
  }

  showFavoriterestos(restos = []) {
    let html;
    if (restos.length) {
      html = restos.reduce((carry, resto) => carry.concat(RestoItemTemplate(resto)), '');
    } else {
      html = this._getEmptyrestoTemplate();
    }

    document.getElementById('restos').innerHTML = html;

    document.getElementById('restos').dispatchEvent(new Event('restos:updated'));
  }

  _getEmptyrestoTemplate() {
    return '<div class="resto-item__not__found restos__not__found">Tidak ada film untuk ditampilkan</div>';
  }
}

export default FavoriterestoSearchView;
