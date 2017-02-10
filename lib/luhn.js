/*  LUHN ALGORITHM CHECKLIST
[x] Let the number be 853X, with X=0, the digit we want to calculate.
[x] One takes the digit 3, doubled, 3*2 = 6,
[x] One takes the digits 5, not multiplied by 2href
[x] And one takes the 8, multiplies it by 2 : 8*2=16 and 1+6=7 to get 7.
[x] The sum is 6+5+7 = 18. As 18 modulo 10href = 8, one calculated (10 - 8) %10 = 2, 2 is the digit checksum control.
[x] So 8532 is valid.
*/

const digitsRegEx = /^\d*$/;

function numSortAndSum (num) {
  let digits = String(num).split('').reverse();
  let x;
  let sum;

  for (let i = 0; i < digits.length; i++){
    if (i === 0){
      x = Number(digits[i]);
      digits[i] = 0;
    }
    if (!(i % 2 === 0)){
      digits[i] = digits[i] * 2;
      if (digits[i] > 9) {
        digits[i] = digits[i] - 9;
      }
    }
  }
  sum = digits.reduce((a, b) => a + Number(b));

  return [ sum, x];
}

function check(num){
  if (!digitsRegEx.test(num)){
    return false
  }
  // array destructuring
  let [sum, x] = numSortAndSum(num);
  mod = sum % 10;
  control = (10 - mod) % 10;

  return x === control;
}


module.exports = check;
