const SimpleObj = {
  some: 'some',
  dom: 'text',
  arr: [1, 2, 3, 4, 5],
  tom: 'there',
};

let ArrValues = [];

ArrValues = First(SimpleObj);

console.log(ArrValues);

function First(x) {
  const ArrNew = []; 
  for (let key in x) {
    Array.isArray(x[key]) ? Second(x[key], ArrNew) : ArrNew.push(x[key]);
  }
  return ArrNew;
}

function Second(y, ArrNew) {
  y.map((el) => ArrNew.push(el));
}
