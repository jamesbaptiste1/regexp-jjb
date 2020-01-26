// const str = "table football";

// const regex = RegExp("foo*");
// const globalRegex = RegExp("foo*", "g");

//var input2 = document.getElementById("input2");
function print() {
  var demo = (document.getElementById("demo").innerHTML = 5 + 6);
}
console.log(regex.test(str));
// expected output: true

console.log(regex.test(str));
// expected output: true

console.log(globalRegex.lastIndex);
// expected output: 0

console.log(globalRegex.test(str));
// expected output: true

console.log(globalRegex.lastIndex);
// expected output: 9

console.log(globalRegex.test(str));
// expected output: false
