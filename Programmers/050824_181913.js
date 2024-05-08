function solution(my_string, queries) {
  let tempStr = [...my_string];
  let result = '';

  for (let query of queries) {
    let [from, to] = query;
    let slicedText = tempStr.slice(from, to + 1);
    let reversedText = slicedText.reverse();

    tempStr.splice(from, to - from + 1, ...reversedText);
    result = tempStr.join('');
  }

  return result;
}
