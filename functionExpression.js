// use Function Declaration to write a function
ask("Do you agree?", showOk, showCancel);

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert("You agreed.");
}

function showCancel() {
    alert("You canceled the execution.");
}

// use Function Expressions to write the same function much shorter
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    function () { alert("You agreed."); },
    function () { alert("You canceled the execution."); }
);

// example
let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

    welcome = function () {
        alert("Hello!");
    };

} else {

    welcome = function () {
        alert("Greetings!");
    };

}
welcome();

// shorter exaple using ?
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
    function () { alert("Hello!"); } :
    function () { alert("Greetings!"); };

welcome();