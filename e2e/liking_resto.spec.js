Feature('liking resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Showing empty liked resto', ({ I }) => {
  I.seeElement('#query');
  I.seeElement('.query');
  I.see('Tidak ada Resto untuk ditampilkan', '.resto-item__not__found');
});
