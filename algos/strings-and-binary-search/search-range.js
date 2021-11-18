const searchRange = function(N, T) {
  const find = (target, arr, left = 0, right = arr.length) => {
    while (left <= right) {
      let mid = (left + right) >> 1;
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return left;
  };
  let tLeft = find(T, N);
  if (N[tLeft] !== T) return [-1, -1];
  return [tLeft, find(T + 1, N, tLeft) - 1];
};
