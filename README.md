# :runner: Lee Algorithm in JavaScript

# Demo
Check out a little demo [here](https://jameslmilner.github.io/lee-algorithm-js/) :)

# What is it?

A version of the [Lee Algorithm](https://en.wikipedia.org/wiki/Lee_algorithm) implemented in JavaScript. The Lee algorithm is a route finding algorithm that is suited to solving maze problems.

<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Lee_waveprop.png">
</p>

# Background

This implementation came out of the problem set at London Algorithms (which is a fantastic meetup by the way!) and was a lot of fun to try and code.

# How To

The implementation takes a matrix n * m, a starting cell and an end cell. It can return the completed matrix with the distances and also a single best path for the matrix.

```javascript

    var aMatrix = [
        [0,  0, 0,  0, 0],
        [0, -1, -1, -1, 0],
        [0,  0, -1, 0, -1],
        [-1, 0, 0, 0, -1],
        [-1, -1, -1, 0, -1]
    ];

    console.log("FINAL MATRIX : \n", pathfinder(aMatrix, 0, 0, 4, 3));
    console.log("BEST PATH : \n", backtrace(aMatrix, 0, 0, 4, 3));

```

# Tests

The test suite uses Jasmine. You can use:

    npm install
    jasmine

to test the code.
