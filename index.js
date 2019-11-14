// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
findMatching(driver)
function findMatching(array, string){
 let arr = array.filter(e => {
  let case = string.toUpperCase()
    return e === case
  })
  return arr
}
