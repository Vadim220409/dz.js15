function calculateSum() {

  var number1 = parseFloat(document.getElementById("number1").value);
  var number2 = parseFloat(document.getElementById("number2").value);


  var sum = number1 + number2;

  var resultList = document.getElementById("resultList");
  var listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(sum));
  resultList.appendChild(listItem);
}