const valueInp = document.querySelector('#valueInp');
const helpIdMes = document.querySelector('#helpId');
const btn = document.querySelector('button');
var valueInpts = 0;
valueInp.onchange = function (e) {
  valueInpts = e.target.value;
};

btn.onclick = function () {
  var sum = 0;
  if (valueInpts >= 2) {
    for (var i = 1; i <= valueInpts; i++) {
      if (valueInpts % i == 0) {
        sum += i;
      }
    }
    if (sum / 2 == valueInpts) {
      alert(valueInpts + ' la so hoan hao');
    } else {
      alert(valueInpts + ' la so khong hoan hao');
    }
  } else {
    alert(valueInpts + ' la so ko hoan hao');
  }
};

function alertMes(message) {
  alert(message);
}
