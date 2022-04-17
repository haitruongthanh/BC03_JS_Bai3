/* Bài 1
    Cho người dùng nhập vào 3 số nguyên. Viết chương trình xuất 3 số theo thứ tự tăng dần.
*/

var sapXepTang = function () {
  var num1 = prompt("Nhập vào số nguyên thứ nhất: ") * 1;
  var num2 = prompt("Nhập vào số nguyên thứ hai: ") * 1;
  var num3 = prompt("Nhập vào số nguyên thứ ba: ") * 1;

  document.getElementById(
    "input"
  ).innerHTML = `Ba số nhập vào là: ${num1}, ${num2}, ${num3}`;

  var ketQuaSapXep = "";

  if (num1 >= num2 && num1 < num3) {
    ketQuaSapXep = `Kết quả sau khi sắp xếp là: ${num2}, ${num1}, ${num3}`;
  } else if (num1 >= num3 && num1 < num2) {
    ketQuaSapXep = `Kết quả sau khi sắp xếp là: ${num3}, ${num1}, ${num2}`;
  } else if (num2 >= num1 && num2 < num3) {
    ketQuaSapXep = `Kết quả sau khi sắp xếp là: ${num1}, ${num2}, ${num3}`;
  } else if (num2 >= num3 && num2 < num1) {
    ketQuaSapXep = `Kết quả sau khi sắp xếp là: ${num3}, ${num2}, ${num1}`;
  } else if (num3 >= num1 && num3 < num2) {
    ketQuaSapXep = `Kết quả sau khi sắp xếp là: ${num1}, ${num3}, ${num2}`;
  } else {
    ketQuaSapXep = `Kết quả sau khi sắp xếp là: ${num2}, ${num3}, ${num1}`;
  }

  document.getElementById("sapXepTang").innerHTML = ketQuaSapXep;
};
