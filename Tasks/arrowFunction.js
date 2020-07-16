function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

// declarative function
ask(
    "Do you agree?",
    function () { alert("You agreed."); },
    function () { alert("You canceled the execution."); }
);

// rewrite with arrow functions
ask(
    "Do you agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
);