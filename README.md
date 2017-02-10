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