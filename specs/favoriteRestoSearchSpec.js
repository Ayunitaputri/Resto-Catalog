import FavoriterestoSearchPresenter from '../src/scripts/views/pages/liked-resto/favorite-resto-search-presenter';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto';
import FavoriterestoSearchView from '../src/scripts/views/pages/liked-resto/favorite-resto-search-view';

describe('Searching restos', () => {
  let presenter;
  let FavoriteResto;
  let view;

  const searchrestos = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setrestoSearchContainer = () => {
    view = new FavoriterestoSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    FavoriteResto = spyOnAllFunctions(FavoriteRestoIdb);
    presenter = new FavoriterestoSearchPresenter({
      FavoriteResto,
      view,
    });
  };

  beforeEach(() => {
    setrestoSearchContainer();
    constructPresenter();
  });
  //
  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchrestos(' ');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchrestos('    ');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchrestos('');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchrestos('\t');
      expect(presenter.latestQuery.length)
        .toEqual(0);
    });

    it('should show all favorite restos', () => {
      searchrestos('    ');

      expect(FavoriteResto.getAllResto)
        .toHaveBeenCalled();
    });
  });

  describe('When no favorite restos could be found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('restos').addEventListener('restos:updated', () => {
        expect(document.querySelectorAll('.resto-item__not__found').length).toEqual(1);

        done();
      });

      FavoriteResto.searchrestos.withArgs('film a').and.returnValues([]);

      searchrestos('film a');
    });

    it('should not show any resto', (done) => {
      document.getElementById('restos').addEventListener('restos:updated', () => {
        expect(document.querySelectorAll('.resto-item').length)
          .toEqual(0);
        done();
      });

      FavoriteResto.searchrestos.withArgs('film a')
        .and
        .returnValues([]);

      searchrestos('film a');
    });
  });
});
