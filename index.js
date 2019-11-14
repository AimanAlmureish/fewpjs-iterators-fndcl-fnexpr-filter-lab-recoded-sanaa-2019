// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
findMatching(driver)
function findMatching(array, string){
    let case = string.toUpperCase()

 let arr = array.filter(e => {
    return e === case
  })
  return arr
}
