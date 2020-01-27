function print() {
  // var str = "table football";
  var str = document.getElementById("input1").value;

  var re = /foo/i;
  //var re = document.getElementById("re").value;

  var answer = document.getElementById("answer");
  answer.innerHTML = re.test(str);
}
