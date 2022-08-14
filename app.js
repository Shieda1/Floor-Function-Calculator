// https://www.omnicalculator.com/math/floor-function

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', function() {
  
    result.textContent = `Floor of x = ${computeFloor()}`;
})

// calculation

function computeFloor() {
  return Math.floor(Number(v1.value));
}