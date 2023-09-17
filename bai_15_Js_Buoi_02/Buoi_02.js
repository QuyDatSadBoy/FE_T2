// var ok = confirm("Bạn đã trên 18 tuổi chưa ?");
// if (ok) {
//     alert("Chúc mạng bạn đủ tuổi đi tù !");
// }
// else {
//     alert("Chúc mừng bạn chưa đủ tuổi !")
// }

// var s = prompt('Mời bạn nhập tên :');
// console.log(s);

// setTimeout(function () {
//     console.log("Tran quy dat");
// }, 1000);

var tmp = setInterval(function () {
    console.log("tạm thôi");
}, 1000);

setTimeout(function () {
    clearInterval(tmp);
}, 2000)
