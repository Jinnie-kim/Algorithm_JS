function solution(str_list) {
  const rIdx = str_list.indexOf('r');
  const lIdx = str_list.indexOf('l');

  if (rIdx === -1 && lIdx === -1) {
    return [];
  }

  if (rIdx !== -1 && lIdx !== -1) {
    if (rIdx < lIdx) {
      return str_list.slice(rIdx + 1);
    }
    return str_list.slice(0, lIdx);
  }

  if (rIdx === -1) {
    return str_list.slice(0, lIdx);
  } else if (lIdx === -1) {
    return str_list.slice(rIdx + 1);
  }
}

// 다른 사람 풀이
function solution2(str_list) {
  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i] === 'l') {
      return str_list.slice(0, i);
    } else if (str_list[i] === 'r') {
      return str_list.slice(i + 1);
    }
  }

  return [];
}
