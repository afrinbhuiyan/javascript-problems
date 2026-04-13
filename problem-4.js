/*
 * =============================================
 * Problem 4: Try, Catch, and Finally
 * =============================================
 *
 * TASK:
 * Complete reverseString(s):
 *   - TRY to reverse the string using split → reverse → join
 *   - If an exception is thrown, CATCH it and print error.message
 *   - FINALLY print s (reversed if successful, original if error)
 *
 * Examples:
 *   Input: "1234"       → Output: "4321"
 *   Input: Number(1234) → Output: "s.split is not a function"
 *                                  "1234"
 *
 * WHAT I LEARNED:
 *   - try / catch / finally structure
 *   - try    → code that might throw an error
 *   - catch  → runs ONLY if an error occurs; receives error object
 *   - finally → runs ALWAYS (error or no error)
 *   - error.message vs error (full object with stack trace)
 *   - split('') → reverse() → join('') pattern for reversing strings
 *   - .split() only works on strings, NOT on numbers/booleans
 *
 * COMMON MISTAKE:
 *   console.log(error)         → prints full stack trace (wrong!)
 *   console.log(error.message) → prints only the message (correct!)
 */

'use strict';

function reverseString(s) {
    try {
        // Attempt to reverse: split into array → reverse → join back
        s = s.split('').reverse().join('');
    } catch (error) {
        // If an error occurs, print only the error message
        console.log(error.message);
    } finally {
        // Always print s reversed if success, original if error
        console.log(s);
    }
}

// --- Test ---
reverseString("1234");
// Expected: 4321

reverseString(1234);
// Expected:
// s.split is not a function
// 1234