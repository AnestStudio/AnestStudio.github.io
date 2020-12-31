/*!
 * anest js
 */

function display() {
  var refresh = 1000;
  setTimeout('startTime()', refresh)
}

function startTime() {
  var x = new Date().toLocaleString();
  document.getElementById('clock').innerHTML = x;
  display();
}