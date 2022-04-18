/* Bài 1
    Cho người dùng nhập vào 3 số nguyên. Viết chương trình xuất 3 số theo thứ tự tăng dần.
*/

var sapXepTang = function () {
  var num1 = document.getElementById('bai1_num1').value *1;
  var num2 = document.getElementById('bai1_num2').value *1;
  var num3 = document.getElementById('bai1_num3').value *1;

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
