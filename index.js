// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
findMatching(driver)
function findMatching(array, string){
 let arr = array.filter(e => {
  if(e.includes(string.toUpperCase())){
        return e.includes(string)

  }else{
        return e.includes(string)

  }
  })
  return arr
}
