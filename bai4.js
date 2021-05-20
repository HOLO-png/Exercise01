const valueElement = document.querySelector('#valueInp');
const helpIdMes = document.querySelector('#helpId');
const btn = document.querySelectorAll('button');
var arrVal = [];
var valueInp = 0;
valueElement.onchange = function (e) {
  valueInp = e.target.value;
};

function addArrValues(arrVal, valueInp) {
  arrVal.push(valueInp);
  return arrVal;
}

btn[0].onclick = function () {
  addArrValues(arrVal, valueInp);
  helpIdMes.innerHTML = arrVal.join('-') + '';
};

btn[1].onclick = function () {
  var sum = 0;
  var arrSoHoanHao = [];
  if (arrVal.length >= 10) {
    for (var i = 0; i < arrVal.length; i++) {
      for (var j = 1; j <= arrVal[i]; j++) {
        if (arrVal[i] % j == 0) {
          sum += j;
        }
      }
      if (sum / 2 == arrVal[i]) {
        arrSoHoanHao.push(arrVal[i]);
        sum = 0;
      } else {
        sum = 0;
      }
    }
    if (arrSoHoanHao.length > 0) {
      alertMes(arrSoHoanHao.join(', ') + ' la so hoan hao');
    } else {
      alertMes(arrVal.join(', ') + ' khong la so hoan hao');
    }
  } else {
    alertMes('mảng không đủ độ dài, độ dài tối thiểu phải >= 10');
  }
};

function alertMes(message) {
  alert(message);
}
