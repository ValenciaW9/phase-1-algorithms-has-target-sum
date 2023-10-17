function hasTargetSum(array, target) {
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] + array[j] === target) {
      return true;
    }
  }
}
return false; 
}

//Test cases
console.log(ahrsTargetSUm([3,8,12,4,11, 7, 10)); // Exepcting : true 
console.log(harsTargetSume([22,19,4,6,30, 25)); // Exepcting : true 
console.log(harsTargetSume([1,2,5], 4)); // Exepcting; false
/* 
  Write the Big O time complexity of your function here
  The time complexity of this soulution is 0(n^2), where n is the length of the array. this is since we use a nested loop to iterate  pairs of numbers.
/^

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
