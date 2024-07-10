
function power(base, exponent) {
  return exponent == 0? 1 : base * power(base, --exponent);
}

function calculate() {
  var base = document.getElementById("base").value;
  var exponent = document.getElementById("exponent").value;
  if( base >0 && exponent >0 ){
    var res = 0;
    res = power(base, exponent);
    document.getElementById("total").value = res;
  }
}

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  let res = val +" Not found";

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === val) {
      res = val + " found in index " + mid;
      document.getElementById("total").value = mid;
    }

    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return res;
}

const arr = [0,1,2,3,4,6,7,8,100,10000];

console.log(binarySearch(arr, 100)); // 
console.log(binarySearch(arr, 90)); // 


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
      if(pos != 'O'){
        
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

function printMaze2( maze ) {
  var result = "";
  
  for ( let row = 0; row < maze.length; row++ ) {
    for ( let col = 0; col < maze[ row ].length; col++ ) {
      result += maze[row][col] + " "
    }
    result += '\n';
  }
  return result;
}



// new maze

map = [
  [1,1,0,0,0,0,0,0],
  [0,1,1,0,0,0,0,0],
  [1,1,1,0,0,0,0,0],
  [1,0,1,1,1,1,1,1],
  [1,1,0,0,1,0,0,1],
  [0,1,1,0,1,0,0,1],
  [1,1,1,0,1,0,0,1],
  [1,0,0,0,1,1,'e',1]];
  
  console.log( printMaze2( map ) );


console.log(map)


function findpath(x,y){
  res = false;
  if( valid(map,x,y) ){
    if ( map[x][y] != 0 && map[x][y] != 9 ) {
      if (map[x][y] == 'e'){
        console.log('Reached goal at: ' + x + ':' + y);
        showPosition(x,y);
        return true; 
      }
      
      console.log('Im here at: ' + x + ':' + y);
      map[x][y]= 9; 
 
      if ( findpath(x+1,y) || findpath(x,y+1) || findpath(x,y-1) ||findpath(x-1,y) ){
        return true; 
      }
      
    }
  }

  return res ;
}

function showPosition(x,y) {
  const xPos = document.getElementById("x-pos");
  xPos.textContent = x + "," +y;
}

function valid(map,x,y) {
  if(x >= 0 && x < (map.length) && y >= 0 && y < (map[0].length)) return true;
}



function startMaze() {
  
  findpath(0, 0);
  resetMaze();
}
function resetMaze(){
  map = [
    [1,1,0,0,0,0,0,0],
    [0,1,1,0,0,0,0,0],
    [1,1,1,0,0,0,0,0],
    [1,0,1,1,1,1,1,1],
    [1,1,0,0,1,0,0,1],
    [0,1,1,0,1,0,0,1],
    [1,1,1,0,1,0,0,1],
    [1,0,0,0,1,1,'e',1]];
}

function hanoi() {
  let disk = document.getElementById("disks").value;
  towerOfHanoi(disk, 'A', 'C', 'B'); 
}


function towerOfHanoi(n, from_rod,  to_rod,  aux_rod) 
{ 
  if (n == 0) { 
    return; 
  } 
    
    towerOfHanoi(n - 1, from_rod, aux_rod, to_rod); 
    console.log(" Move disk "+ n + " from rod " + from_rod + 
    " to rod " + to_rod);
    towerOfHanoi(n - 1, aux_rod, to_rod, from_rod); 
   
} 
  

const numbers = [2, 4, 67, 8, 44, 6, 12];

function linearSearch(array, num) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      console.log(num+ " Found in pos " + i )
      return i;
    }
  }
  console.log(num+ " Not Found")
  return -1;
}

linearSearch(numbers, 2); 
linearSearch(numbers, 8); 
linearSearch(numbers, 12); 


function betterLinearSearch(array, element) {
  let length = array.length;
  let left = 0;
  let right = length - 1;

  let position = -1;

  while (left <= right) {
    if (array[left] == element) {
      position = left;
      console.log(`${element} is present at index ${position}. attempt ${left + 1}`);
      break;
    }

    if (array[right] == element) {
      position = right;
      console.log(`${element} is present at index ${position}.  attempt ${length - right}`);
      break;
    }
    left++;
    right--;
  }

  if (position == -1) {
    console.log(`${element} not found. attempt ${left}`);
  }
}

betterLinearSearch(numbers, 8); 
betterLinearSearch(numbers, 12); 
betterLinearSearch(numbers, 2);
