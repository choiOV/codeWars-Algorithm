function solution(number) {
  const num3 = 3;
  const num5 = 5;
  const resultArray = [];
  let multipled3 = 0;
  let multipled5 = 0;

  if (number <= 3) {
    return 0;
  }

  for (let i = 0; i < number; i++) {
    multipled3 += num3;
    if (multipled3 < number) {
      resultArray.push(multipled3);
    }
  }

  for (let i = 0; i < number; i++) {
    multipled5 += num5;
    if (multipled5 < number) {
      resultArray.push(multipled5);
    }
  }

  const set = new Set(resultArray);
  const uniqueArray = [...set];
  const sumedResultArray = uniqueArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  return sumedResultArray;
}
