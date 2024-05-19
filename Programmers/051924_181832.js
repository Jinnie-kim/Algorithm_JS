function solution(n) {
  let answer = Array.from(Array(n), () => Array(n).fill(0));

  let row = 0; // 행의 시작 숫자 index
  let col = 0; // 열의 시작 숫자 index
  let num = 1; // 시작 숫자

  for (let i = n; i > 0; i -= 2) {
    // 오른쪽으로 이동
    for (let j = 0; j < i; j++) {
      answer[row][col] = num++;
      col++;
    }
    col--;
    row++;

    // 아래로 이동
    for (let j = 0; j < i - 1; j++) {
      answer[row][col] = num++;
      row++;
    }
    row--;
    col--;

    // 왼쪽으로 이동
    for (let j = 0; j < i - 1; j++) {
      answer[row][col] = num++;
      col--;
    }
    col++;
    row--;

    // 위로 이동
    for (let j = 0; j < i - 2; j++) {
      answer[row][col] = num++;
      row--;
    }
    row++;
    col++;
  }
  console.log(answer);
  return answer;
}

solution(4);
