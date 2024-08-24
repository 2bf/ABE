// script.js
let counter = document.getElementById('counter');
let count = 0;
let uniqueVisits = 843;

let interval = setInterval(() => {
    count = count + 7;
    counter.textContent = count;

    if (count >= uniqueVisits) {
        clearInterval(interval);
        counter.textContent = uniqueVisits;
    }
}, 10); // Adjust the interval time as needed
