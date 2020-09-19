// ES2015
var calculatedNumber = Math.pow(2,4);
calculateNumber; // 16

var nums = [1,2,3,4]
var base = 2;
var total = 2;

for (let i=0; i<nums.length; i++){
    total = Math.pow(total,nums[i]);
    console.log(total);
}
// 16777216

// ES2016
// exponentiation operator **
var calculatedNumber = 2**4;
calculatedNumber; // 16

var total = 2;
for (let i=0; i<nums.length; i++){
    total **= nums[i];
}
// 16777216


// ES2015
// [].includes: true if value included in string
var nums = [1,2,3,4,5]
nums.indexOf(3); // 2
nums.indexOf(3) > -1; // true
nums.indexOf(44) > -1; // false

// ES2016
var nums = [1,2,3,4,5]
nums.includes(3); // true
nums.includes(44); // false

// ES2017

// padStart(<total length of string> [, <padded char, default ' '>])
"awesome".padStart(10); // "   awesome"
"awesome".padStart(10, "!"); // "!!!awesome"

// padEnd(<total length of string> [, <padded char, default ' '>])
"hi".padEnd(5); // "hi   "
"hi".padEnd(5, "!"); // "hi!!!"
