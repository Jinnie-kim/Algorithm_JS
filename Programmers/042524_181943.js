function solution(my_string, overwrite_string, s) {
  let answer = my_string.split('');

  const overwriteStringLength = overwrite_string.length;
  let index = 0;
  let startIndex = s;

  for (i = 1; i <= overwriteStringLength; i++) {
    answer[startIndex] = overwrite_string.split('')[index];
    index++;
    startIndex++;
  }

  console.log(answer.join(''));
  return answer.join('');
}

function solution2(my_string, overwrite_string, s) {
  let answer = [...my_string];

  answer.splice(s, overwrite_string.length, overwrite_string);
  return answer.join('');
}

solution2('Program29b8UYP', 'merS123', 7);
solution2('He11oWor1d', 'lloWorl', 2);
