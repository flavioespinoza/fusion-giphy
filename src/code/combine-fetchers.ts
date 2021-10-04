/**
 * @example
 * type FetcherCallback = (results: string[]) => void
 * type Fetcher = (prefix: string, callback: FetcherCallback) => void
 * type FetcherComposer = (Fetcher[]) => Fetcher 
 * */

function myCallback(prefix: string, callback: (prefix: string) => void) {
  return callback(prefix);
}

// this function returns a number
function aNumberCallback(): number {
  return 2;
}

// this function returns a number
function fetchUsersCallBack(prefix: string): string[] {
  return ['Tom Titties', 'Cheech Cheechees', 'Becky Balls', prefix];
}
function fetchArticlesCallback(prefix: string): string[] {
  return ['Titties on Top', 'Cheechees and Change', 'Becky Blows Boston'];
}

// works 👍 type safety is ensured in doSomething
async function fetchers(array: any) {
  const arr = [];
  const get = async (prefix: string, callback) => {
    for (let i = 0; i < array.length; i++) {
      const fetch = array[i];
      arr.push(...callback(prefix, fetch));
    }
    return arr;
  };
  return get;
}

(async function() {
  try {
    const getStuff = await fetchers([fetchUsersCallBack, fetchArticlesCallback]);
    const res = await getStuff('to', myCallback);
    console.log(res);
    const output = [
      'Tom Titties',
      'Cheech Cheechees',
      'Becky Balls',
      'to',
      'Titties on Top',
      'Cheechees and Change',
      'Becky Blows Boston',
    ];
  } catch (err) {
    throw err;
  }
})();
