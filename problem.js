/*
 * =============================================
 * Problem 1: Conditional Statements
 * =============================================
 *
 * TASK:
 * Complete the getGrade(score) function.
 * Return the letter grade based on score:
 *   score > 25 && <= 30  → 'A'
 *   score > 20 && <= 25  → 'B'
 *   score > 15 && <= 20  → 'C'
 *   score > 10 && <= 15  → 'D'
 *   score > 5  && <= 10  → 'E'
 *   score >= 0 && <= 5   → 'F'
 *
 * WHAT I LEARNED:
 *   - if / else if / else structure
 *   - Logical AND operator (&&) for range checking
 *   - Early Return Pattern  to simplify code and improve readability
 *   - Why switch is NOT ideal for ranges (because it checks for exact matches, not ranges)
 */
 
// Solution 1: if-else easy to read for beginners but can get messy with many conditions
function getGrade_ifElse(score) {
    let grade;
 
    if (score > 25 && score <= 30) {
        grade = 'A';
    } else if (score > 20 && score <= 25) {
        grade = 'B';
    } else if (score > 15 && score <= 20) {
        grade = 'C';
    } else if (score > 10 && score <= 15) {
        grade = 'D';
    } else if (score > 5 && score <= 10) {
        grade = 'E';
    } else {
        grade = 'F';
    }
 
    return grade;
}
 
// Solution 2: Early Return Pattern cleaner and more efficient as it avoids unnecessary checks once a condition is met
function getGrade(score) {
    if (score > 25) return 'A';
    if (score > 20) return 'B';
    if (score > 15) return 'C';
    if (score > 10) return 'D';
    if (score > 5)  return 'E';
    return 'F';
}
 
// Solution 3: Array + Loop more compact but less readable for beginners and less efficient due to loop overhead
function getGrade_array(score) {
    const limits = [25, 20, 15, 10, 5];
    const grades = ['A', 'B', 'C', 'D', 'E'];
 
    for (let i = 0; i < limits.length; i++) {
        if (score > limits[i]) return grades[i];
    }
    return 'F';
}
 
// --- Test ---
console.log(getGrade_ifElse(11)); // Expected: D
console.log(getGrade(28)); // Expected: A
console.log(getGrade_array(3));  // Expected: F

/*
 * =============================================
 * Interview questions
 * =============================================
 * 1. What is the Early Return Pattern and why is it useful?
 * 2. How to refactor the array + loop solution to be more efficient?
 * 3. how do if if else statements work in JavaScript and how does the order of conditions affect the output?
 * 4. Why is switch not ideal for checking ranges of values?
 * 5. Can you explain how the Logical AND operator (&&) is used in the context of checking if a score falls within a certain range? 
 */