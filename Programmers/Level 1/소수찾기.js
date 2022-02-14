// 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만드시오.
// 1은 소수가 아닙니다.

function solution(n) {
  let factorArray = [];

  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= n; j++) {
      let factor = i * j;
      if (factor <= n) {
        factorArray.push(factor);
      }
    }
  }

  let numberOfFactors = [...new Set(factorArray)].length;
  let answer = n - numberOfFactors - 1;
  return answer;
}

console.log(solution(100));
