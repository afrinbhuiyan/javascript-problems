/*
 * =============================================
 * Problem 3: Regular Expressions (Regex)
 * =============================================
 *
 * TASK:
 * Return a RegExp that matches any string that
 * BEGINS and ENDS with the SAME vowel.
 *
 * Examples:
 *   "abcda"  → true  (starts & ends with 'a')
 *   "abcde"  → false (starts 'a', ends 'e' different vowels)
 *   "bcd"    → false (starts with consonant)
 *   "aba"    → true
 *
 * WHAT I LEARNED:
 *   - Regular Expressions (RegExp) basics
 *   - ^ means start of string
 *   - $ means end of string
 *   - [aeiou] matches any one vowel
 *   - () creates a Capturing Group
 *   - .* means any character, zero or more times
 *   - \1 is a Backreference — matches the same text as group 1
 */

function regexVar() {
    /*
     * Regex Breakdown: /^([aeiou]).*\1$/
     *
     *  ^         → match from the START of the string
     *  ([aeiou]) → capture one vowel (group 1)
     *  .*        → any characters in the middle (0 or more)
     *  \1        → must match the SAME vowel as group 1 (backreference)
     *  $         → match at the END of the string
     *
     * Key insight: \1 is what makes it "same vowel" — it
     * refers back to whatever was captured in group 1.
     */
    const re = /^([aeiou]).*\1$/;

    return re;
}

// --- Test ---
const regex = regexVar();
console.log(regex.test("abcda")); // true 
console.log(regex.test("abcde")); // false
console.log(regex.test("bcd"));   // false
console.log(regex.test("aba"));   // true 
console.log(regex.test("eye"));   // true 