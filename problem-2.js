/*
 * =============================================
 * Problem 2: Vowels and Consonants
 * =============================================
 *
 * TASK:
 * Given a string s:
 *   1. Print each VOWEL (a, e, i, o, u) on a new line (in order)
 *   2. Then print each CONSONANT on a new line (in order)
 *
 * Example:
 *   Input:  "javascriptloops"
 *   Output: a, a, i, o, o (vowels first)
 *           j, v, s, c, r, p, t, l, p, s (consonants after)
 *
 * WHAT I LEARNED:
 *   - for...of loop to iterate over string characters
 *   - String.includes() to check membership
 *   - Array.filter() + forEach() for functional approach
 */

//  Solution 1: Two for...of loops
function vowelsAndConsonants(s) {
  const vowels = "aeiou";

  // First pass: print only vowels
  for (let char of s) {
    if (vowels.includes(char)) {
      console.log(char);
    }
  }

  // Second pass: print only consonants
  for (let char of s) {
    if (!vowels.includes(char)) {
      console.log(char);
    }
  }
}

//  Solution 2: filter + forEach
function vowelsAndConsonants_functional(s) {
  const vowels = "aeiou";
  const chars = s.split(""); // Convert string to array of characters

  // Filter and print vowels first, then consonants

  chars.filter((c) => vowels.includes(c)).forEach((c) => console.log(c));
  chars.filter((c) => !vowels.includes(c)).forEach((c) => console.log(c));
}

// --- Test ---
vowelsAndConsonants("javascriptloops");
// Expected output:
// a
// a
// i
// o
// o
// j
// v
// s
// c
// r
// p
// t
// l
// p
// s

/* 
* =============================================
* Interview Questions
* =============================================
* 1. what is forEach and how does it differ from a regular for loop?
* 2. Can you explain the difference between a for...of loop and a for...in loop in JavaScript?
* 3. How does the String.includes() method work and what does it return?
* 4. What are some advantages of using functional programming methods like filter and forEach over traditional loops?
* 5. How would you modify the function to handle uppercase letters as well (e.g., 'A', 'E', 'I', 'O', 'U')?
*/
