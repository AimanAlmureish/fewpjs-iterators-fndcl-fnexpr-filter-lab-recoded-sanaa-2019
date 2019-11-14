// Code your solution here

function findMatching(array, string){
   

 let arr = array.filter(e => {
    return e.toUpperCase() === string.toUpperCase()
  })
  return arr
}


function fuzzyMatch(){
   let arr = array.filter(e => {
    return e.CharAt(0) === string.CharAt(0)
  })
  return arr
}


