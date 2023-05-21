# Numpad Combinations

## Objective

Using Java or JavaScript language, implement a solution for the task below. You have 7 days to complete the assignment. 

Please upload your code to GitHub and send the link back to us at Genesys.

## Task

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number(s) could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below:

>2 -> ['a', 'b', 'c'] <br>
>3 -> ['d', 'e', 'f'] <br>
>4 -> ['g', 'h', 'i'] <br>
>5 -> ['j', 'k', 'l'] <br>
>6 -> ['m', 'n', 'o'] <br>
>7 -> ['p', 'q', 'r', 's'] <br>
>8 -> ['t', 'u', 'v'] <br>
>9 -> ['w', 'x', 'y', 'z'] <br>

Note that 1 does not map to any letters.

### Constraints:
>0 <= digits.length <= 4 <br>
>digits[i] is a digit in the range ['2', '9']


### Examples

- **Example 1:**
    >*Input:* digits = "23" <br>
    >*Output:* ["ad","ae","af","bd","be","bf","cd","ce","cf"]

- **Example 2:**
    >*Input:* digits = "" <br>
    >*Output:* []  

- **Example 3:**
    >*Input:* digits = "2" <br>
    >*Output:* ["a","b","c"]

## Bonus tasks

- Return the answers using an ordering algorithm of your choosing.
- Cover your code with unit tests.