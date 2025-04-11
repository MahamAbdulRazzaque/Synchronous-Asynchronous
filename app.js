// Synchronous Method
console.log("Frist"); 
console.log("Second"); 

setTimeout(function () { 
    console.log("Third"); 
}, 2000); 

console.log("Fourth"); 



// Asynchronous Method
function fetchData() { 
    console.log("Fetching data..."); 
    setTimeout(function () { 
        console.log("Data fetched!"); 
    }, 2000); 
} 

function processData() { 
    console.log("Processing data..."); 
} 

fetchData(processData());
 