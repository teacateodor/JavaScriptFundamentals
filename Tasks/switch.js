var caseNumber = prompt("Chase Number");
let number;
switch (caseNumber) {
    case null:

    case "":
        alert("null");
        break;

    case "0":
        number = 0;
        break;

    case "1":
        number = 1;
        break;

    case "2":
        number = 2;
        break;

    default:
        alert("unknown");
}

