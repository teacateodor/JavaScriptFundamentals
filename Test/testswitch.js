let a = prompt("value");

let switchValue;

switch (a) {

    case 1:
        switchValue = 1;
        break;

    case 2:
        switchValue = 2;
        break;

}

alert(switchValue);


describe("switch", function () {

    it("switch", function () {
        assert.equal(a, switchValue);
    });
});