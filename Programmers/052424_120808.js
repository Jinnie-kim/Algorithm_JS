function solution(numer1, denom1, numer2, denom2) {
  let denom; // 분모
  let numer; // 분자

  if (denom1 === denom2) {
    // 분모가 같을 때
    numer = numer1 + numer2;
    denom = denom1;
  } else {
    denom = denom1 * denom2; // 분모
    numer = numer1 * denom2 + numer2 * denom1; // 분자
  }

  const irreducibleNum = findIrreducibleNumber(numer, denom);
  // const irreducibleNum = findGcd(numer, denom);

  return [numer / irreducibleNum, denom / irreducibleNum];
}

function findIrreducibleNumber(numer, denom) {
  let max = 1;
  for (let i = 2; i <= Math.min(number, denom); i++) {
    if (denom % i === 0 && numer % i === 0) {
      max = max >= i ? max : i;
    }
  }

  return max;
}

function findGcd(a, b) {
  return b === 0 ? a : findGcd(b, a % b);
}

solution(3, 3, 3, 2);
