let colors = ["Đỏ", "Xanh", "Vàng"];

colors.unshift("Tím");         // thêm "Tím" vào đầu
let firstColor = colors.shift();  // xoá phần tử đầu ("Tím")

console.log(colors);          // ["Đỏ", "Xanh", "Vàng"]
console.log(firstColor);      // "Tím"
