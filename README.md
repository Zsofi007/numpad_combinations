# Numpad Combinations

## Task

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number(s) could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below:

    2 -> ['a', 'b', 'c']
    3 -> ['d', 'e', 'f']
    4 -> ['g', 'h', 'i']
    5 -> ['j', 'k', 'l']
    6 -> ['m', 'n', 'o']
    7 -> ['p', 'q', 'r', 's']
    8 -> ['t', 'u', 'v']
    9 -> ['w', 'x', 'y', 'z']

Note that 1 does not map to any letters.

**Constraints:**
- 0 <= digits.length <= 4
- digits[i] is a digit in the range ['2', '9']


### Examples

- **Example 1:**
    - *Input:* digits = "23"
    - *Output:* ["ad","ae","af","bd","be","bf","cd","ce","cf"]

- **Example 2:**
    - *Input:* digits = ""
    - *Output:* []  

- **Example 3:**
    - *Input:* digits = "2"
    - *Output:* ["a","b","c"]

## Bonus tasks

- Return the answers using an ordering algorithm of your choosing.
- Cover your code with unit tests.