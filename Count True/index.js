// Function to count the number of true values in an array
function countTrue(array){
    // Initialize count to 0
    let count = 0;
    
    // Loop through the array
    for(let i = 0; i < array.length; i++){
        // If the current element is true, increment count
        if(array[i] === true){
            count++;
        }
    }
    
    // Return the count of true values
    return count;
}

// Test cases
console.log(countTrue([true, false, false, true, false])); /* => 2 */
console.log(countTrue([false, false, false, false])); /* => 0 */
console.log(countTrue([])); /* => 0 */
