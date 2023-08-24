Array.prototype.myFilter = function(callback) {
  const newArray = [];
  
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) == true) { // checking filter condition, callback function takes three parameter, three arguments not necessary
      newArray.push(this[i]); // pushing elements if the value is not a js falsy value
    }
  }
  return newArray;
};

console.log(["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi"));  // prints ["naomi"]
