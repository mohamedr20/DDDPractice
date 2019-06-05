export const fib = (n: number): number => {
    let acc1 = 0;
    let acc2 = 1;
  
    for (let i = n; i > 1; --i) {
      const temp = acc1 + acc2;
      acc1 = acc2;
      acc2 = temp;
    }
  
    return acc1;
  };
