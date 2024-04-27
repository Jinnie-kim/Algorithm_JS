function solution(ineq, eq, n, m) {
  let answer = 0;

  if (ineq === '<') {
    if (eq === '!') {
      answer = n < m;
    } else if (eq === '=') {
      answer = n <= m;
    }
  } else if (ineq === '>') {
    if (eq === '!') {
      answer = n > m;
    } else if (eq === '=') {
      answer = n >= m;
    }
  }

  return answer === true ? 1 : 0;
}

solution('>', '!', 41, 78);
