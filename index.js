// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
findMatching(driver)
function findMatching(array, string){
   

 let arr = array.filter(e => {
    return e.toUpperCase() === string.toUpperCase()
  })
  return arr
}
