// // Given a series of fetcher methods used for autocomplete, which accept a search string and a callback function. Write a method combineFetchers that can accept multiple fetchers and returns a new function which fetches a combination of results.

// /**
//  * @example
//  * type FetcherCallback = (results: string[]) => void
//  * type Fetcher = (prefix: string, callback: FetcherCallback) => void
//  * type FetcherComposer = (Fetcher[]) => Fetcher 
//  * */

// const callback = (res) => {
//   console.log(res)
// }
// const prefix = 'to';

// fetchUsers((results) => {
//     console.log(results); // [‘Tom Jones’, ‘Tom Peters’]
// });

// fetchArticles((result) => {
//   console.log(result)
// })

// const x = fetchUsers(callback)

// const fetchArticles = (prefix, callback);

// const y = fetchArticles(prefix, callback)

// const getStuff = combineFetchers([fetchUsers, fetchArticles])


// getStuff('to', (results) => {
//   console.log(results); // [‘To be or not to be’, ‘Tom Jones’, ‘Tom Peters’]    
// });

// function combineFetchersFail(array) {
//   const result = [];
//   const get = async (prefix, callback) => {
//      for (const fetcher of array) {
//        const temp = await fetcher(prefix, callback);
//        result.push(...temp);
//      }
//     return result;
//   }
//   return get;
// }


// function combineFetchers(array) {
//   const fetchOne = array[2];
//   const fetchTwo = array[1];
  
// }
