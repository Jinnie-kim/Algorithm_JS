function solution(picture, k) {
  let answer = [];
  let temp = picture.slice().map((e) =>
    e
      .split('')
      .map((e) => e.repeat(k))
      .join('')
  );

  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < k; j++) {
      answer.push(temp[i]);
    }
  }

  return answer;
}

solution(['.xx...xx.', 'x..x.x..x', 'x...x...x', '.x.....x.', '..x...x..', '...x.x...', '....x....'], 2);
