type F = (x: number) => number;

function compose(functions: F[]): F {
  if (functions.length === 0) {
    return (x: number) => x;
  }
  return function (x: number) {
    let answer = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      answer = functions[i](answer);
    }

    return answer;
  };
}
