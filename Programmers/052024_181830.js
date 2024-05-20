function solution(arr) {
  let answer = arr.slice();

  if (arr.length === arr[0].length) return answer;

  if (arr.length > arr[0].length) {
    while (answer[0].length < arr.length) {
      for (let i = 0; i < arr.length; i++) {
        answer[i].push(0);
      }
    }
  } else {
    while (answer.length < arr[0].length) {
      answer.push(Array(arr[0].length).fill(0));
    }
  }
  return answer;
}

solution([
  [572, 22, 37],
  [287, 726, 384],
  [85, 137, 292],
  [487, 13, 876],
]);
