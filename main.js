
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
        //result += maze [row][col] + '.'; 
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

/*  function findpath(x,y){
  // illegal move check
  if (x < 0 || x > (map[0].length -1) || y < 0 || y > (map.length - 1)) return false; //if it is outside of map
    //if (map[y][x] == 0) return false; //it is not open
    if (map[y][x] == 0) return false

  // end move check
  //if (x == goalx && y == goaly){
    if (map[x][y] === 'e'){
      console.log('Reached goal at: ' + x + ':' + y);
      return true; // if it is the goal (exit point)
    }
  if(map[y][x] == 9 || map[y][x] == 8)
      return false;

  console.log('Im here at: ' + x + ':' + y);

  map[y][x]=9; //here marking x,y position as part of solution path outlined by "9"

  if(findpath(x+1,y)) 
      return true;    
  if(findpath(x,y+1)) 
      return true;    
  if(findpath(x,y-1))
      return true;
  if(findpath(x-1,y)) 
      return true;              

  return false;
};  */


console.log(map)


function findpath(x,y){
  res = false;
  if( valid(map,x,y) ){
    if ( map[x][y] != 0 && map[x][y] != 9 ) {
      if (map[x][y] == 'e'){
        console.log('Reached goal at: ' + x + ':' + y);
        const xPos = document.getElementById("x-pos");
        const yPos = document.getElementById("y-pos");

       
        xPos.textContent = x;
        yPos.textContent = y;
        return true; 
      }
      
      console.log('Im here at: ' + x + ':' + y);
      map[x][y]= 9; 
 
      if ( findpath(x+1,y) || findpath(x,y+1) || findpath(x,y-1) ||findpath(x-1,y) ){
        //add position to page
        
        return true; 
      }
      
    }
  }

  return res ;
}; 


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
    //document.write("Move disk "+ count +" "+ n + " from rod " + from_rod + 
    //" to rod " + to_rod+"<br/>"); 
    towerOfHanoi(n - 1, aux_rod, to_rod, from_rod); 
   
} 
  


  