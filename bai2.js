const valueInp = document.querySelector('#valueInp');
const helpIdMes = document.querySelector('#helpId');
const btn = document.querySelector('button');
var valueArr = [];
var valueInpts = '';
valueInp.onchange = function (e) {
  valueInpts = Number(e.target.value);
};

btn.onclick = function () {
  valueArr.push(valueInpts);

  helpIdMes.innerText = valueArr.join('-');
  if (valueArr.length == 3) {
    var soNguyenTo = [];
    for (let i = 0; i < valueArr.length; i++) {
      if (valueArr[i] > 2) {
        for (let j = 2; j < valueArr[i]; j++) {
          console.log(valueArr[i]);
          if (valueArr[i] % j != 0) {
            console.log(valueArr[i]);
            soNguyenTo.push(valueArr[i]);
            break;
          }
          break;
        }
      } else if (valueArr[i] == 2) {
        soNguyenTo.push(valueArr[i]);
      }
    }
  }
  valueInp.value = '';
  if (soNguyenTo) {
    alert(soNguyenTo.join(', ') + ' la so nguyen to');
  }
};
