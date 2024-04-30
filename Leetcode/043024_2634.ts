type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
  const answer: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) answer.push(arr[i]);
  }

  console.log(answer);

  return answer;
}

filter([0, 10, 20, 30], function (n) {
  return n > 10;
});

// function filter(arr, fn) {
//   const answer = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i)) answer.push(arr[i]);
//   }

//   console.log(answer);

//   return answer;
// }

// filter([0, 10, 20, 30], function (n) {
//   return n > 10;
// });
