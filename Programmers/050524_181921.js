function solution(l, r) {
  let answer = [];

  for (let i = l; i <= r; i++) {
    let str = String(i);

    if ([...str].every((chr) => chr === '5' || chr === '0')) {
      answer.push(i);
    }
  }

  return answer.length > 0 ? answer : [-1];
}

solution(5, 555);
