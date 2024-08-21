const obj = {
  some: 'some',
  dom: 'text',
  arr: [1, 2, 3, 4, 5],
  tom: 'there',
};

let arrValues = [];

arrValues = F1(obj);

console.log(arrValues);

function F1(x) {
  let arr = []; 
  for (let key in x) {
    Array.isArray(obj[key]) ? f2(obj[key], arr) : arr.push(obj[key]);
  }
  return arr;
}

function f2(y, arr) {
  y.map((el) => arr.push(el));
}
