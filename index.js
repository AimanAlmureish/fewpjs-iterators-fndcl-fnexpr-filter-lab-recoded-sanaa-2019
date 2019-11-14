// Code your solution here

function findMatching(array, string){
   

 let arr = array.filter(e => {
    return e.toUpperCase() === string.toUpperCase()
  })
  return arr
}


function fuzzyMatch(array, string){
   let arr = array.filter(e => {
    return e.charAt(0) == string.charAt(0)
  })
  return arr
}


function matchName(){
     let arr = array.filter(e => {
    return e === string
  })
  return arr
}


