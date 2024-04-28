function solution(code) {
  let ret = [];
  let mode = 0;

  for (i = 0; i < code.length; i++) {
    if (mode === 0) {
      if (code[i] !== '1') {
        if (i % 2 === 0) ret.push(code[i]);
      } else {
        mode = 1;
      }
    } else {
      if (code[i] !== '1') {
        if (i % 2 === 1) ret.push(code[i]);
      } else {
        mode = 0;
      }
    }
  }

  let answer = ret.join('') !== '' ? ret.join('') : 'EMPTY';

  return answer;
}

solution('abc1abc1abc');
