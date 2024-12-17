function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This will work fine

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
    if (i === 3) {
      return; //Early exit, but forget to handle the case of n < 3
    }
  }
}

printNumbers2(2); // This will not print 2
printNumbers2(5); //This will only print 1, 2, 3