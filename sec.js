let q1 = document.getElementById("q1");

function Showq2() {
  document.getElementById("q2").innerHTML = "Ayub Khan";
  var sheet = document.createElement("style");
  sheet.innerHTML = ".ans2 { background-color: green}";
  document.body.appendChild(sheet);
  return 0;
}
