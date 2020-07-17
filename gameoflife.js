const prompt = require("prompt-sync")();

//Function to find alive neighbours

const deadOrAlive = (input, i, j) => {
  let alive = 0;
  let allPosibleIndexes = [
    [i - 1, j],
    [i, j - 1],
    [i - 1, j - 1],
    [i + 1, j],
    [i, j + 1],
    [i + 1, j + 1],
    [i + 1, j - 1],
    [i - 1, j + 1],
  ];

  allPosibleIndexes.forEach(([i, j]) => {
    try {
      if (input[i][j] === "X") {
        alive = alive + 1;
      }
    } catch (err) {}
  });
  return alive;
};

//Function to find next generation

const nextGeneration = (input, r, c) => {
  let future = JSON.parse(JSON.stringify(input));

  for (i = 0; i < r; i++) {
    for (j = 0; j < c; j++) {
      const alive = deadOrAlive(input, i, j);

      if (input[i][j] === "X" && alive < 2) {
        future[i][j] = "-";
      } else if (input[i][j] === "X" && alive > 3) {
        future[i][j] = "-";
      } else if (input[i][j] === "X" && (alive === 3 || alive == 2)) {
        future[i][j] = "X";
      } else if (input[i][j] === "-" && alive === 3) {
        future[i][j] = "X";
      }
    }
  }
  return future;
};

//Function to print 2D array

const printMatrix = (mat, r, c) => {
  for (let i = 0; i < r; i++) {
    console.log(mat[i]);
  }
};

//Getting input from command prompt

const r = prompt("Enter Row Size :");
const c = prompt("Enter Column Size :");
let input = [];
console.log("Enter input generation :");

for (let l = 0; l < r; l++) {
  let row = [];

  for (let m = 0; m < c; m++) {
    const ip = prompt("");
    row.push(ip);
  }
  input.push(row);
}

console.log("Input Generation : - ");
printMatrix(input, r, c);
const nextgen = nextGeneration(input, r, c);
console.log("Future Generation : - ");
printMatrix(nextgen, r, c);



//Sample Input - Output

/*
Enter Row Size :3
Enter Column Size :3
Enter input generation :
X
X
-
X
-
X
-
X
-
Input Generation : - 
[ 'X', 'X', '-' ]
[ 'X', '-', 'X' ]
[ '-', 'X', '-' ]
Future Generation : - 
[ 'X', 'X', '-' ]
[ 'X', '-', 'X' ]
[ '-', 'X', '-' ]

*/



