// Maps, or hash maps
// pre-ES2015, called objects, keys are always strings
// ES2015, keys can by ANY data type!

var map1 = new Map;
map1.set(1, 'sammy');
map1.set(false, 'a boolean');
map1.set('nice', 'a string');
map1.delete('nice'); // true
map1.size; // 2

var arrayKey = [];
map1.set(arrayKey, [1,2,3,4,5]);
var objectKey = {};
map1.set(objectKey, {a:1});


// Extracting values
map1.get(1); // 'sammy'
map1.get(false); // 'a boolean'
map1.get(arrayKey); // [1,2,3,4,5]
map1.get(objectKey); // {a:1}

// Iterating over a map
map1.forEach(v => console.log(v));
// 'sammy'
// 'a boolean'
// [1,2,3,4,5]
// {a:1}

// maps implement a Symbol.iterator which means: for ... of loop!
map1.values(); // MapIterator of values
map1.keys(); // MapIterator of keys

// Why use maps?
// map.size
// no more loops or Object.keys() to find object size
// Object.prototype keys can be accidentally overwritten, maps do not
// map iterating over keys and values is easy

// When to use maps?
// need to look up keys dynamically (that are not hard coded strings)
// need keys that are not strings
// frequently adding / removing key/value pairs
// operating on multiple keys at a time

// WeakMap
// map where all keys MUST be objects, not primitive data types
// Values in WeakMap can be cleared from memory if there is no reference to them
// More performant than maps, but can not be iterated over
