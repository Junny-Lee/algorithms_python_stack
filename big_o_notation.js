//  notes!!!
// bigocheatsheet.com for graph! (elements vs operations)

// O(n)
for (var i = 0; i < arr.length; i++){
    console.log(arr[i])
}

// O(n^2)
for (var item of arr){
    for (var j = 0; j < arr.length; j++){
        console.log(j)
    }
}


// notes on Big O Notation from MERN stack (LEARN platform)
// O(1): algorithms that can be completed in a constant number of operations
    // i.e. find the smallest value in a sorted array 
// O(N): algorithms that may have to run "N" number of times
    // i.e. find the smallest value in an unsorted array 
// O(N^2): algorithms that may have to go through "N" things "N" times 
    // i.e. bubble sort 
// O(log(N)): algorithms that can reduce the remaining pool of values by half or more for reach value read through
    // i.e. binary search
// O(N*log(N)): algorithms that can employ a divide and conquer approach 
    // i.e. quick sort 