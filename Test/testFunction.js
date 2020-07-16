describe("maxValue", function () {

    it(`Max between ${a} and ${b}`, function () {
        let expect = a > b ? a : b;
        assert.equal(maxValue(a, b), expect);
    });

});