export function add(numbers: string): number {
  if (!numbers) return 0;

  const delimiterRegex = /^\/\/(.+)\n/;
  const match = numbers.match(delimiterRegex);

  let delimiter = /[\n,]/;
  let numberString = numbers;

  if (match) {
    delimiter = new RegExp(match[1]);
    numberString = numbers.replace(delimiterRegex, '');
  }

  const negativeNumbers: number[] = [];
  const numbersArray = numberString.split(delimiter).map(num => {
    const number = parseInt(num, 10);
    if (number < 0) negativeNumbers.push(number);
    return number;
  });

  if (negativeNumbers.length > 0) {
    throw new Error('Negative numbers not allowed: ' + negativeNumbers.join(', '));
  }

  return numbersArray.filter(num => num <= 1000).reduce((a, b) => a + b, 0);
}
