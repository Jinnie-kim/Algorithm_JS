function solution(arr, queries) {
  let answer = [];

  for (let [s, e, k] of queries) {
    let small = Infinity;
    for (let i = s; i <= e; i++) {
      if (arr[i] > k && arr[i] < small) {
        small = arr[i];
      }
    }
    if (small !== Infinity) {
      answer.push(small);
    } else {
      answer.push(-1);
    }
  }
  console.log(answer);
  return answer;
}

solution(
  [0, 1, 2, 4, 3],
  [
    [0, 4, 2],
    [0, 3, 2],
    [0, 2, 2],
  ]
);
