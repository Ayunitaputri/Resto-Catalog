import FavoriterestoSearchView from '../src/scripts/views/pages/liked-resto/favorite-resto-search-view';
import FavoriterestoShowPresenter from '../src/scripts/views/pages/liked-resto/favorite-resto-show-presenter';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto';

describe('Showing all favorite restos', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriterestoSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restos have been liked', () => {
    it('should ask for the favorite restos', () => {
      const FavoriteResto = spyOnAllFunctions(FavoriteRestoIdb);

      new FavoriterestoShowPresenter({
        view,
        FavoriteResto,
      });

      expect(FavoriteResto.getAllResto).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no restos have been liked', (done) => {
      document.getElementById('restos').addEventListener('restos:updated', () => {
        expect(document.querySelectorAll('.resto-item__not__found').length)
          .toEqual(1);

        done();
      });

      const FavoriteResto = spyOnAllFunctions(FavoriteRestoIdb);
      FavoriteResto.getAllResto.and.returnValues([]);

      new FavoriterestoShowPresenter({
        view,
        FavoriteResto,
      });
    });
  });

  describe('When favorite restos exist', () => {
    it('should show the restos', (done) => {
      document.getElementById('restos').addEventListener('restos:updated', () => {
        expect(document.querySelectorAll('.card-list').length).toEqual(2);
        done();
      });

      const FavoriteResto = spyOnAllFunctions(FavoriteRestoIdb);
      FavoriteResto.getAllResto.and.returnValues([
        {
          id: 11, title: 'A', vote_average: 3, overview: 'Sebuah film A',
        },
        {
          id: 22, title: 'B', vote_average: 4, overview: 'Sebuah film B',
        },
      ]);

      new FavoriterestoShowPresenter({
        view,
        FavoriteResto,
      });
    });
  });
});
