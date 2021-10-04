let items = [1, 2];

function callMeMaybe(callback: () => void) {
  callback();
}

const getUser: (n: number) => void = (n: number) => {
  return Math.random() > n ? ['Tom Balls'] : ['Tom Tits'];
};

// OR this:
const getArticles: () => void = () => {
  return ['Tits on the Top.', 'Tits on the bottom'];
};

type FetcherCallback = (results: string[]) => void
 
function _getArticles(prefix: string, callback: FetcherCallback) {
  return callback;
}

// Expected an error because 'doSomething' returns number, but 'callMeMaybe'
// expects void-returning function
async function getFetchers(n: number) {
  let result = [];
  try {
    const user = await getUser(n);
    const articles = await getArticles();
    return [user, articles];
  } catch (err) {
    throw err;
  }
}

(async function() {
  try {
    const res = await getFetchers(666);
    console.log(res); // [ [ 'Tom Tits' ], [ 'Tits on the Top.', 'Tits on the bottom' ] ]
  } catch (err) {
    throw err;
  }
})();
