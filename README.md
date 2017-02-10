## Luhn Algorithm (Programming Logic and Testing)

The [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm) is used to validate various identitifcation numbers, such as credit card numbers and social insurance numbers.

Write a function `check`, which, given a number, returns whether it is valid or not (according to the Luhn Algorithm).

Before you begin, write a test (or multiple) for the function (using mocha and chai). If you find you need to create other functions to help with the task, write tests for them too.

### Research notes

Luhn algorithm setps from [dcode.fr](http://www.dcode.fr/luhn-algorithm):

* Let the number be 853X, with X=0, the digit we want to calculate.
* One takes the digit 3, doubled, 3*2 = 6,
* One takes the digits 5, not multiplied by 2href
* And one takes the 8, multiplies it by 2 : 8*2=16 and 1+6=7 to get 7.
* The sum is 6+5+7 = 18. As 18 modulo 10href = 8, one calculated (10 - 8) %10 = 2, 2 is the digit checksum control.
* So 8532 is valid.

From Wikipedia:

* From the rightmost digit, which is the check digit, and moving left, double the value of every second digit. If the result of this doubling operation is greater than 9 (e.g., 8 × 2 = 16), then add the digits of the product (e.g., 16: 1 + 6 = 7, 18: 1 + 8 = 9) or alternatively subtract 9 from the product (e.g., 16: 16 - 9 = 7, 18: 18 - 9 = 9).
* Take the sum of all the digits.
* If the total modulo 10 is equal to 0 (if the total ends in zero) then the number is valid according to the Luhn formula; else it is not valid.
  * Assume an example of an account number "7992739871" that will have a check digit added, making it of the form 7992739871x:
  ```
  Account number      7  9  9  2  7  3  9  8  7  1  x
  Double every other  7 18  9  4  7  6  9 16  7  2  x
  Sum digits          7  9  9  4  7  6  9  7  7  2  x

  The sum of all the digits in the third row is 67+x.
  ```
* The check digit (x) is obtained by computing the sum of the non-check digits then computing 9 times that value modulo 10 (in equation form, (67 × 9 mod 10)). In algorithm form:

* Compute the sum of the non-check digits (67).
* Multiply by 9 (603).
* The units digit (3) is the check digit. Thus, x=3.