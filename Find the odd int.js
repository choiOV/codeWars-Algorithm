function findOdd(A) {
  //happy coding!
  const newArray = A;
  let elementRepeatCount = 1;

  newArray.sort();

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === newArray[i + 1]) {
      elementRepeatCount++;
    }
  }
}
