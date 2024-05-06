function solution(a, b, c, d) {
  const numArr = [a, b, c, d];

  const numberFrequency = numArr.reduce((acc, cur) => {
    acc[cur] = acc[cur] ?? 0;
    acc[cur]++;
    return acc;
  }, {});

  const valArrs = Object.values(numberFrequency);
  const keyArrs = Object.keys(numberFrequency);

  const maxCountValArrs = Math.max(...valArrs);

  switch (maxCountValArrs) {
    case 4:
      return a * 1111;

    case 3:
      const tripleKey = keyArrs.find((el) => numberFrequency[el] === 3);
      const singleKey = keyArrs.find((el) => numberFrequency[el] === 1);
      return (10 * tripleKey + +singleKey) ** 2;

    case 2: {
      if (keyArrs.length === 2) {
        if (a === b) return (a + c) * Math.abs(a - c);
        return (a + b) * Math.abs(a - b);
      } else {
        return keyArrs.reduce((acc, cur) => (numberFrequency[cur] === 1 ? acc * cur : acc), 1);
      }
    }
    default: {
      return Math.min(a, b, c, d);
    }
  }
}

solution(2, 2, 2, 2);
solution(4, 1, 4, 4);
solution(6, 3, 3, 6);
solution(2, 5, 2, 6);
solution(6, 4, 2, 5);
