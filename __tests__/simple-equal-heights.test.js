const Nightmare = require('nightmare');
const path = require('path');
const pathToFile = path.resolve('./src/baseDOM.html');

let nightmare;

beforeEach(() => {
  nightmare = Nightmare();
});

it("It correctly sets the object's height", async () => {
  let heights = await nightmare
    .goto(`file://${pathToFile}`)
    .inject('js', 'src/simple-equal-heights.js')
    .evaluate(() => {
      let categories = new Set();
      let heights = {};

      document
        .querySelectorAll('[data-match-height]')
        .forEach(item => categories.add(item.dataset.matchHeight));

      categories.forEach(category => {
        document
          .querySelectorAll(`[data-match-height="${category}"]`)
          .forEach(element => {
            if (!heights[category]) {
              console.log('heights[category] is empty!');
              heights[category] = [];
            }

            heights[category].push(element.clientHeight);
          });
      });

      return heights;
    })
    .end();

  Object.keys(heights).forEach(k => {
    expect(new Set(heights[k]).size).toBe(1);
  });
});
