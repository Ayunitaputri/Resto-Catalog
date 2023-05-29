class FavoriterestoSearchPresenter {
  constructor({ FavoriteResto, view }) {
    this._view = view;
    this._listenToSearchRequestByUser();
    this._FavoriteResto = FavoriteResto;
  }

  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchrestos(latestQuery);
    });
  }

  async _searchrestos(latestQuery) {
    this._latestQuery = latestQuery.trim();

    let foundrestos;
    if (this.latestQuery.length > 0) {
      foundrestos = await this._FavoriteResto.searchrestos(this.latestQuery);
    } else {
      foundrestos = await this._FavoriteResto.getAllResto();
    }

    this._showFoundrestos(foundrestos);
  }

  _showFoundrestos(restos) {
    this._view.showFavoriterestos(restos);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriterestoSearchPresenter;
