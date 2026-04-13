/*
 * =============================================
 * Problem 5: Throw (Custom Errors)
 * =============================================
 *
 * TASK:
 * Complete isPositive(a):
 *   - If a > 0  → return "YES"
 *   - If a === 0 → throw Error("Zero Error")
 *   - If a < 0  → throw Error("Negative Error")
 *
 * Examples:
 *   isPositive(5)  → "YES"
 *   isPositive(0)  → throws "Zero Error"
 *   isPositive(-3) → throws "Negative Error"
 *
 * WHAT I LEARNED:
 *   - How to THROW custom errors using: throw new Error("message")
 *   - Difference between return (normal exit) vs throw (error exit)
 *   - new Error() creates an Error object with a .message property
 *   - JavaScript Type Coercion:
 *       → Strings like "10" can be compared with > 0 (auto-converted)
 *       → true == 1, false == 0 in JS
 *       → typeof check is safest for real-world input validation
 *   - When to use typeof for type-safe functions
 */

//  Solution 1: Basic implementation

function isPositive(a) {
    if (a > 0) {
        return "YES";
    } else if (a === 0) {
        throw new Error("Zero Error");
    } else {
        throw new Error("Negative Error");
    }
}

//  Solution 2: Type-safe implementation with typeof check

function isPositiveSafe(a) {
    if (typeof a !== 'number') {
        throw new Error("Input must be a number");
    }

    if (a > 0) return "YES";
    if (a === 0) throw new Error("Zero Error");
    throw new Error("Negative Error");
}

// --- Test ---
try {
    console.log(isPositive(5));   // YES
    console.log(isPositive(0));   // throws
} catch (e) {
    console.log(e.message);       // Zero Error
}

try {
    console.log(isPositive(-3));  // throws
} catch (e) {
    console.log(e.message);       // Negative Error
}