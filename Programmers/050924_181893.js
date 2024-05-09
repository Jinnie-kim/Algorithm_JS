function solution(arr, query) {
  let answer = arr;

  for (let i = 0; i < query.length; i++) {
    if (i % 2 === 0) {
      answer.splice(query[i] + 1);
    } else {
      answer.splice(0, query[i]);
    }
  }
  return answer;
}

solution([0, 1, 2, 3, 4, 5], [4, 1, 2]);
