// tutorial from: https://www.testim.io/blog/typescript-unit-testing-101/
export function add(numbers: string): number {
    let integers = numbers.split(',').map(x => parseInt(x));
    let negatives = integers.filter(x => x < 0);

    if (negatives.length > 0)
        throw new RangeError('Negatives are not allowed: ' + negatives.join(', '));

    return integers
        .filter(x => x <= 1000)
        .reduce((a, b) => a + b, 0);
}

let result = add('1, 2, 4, 5');
console.log(result);