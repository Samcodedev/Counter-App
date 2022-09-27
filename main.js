let countEl = document.getElementById("increase") // this is zero "0"
let saveEl = document.getElementById("pre-count")

let count = 0;

function counter(){
    count = count + 1;
    countEl.innerHTML = count;
}

function save(){
    savetext = count + " - ";
    saveEl.innerHTML += savetext;
    console.log(saveEl.innerHTML)

    count = 0;
    countEl.innerHTML = 0;
}

// let errorEl = document.getElementById("text")
// function click(){
//     error = "hello something is not fine"
//     errorEl.innerText += error
// }

const workers = [
    { name: "Samuel", age: 25, salary: '$60,000' },
    { name: "Daniel", age: 24, salary: '$50,000' },
    { name: "Festus", age: 23, salary: '$40,000' }
];
console.table(workers)