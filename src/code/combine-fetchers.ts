/**
 * @example
 * type FetcherCallback = (results: string[]) => void
 * type Fetcher = (prefix: string, callback: FetcherCallback) => void
 * type FetcherComposer = (Fetcher[]) => Fetcher
 * */
function combineFetchersGoogle(array) {
  const result = [];
  const get = async (prefix, callback) => {
    for (const fetcher of array) {
      const temp = await fetcher(prefix, callback);
      result.push(...temp);
    }
    return result;
  };
  return get;
}

function fetchUsers(prefix: string, callback: (prefix: string) => void) {
  return callback('users' + '_' + prefix);
}

function fetchArticles(prefix: string, callback: (prefix: string) => void) {
  return callback('articles' + '_' + prefix);
}

function gonnaGetACallback(prefix: string): string[] {
  let data = [];
  const key = prefix.split('_');;
  if (key[0] === 'users') {
    data = ['Tom Jones', 'Tom Peters'];
  }
  if (key[0] === 'articles') {
    data = ['To be or not to be'];
  }
  return data;
}

(async function() {
  try {
    const getFetchersAndArticles = await combineFetchersGoogle([
      fetchUsers,
      fetchArticles,
    ]);
    const res2 = await getFetchersAndArticles('to', gonnaGetACallback);
    console.log(res2); // [ 'Tom Jones', 'Tom Peters', 'To be or not to be' ]
  } catch (err) {
    throw err;
  }
})();
