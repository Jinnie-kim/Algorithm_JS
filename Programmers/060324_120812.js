function solution(array) {
  const map = new Map();

  for (let n of array) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  map = [...map].sort((a, b) => b[1] - a[1]);
  return map.length === 1 || map[0][1] > map[1][1] ? map[0][0] : -1;
}
