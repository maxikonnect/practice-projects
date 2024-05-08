/* Swapping two number */
const unswapDisplay = document.getElementById("unswapDisplay");
const swapDisplay = document.getElementById("swapDisplay");
const A = document.getElementById("A");
const B = document.getElementById("B");
const swapSubmit = document.getElementById("swapSubmit");
const beforeSwap = document.getElementById("beforeSwap");
const afterSwap = document.getElementById("afterSwap");


swapSubmit.addEventListener("click", ()=>{
    const valueA = parseInt(A.value);
    const valueB = parseInt(B.value);
    if(isNaN(valueA) && isNaN(valueB)){
        unswapDisplay.textContent = "Enter Value for A";
        swapDisplay.textContent = "Enter Value for B";
    }
    else if(isNaN(valueA)){
        unswapDisplay.textContent = "Enter  Value for A";
    }
    else if(isNaN(valueB)){
        unswapDisplay.textContent = "Enter  Value for B";
    }
    else{
        beforeSwap.textContent = "Before Swap";
        unswapDisplay.textContent = `[${valueA}, ${valueB}]`;
        A.value = "";

        afterSwap.textContent = "After Swap"
        swapDisplay.textContent = `[${swapNumbers(valueA, valueB)}]`;
        B.value = "";
    }
    
});




function swapNumbers(a, b){
    let temp;
    temp = a;
    a = b;
    b = temp;

    return [a, b];
}

