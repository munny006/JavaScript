const max = Math.max(12,85,999,78);
const numbers = [12,85,999,78];
const largest  = Math.max(...numbers);
console.log(...numbers);
console.log(largest);

const numbers2 = [...numbers];
console.log(numbers);
console.log(numbers2);