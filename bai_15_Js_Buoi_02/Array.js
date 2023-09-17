var a = ["tran", "quy", "dat"];
console.log(a.toString());
console.log(a.join(" "));
// pop() xóa phần tử cuối trả về phần tử đó
// push() thêm vào cuối trả về số lượng phần tử mới
// shift() xóa phần tử đầu trả về phần tử đó
// unShift() thêm 1 hoặc nhiều vào đầu trả về độ dài của mảng
a.splice(1, 0, "tran", "quy"); // trả về mảng bị xóa
console.log(a);

// concat() trả về chuỗi mới
a[0] = "tam";
console.log(a);
