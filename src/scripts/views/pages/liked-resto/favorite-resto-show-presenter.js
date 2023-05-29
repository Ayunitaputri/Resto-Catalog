class FavoriterestoShowPresenter {
  constructor({ view, FavoriteResto }) {
    this._view = view;
    this._FavoriteResto = FavoriteResto;

    this._showFavoriterestos();
  }

  async _showFavoriterestos() {
    const restos = await this._FavoriteResto.getAllResto();
    this._displayrestos(restos);
  }

  _displayrestos(restos) {
    this._view.showFavoriterestos(restos);
  }
}

export default FavoriterestoShowPresenter;
