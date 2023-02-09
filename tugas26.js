// function testEval() {
//   var x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   var total = 0;

//   for (i = 0; i < x.length; i++) {
//     total += x[i];
//   }

//   console.log(eval(total));
// }

// testEval();

// const panggilInf = () => {
//   var a = isFinite([1, 2, 3, 4, 5, 6]);
//   var b = isFinite(["jakarta", "Lampung", "depok"]);
//   var c = isFinite([1, 2, 3, "hello", "niomic"]);
//   var d = isFinite(-837294.23);
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(d);
// };

// panggilInf();

const panggilIsnan = () => {
  var a = [0, 2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
  a.map((item) => {
    if (isFinite(1000 / item)) {
      console.log("Angka", item, "NOT Infinity.");
    } else {
      console.log("Angka", item, "Infinity.");
    }
  });
};

panggilIsnan();
