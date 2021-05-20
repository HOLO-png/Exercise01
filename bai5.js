const inputNum = document.querySelector('#Num');
const btn = document.querySelector('button');
var num = 0;
inputNum.onchange = function (e) {
  num = e.target.value;
};
btn.onclick = function () {
  console.log(num.length);
  if (num.length <= 1) {
    console.log(num, ' la so doi xung');
  } else if (num.length > 1) {
    for (var i = 0; i < num.length; i++) {
      // console.log(num[0]);
      // console.log(num[num.length - 1]);

      if (num[0] == num[num.length - 1]) {
        // console.log(num, ' la so doi xung');
        if (num % 2 == 0) {
          for (j = i++; j < num.length - 1; j++) {
            if (num[j] == num[num.length - i]) {
              console.log(num, ' la so doi xung');
            } else {
              console.log(num, ' khong la so doi xung');
            }
          }
        } else {
          for (j = i++; j < num.length - 1; j++) {
            if (num[j] == num[num.length - i]) {
              console.log(num, ' la so doi xung');
            } else {
              console.log(num, ' khong la so doi xung');
            }
          }
        }
      } else {
        console.log(num, ' khong la so doi xung');
      }
    }
  }
};
