
describe("Lee", function() {

    var lee = require('../lee');

    it("Check pathfinder defined", function() {
        expect(lee.pathfinder).toBeDefined();
    });

    it("Check backtrace defined", function() {
        expect(lee.neighbourCheck).toBeDefined();
    });

    it("Check pathfinder defined", function() {
        expect(lee.backtrace).toBeDefined();
    });

    it("Checks to make sure the returned matrix is correct", function() {

        var aMatrix = [
            [0,  0, 0,  0, 0],
            [0, -1, -1, -1, 0],
            [0,  0, 0, 0, -1],
            [-1, 0, -1, 0, -1],
            [-1, -1, -1, 0, -1]
        ];

        var checkedMatrix = lee.pathfinder(aMatrix, 0, 0, 4, 3);
        console.log("Checked Matrix: \n", checkedMatrix);

        // Check the structure of the matrix is correct
        expect(checkedMatrix).toBeDefined();
        expect(checkedMatrix.length).toBe(2);
        expect(checkedMatrix[0].length).toBe(5);
        expect(checkedMatrix[0][0].length).toBe(5);

        expect(checkedMatrix[0][0][0]).toBe(0); // Make sure the start is 0
        expect(checkedMatrix[1]).toBe(5); // Make sure the end is 5

    });

    it("Checks to make sure the returned route is correct", function() {

        var aMatrix = [
            [0,  0, 0,  0, 0],
            [0, -1, -1, -1, 0],
            [0,  0, 0, 0, -1],
            [-1, 0, -1, 0, -1],
            [-1, -1, -1, 0, -1]
        ];

        var checkedMatrix = lee.pathfinder(aMatrix, 0, 0, 4, 3);
        var route = lee.backtrace(aMatrix, 0, 0, 4, 3);
        expect(route.length).toBe(6); // Make sure the length is correct

        expect(route[0][0]).toBe(0); // Make sure the start is 0, 0
        expect(route[0][1]).toBe(0);
        expect(route[5][0]).toBe(4); // Make sure the end is 4,3
        expect(route[5][1]).toBe(3);

    });

});
