const inputNum = document.querySelector('#Num');
const btn = document.querySelector('button');
var num = 0;
inputNum.onchange = function (e) {
  num = e.target.value;
};
btn.onclick = function () {
  if (num > 2) {
    for (var i = 2; i < num; i++) {
      console.log(i);

      if (num % i != 0) {
        alert(num + ' la so nguyen to');
        break;
      } else {
        alert(num + ' ko phai so nguyen to');
        break;
      }
    }
  } else if (num == 2) {
    alert(num + ' la so nguyen to');
  } else {
    alert(num + ' ko phai so nguyen to');
  }
};
