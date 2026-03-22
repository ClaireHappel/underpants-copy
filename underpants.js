// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// Functional library
    // Object with a bunch of functions on it

var _ = {
    indexOf: function(){

    }

};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) ==> 5
*   _.identity({a: "b"}) ==> {a: "b"}
*/

_.identity = function(value){
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

// I: one inuput, a value of any type
// O: one output, a string that describes the value
// C: none
// E: if null return null, make sure arrays return array
_.typeOf = function(value){
  // if value is strictly equal to null
  if (value === null) {
    // return 'null'
    return "null";
  }
 // if value is an array
 if (Array.isArray(value)) {
    // return 'array'
    return "array";
  }
  // else return 
  return typeof value;
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

// I: two inputs, an array and a number
// O: one output, either an amount of elements based on number, first element, or an empty array
// C: none
// E: if num is less than 0 or the array does not exist, return [], first the element if no number is given
_.first = function (array, num){
    // if array is not an array or num 
    if (!Array.isArray(array) || num < 0){
        // return the empty array
        return [];
    // else if num is not a number
    } else if (!num) {
        // return its first element
        return array[0];
    } 
    // if num exists 
    if (num){
        // splice it to the given num
        array.splice(num);
    }
   // then return the array
   return array;
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

// I: two inputs, an array and a number
// O: one outputs 
// C: none
// E: if num is less than 0 or the array does not exist, return [], last element if no number is given
_.last = function (array, num){
     // if array is not an array or num 
     if (!Array.isArray(array) || num < 0){
        // return the empty array
        return [];
    // else if num is not a number
    } //if number does not exist or if number is typeof not a number  
    else if (!num) {
        return array[array.length - 1];
    //if number is greater than array.length 
    } else if (num > array.length) {
        return array;
    }
//if number exists
if (num) {
//array.splice(array[array.length - 1], number - 1);
array.splice(0, array.length - num);
 }
//return the array
return array;
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

// I: two inputs, an array and any value
// O: one output, an index that is the first occurence of that value
// C: do not use [].indexOf()!
// E: if value does not exist in array, return -1
_.indexOf = function (array, value) {
 //init storVal to the val of an empty array
 let storVal = []; 
 //loop through the array to get all values
 for (let i = 0; i < array.length; i++) {
 //loop through all values of storVal
 for (let j = 0; j < array.length; j++) {
   //if an array value is strictly equal to value, but value is not one of the values within [j]
   if (value === array[i] && value !== storVal[j]) {
     //push value to storVal
     storVal.push(value);
     //return value
     return i;
   }
 }
 }
 //return -1 if value is not in array
 return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

// I: two inputs, an array and a value of any type
// O: one output, a boolean describing if a value exists in array
// C: use ternary operator 
// E: if no value is given, return false, do not convert types
_.contains = function(array, value){
    // if the value exists within the array, return true, else false
    return _.indexOf(array, value) > -1 ? true: false;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

// I: two inputs, a collection and a function
// O: none
// C: call function on either the array's element, index, and collection OR the object's value, key, and collection
// E: none
_.each = function(collection, func) {
    // if collection is an array 
    if (Array.isArray(collection)) {
        // loop through the array
        for (let i = 0; i < collection.length; i++) {
            // call function with it's element, index, and the collection as arguments
            func(collection[i], i, collection);
        }
    // else
    } else {
        // for key in object
        for (let key in collection) {
            // call function with the property's value, key, and collection as arguments
            func(collection[key], key, collection);
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/                                             

// I: one input, an array
// O: one output, the array with duplicates removed
// C: use _.indexOf()
// E: none
_.unique = (array) => {
    // init result to an array literal
    let result = [];
    // loop over array
    for (let i = 0; i < array.length; i++) {
      // if the result is not within the array
      if (_.indexOf(result, array[i]) === -1) {
        // push it to the result array
        result.push(array[i]);
      }
    }
    // return result
    return result;
  }

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

// I: two inputs, an array and a function
// O: one output, an array of elements that returned true values from the function call
// C: use _.each for extra credit
// E: code should be able to handle values besides true and false
_.filter = function(array, func){
  // init result to an empty array
  let result = [];
   // loop through the array
   for (let i = 0; i < array.length; i++){
      // call function on the element, it's index, and the array and if true
      if (func(array[i], i, array) === true){
            // push element to array 
            result.push(array[i]);
       }
  }
  // then return result
  return result;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

// I: two inputs, an array and a function
// O: one output, an array of elements that returned false after the function was called on them
// C: none
// E: none
_.reject = function (array, func) {
    // init result to an empty array
    let result = [];
    // loop through the array
    for (let i = 0; i < array.length; i++){
       // call function on the element, it's index, and the array and if false
       if (func(array[i], i, array) !== true){
             // push element to array 
             result.push(array[i]);
        }
   }
   // then return result
   return result;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, index, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

// I: two inputs, an array and a function
// O: one output, an array containing two sub arrays: one of truthy values and one of falsely values
// C: none
// E: none
_.partition = (array, func) => {
  // init truthy and falsey to empty arrays
  let truthy = [];
  let falsey = [];
  // looop through the aray
  for(let i = 0; i < array.length; i++){
      // if the call resolves to a truthy value 
      if(func(array[i], i, array)){
          // push it to truthy
          truthy.push(array[i]);
      // else it's falsey
      } else {
           // push it to falsey
           falsey.push(array[i]);
      }
  }
  // return truthy and falsey as sub arrays in an array
  return [truthy , falsey];
}

/** _.map
* Arguments:
*   1) A collection (array or object)
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*   _.map(obj, function(value){ return value * 10});  // [10, 20, 30]
*/

// I: two inputs, a collection (array or object) and a function
// O: an array of results of a function call on all elements, indexes and the collection
// C: none
// E: none
_.map = function(collection, func) {
    //init result to an array literal
    let result = [];
    // if it's an array
    if (Array.isArray(collection) === true) { 
        // loop through it
        for (let i = 0; i < collection.length; i++) {
          // push the result of a function call on the element, index and array
          result.push(func(collection[i], i, collection));
        }
    //else it is an object
    } else { 
      // loop through it
      for (let key in collection) {
      // push the result of a function call on the value, key and object
          result.push(func(collection[key], key, collection));
      }
    }
    //return the result array
    return result;
  }

// _.map([1,2,3,4], function(e){return e * 2} ); // [2, 4, 6, 8]
// //       ^
// _.map({ a: 1, b: 2}, function(value){ return value * 2}); // [2, 4]
// _.map(['a', 'b', 'c'], function(str){ return str.toUpperCase()}); // ['A', 'B', 'C']
// //      ^                        a              'A'

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

// I: two inputs, an array and a property
// O: one output, an array with each value of that property for each element in array
// C: use .map()
// E: none
_.pluck = function (array, prop) {
  // init retrieve to a function with param obj
  let retrieve = function (obj){
    // return value
    return obj[prop];
  }
  // return the result of the retrieve function called on every element of array via map
  return _.map(array, retrieve);
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

// I: two inputs, a collection and a function
// O: 
// C: 
// E: 
_.every = function (collection, func){
 if(Array.isArray(collection)){
    // let check
    let check = [];
    // if func was not provided
    if (!func){
        //
        for (let i = 0; i < collection.length; i++){
           if (!collection){
            return false;
           } else {
            if (collection[i] === false){
                return false;
            }
           }
          }
          return true;
    // function exists 
    } else {
     for (let j = 0; j < collection.length; j++){
      if (!collection){
        return false;
      } else {
        if (func(collection[j], j, collection) === false){
          return false;
        }
      }
     }
     return true;

    }
 } else {
    // if func was not provided
    if (!func){
      if (!collection){
        return false;
       } else {
        for (let key in collection){
          if (collection[key] === false){
            return false;
          }
        }
       }
       return true;
    } else {
      for (let keys in collection) {
        if (collection[keys] === false){
          return false;
        }
      }
      return true;
    }
 }
}

_.every(['a', 'bb'], function(str){ return str.length === 1});
//              ^              a              true
// true because every string in the array has a length of 1

_.every(['a', 'bb', 'c'], function(str){ return str.length === 1});
// false because one item in the array doesn't have a length of 1

_.every({ a: 1, b: 2 }, function(value){ return value > 0});
// true because the value at each key is greater than 0

_.every({ a: 0, b: 1}, function(value){ return value > 0});
// false because one value is not greater than 0

_.every([1, 2, 3]); 
// true because every item is truthy

_.every([1, 2, null]);
// false because one item is falsey

_.every({ a: 1, b: 2});
// true because every value is truthy

_.every({ a: 1, b: null});
// false because one value is falsey

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

// I: two inputs, a collection and a function
// O: 
// C: 
// E: 
_.some = function  (collection, func) {
  if(Array.isArray(collection)){
    // if func was not provided
    if (!func){
        // loop through the collection
        for (let i = 0; i < collection.length; i++){
           // if collection does not exist
           if (!collection){
            // return false
            return false;
           // else it does
           } else {
            // if the first value is truthy
            if (collection[i] === true){
                // return true
                return true;
            }
           }
          }
          // else return false
          return false;
    // function exists 
    } else {
     // loop through collection
     for (let j = 0; j < collection.length; j++){
      // if collection does not exist
      if (!collection){
        // return false
        return false;
      // else it does
      } else {
        // if a call with func on the first element, index and collection is true
        if (func(collection[j], j, collection) === true){
          // return true
          return true;
        }
      }
     }
     // else false
     return false;

    }
  } else {
    // if func was not provided
    if (!func){
     if (!collection){
       return false;
       } else {
        for (let key in collection){
          if (collection[key] === false){
            return false;
          }
        }
       }
       return true;
    } else {
      for (let keys in collection) {
        if (collection[keys] === false){
          return false;
        }
      }
      return true;
    }
 }
}


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

// I: three inputs, an array, a function, and a seed
// O: one output, the return value of the final function call
// C: none
// E: if seed is not given, use the first element of array as the seed
_.reduce = function(array, func, seed){
  // declare result
  let result;
  // if seed does not exist
  if (seed === undefined){
      // first element of array is seed
      result = array[0]; 
      // loop through the array
      for (let i = 1; i < array.length; i++){ 
          // result is the value of a call on the first element, element ,and index 
          result = func(result, array[i], i);
      }
  // else seed exists
  } else { 
      // let result equal seed
      result = seed; 
      // loop through array
      for (let i = 0; i < array.length; i++){ // 
          // result is a value of a call on seed, element, and index
          result = func(result, array[i], i);
      }
  }
  // return result
  return result;
}


/** _.extend (equivalent of the Object.assign())
* Arguments:
*   1) An Object (target object)
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

// I: mutiple inputs, many objects
// O: copy all properties objects into the first object and  return the updated object
// C: none
// E: none
_.extend = (...obj) => {
  let result = obj[0];
  for (let i = 1; i < obj.length; i++){
     Object.assign(result, obj[i]);
    }
return result; 
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}