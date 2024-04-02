
function power(base, exponent) {
  return exponent == 0? 1 : base * power(base, --exponent);
}

function calculate() {
  var base = document.getElementById("base").value;
  var exponent = document.getElementById("exponent").value;
  if( base >0 && exponent >0 )
  {
    var res = 0;
    res = power(base, exponent);
    document.getElementById("total").value = res;
  }
}


function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  let res = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === val) {
      res = "Yes, found in index " + mid;
      document.getElementById("total").value = mid;
      //return mid;
      return res;
    }

    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  //res = "no";
  console.log(res + "x ")
  return res;
  //return -1;
}

const arr = [0,1,2,3,4,6,7,8,100,10000];
//binarySearch(arr, 100)
console.log(binarySearch(arr, 100)); // 6


mazeTest =
[ [ 'X', 'X', 'X', 'X', 'X', 'X', 'X' ],
  [ 'X', '*', 'O', 'O', 'O', '^', 'X' ],
  [ 'X', '░', 'O', '░', 'O', '░', 'X' ],
  [ 'X', '░', '░', 'O', 'O', '░', 'X' ],
  [ 'X', '░', '░', 'O', 'O', '░', 'X' ],
  [ 'X', '░', '░', '░', '░', '░', 'X' ],
  [ 'X', 'X', 'X', 'X', 'X', 'X', 'X' ] ];
 

function printMaze( maze ) {
  let result = '';
  let pos = "";
  var matrix = maze;
  for ( let row = 0; row < maze.length; row++ ) {
    for ( let col = 0; col < maze[ row ].length; col++ ) {
      pos = maze[ row ][ col ];
      if(pos != 'O')
      {

        //result += maze[ row ][ col ] + '.'; 
        result += matrix[row][col] = '.';
      }
      
      else {
        //result += maze[ row ][ col ] + ' '; 
        result += matrix[row][col] = 'W';
      }  
        
    }
    //console.log(matrix)
    result += '\n';
  }
  return result;
}

console.log( printMaze( mazeTest ) );
