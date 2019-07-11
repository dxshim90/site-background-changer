var sum = (num, num2) => {
  if (num2 !== undefined) {
    return num + num2;
  } else {
    return plus => {
      return num + plus;
    };
  }
};

console.log(sum(1)(4));
console.log(sum(2, 3));
