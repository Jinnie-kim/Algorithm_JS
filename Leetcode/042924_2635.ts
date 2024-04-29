function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const answerArr: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    answerArr[i] = fn(arr[i], i);
  }

  return answerArr;
}

function map1(arr: number[], fn: (n: number, i: number) => number): number[] {
  const answerArr: number[] = [];

  arr.forEach((element, index) => {
    answerArr[index] = fn(element, index);
  });

  return answerArr;
}

function map2(arr: number[], fn: (n: number, i: number) => number): number[] {
  return arr.reduce((answerArr: number[], element, index) => {
    answerArr[index] = fn(element, index);

    return answerArr;
  }, []);
}

function map3(arr: number[], fn: (n: number, i: number) => number): number[] {
  const answerArr: number[] = [];

  let index = 0;

  for (const el of arr) {
    answerArr[index] = fn(el, index);
    index++;
  }

  return answerArr;
}
