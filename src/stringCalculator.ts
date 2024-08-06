// src/stringCalculator.ts
export function add(numbers: string): number {
  if (!numbers) return 0;

  const delimiter = numbers.startsWith('//') ? numbers.split('\n')[0].slice(2) : ',';
  const numberString = numbers.startsWith('//') ? numbers.split('\n')[1] : numbers;

  const regex = new RegExp(`[${delimiter}\n]`);
  const numberArray = numberString.split(regex);

  let sum = 0;
  const negatives: number[] = [];

  numberArray.forEach(num => {
    const n = parseInt(num, 10);
    if (isNaN(n)) return;

    if (n < 0) {
      negatives.push(n);
    } else {
      sum += n;
    }
  });

  if (negatives.length) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(',')}`);
  }

  return sum;
}
