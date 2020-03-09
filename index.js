const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array){
  let ans = array.find( obj => obj.result === "W" )
  ans.map( obj => obj.year )
}