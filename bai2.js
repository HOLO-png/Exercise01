const valueInp = document.querySelector('#valueInp');
const helpIdMes = document.querySelector('#helpId');
const btn = document.querySelector('button');
var valueArr = [];
var valueInpts = '';
valueInp.onchange = function (e) {
  valueInpts = e.target.value;
};

btn.onclick = function () {
  valueArr.push(valueInpts);
  console.log(valueArr);
  if (valueArr.length >= 10) {
    helpIdMes.innerText = valueArr.join('');
  } else {
    helpIdMes.innerText = 'độ dài phần tử phải lớn hơn 10';
  }
};
