const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array){
  array.find( obj => obj.result === "W" ).map( obj => obj.year )
}