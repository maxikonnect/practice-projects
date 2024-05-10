// Get the element with id "demo"
let demo = document.getElementById("demo");

// Function to calculate the sum of numbers from 1 to a given number
function addUpNumber(num){
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i;
    }
    return sum;
}

// Array containing numbers to calculate the sum for
let array = [4, 13, 600];
let listItem = "";

// Loop through each number in the array and generate HTML list items with the sum
for(let i = 0; i < array.length; i++){
    listItem += `<li>
        addUpNumber(${array[i]}) => ${addUpNumber(array[i])};   
    </li>`;
}

// Set the HTML content of the "demo" element to the generated list items
demo.innerHTML = listItem;
