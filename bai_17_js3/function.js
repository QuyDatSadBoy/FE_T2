// a = [1, 2, 3, 4, 5, 6, 7, 8];
// b = [2, 4, 6, 8];

// function sum_1(a) {
//   let sum = 0;
//   for (x of a) sum += x;
//   return sum;
// }

// var sum_2 = function (a) {
//   let sum = 0;
//   for (x of a) sum += x;
//   return sum;
// };

// var sum_3 = (...a) => {
//   let sum = 0;
//   for (let x of a) sum += x;
//   return sum;
// };

// console.log(sum_1(a), sum_2(a), sum_3(...a));

// c = {
//   ten: "dat",
//   age: 18,
//   bo: "Thuyên",
//   me: "dao",
// };

// c["chi"] = "Hong";
// delete c.chi;
// console.log(c);

d = [2, 4, undefined, 6, 8];
e = [3, 4, 5, 6, 7];

d.forEach((item, idex) => {
  item = 10;
});

console.log(d);

lonHon3 = e.every((item) => {
  return item >= 3;
});

if (lonHon3) console.log("Tất cả các phần tử đều >=3");
else console.log("có ít nhất 1 phần tử ko >=3");

lonHon6 = e.some((item, index) => {
  return item > 6;
});

console.log(e);

if (lonHon6) console.log("Có ít nhát 1 phần tử >6");
else console.log("không có phần tử nào > 6");

Find = e.find((item, index) => {
  return item == 6;
});

console.log(Find);

findOdd = e.filter((item, index) => {
  return item % 2 == 0;
});

console.log(findOdd);

arrayPow = e.map((item) => {
  return item ** 2;
});

console.log(arrayPow);

prefix = e.reduce((sum, item) => {
  return sum + item / 10;
}, 0);

console.log(prefix);
