const assert = require('assert');

Feature('Liking Restos');

Scenario('liking one resto', async ({ I }) => {
  I.amOnPage('/');

  I.waitForVisible('.resto-name');
  I.seeElement('.resto-name a');
  const firstResto = locate('.resto-name a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);

  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');
  const likedRestoName = await I.grabTextFrom('.resto-name');

  assert.strictEqual(firstRestoName, likedRestoName);
});

Scenario('unliking one resto', async ({ I }) => {
  I.amOnPage('/');
  I.waitForVisible('.resto-name');
  I.seeElement('.resto-name a');

  const firstResto = locate('.resto-name a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);

  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');

  const likedRestoName = await I.grabTextFrom('.resto-name');
  assert.strictEqual(firstRestoName, likedRestoName);

  I.seeElement('.resto-namee a');
  const firstRestoFav = locate('.resto-name a').first();
  I.click(firstRestoFav);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.dontSeeElement('.resto-item');
});
