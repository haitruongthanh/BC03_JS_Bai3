/* Bài 3
    Cho 3 số nguyên. Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn
 */

var chanLe = function () {
  var num1 = (prompt("Nhập số nguyên thứ nhất:") * 1) % 2;
  var num2 = (prompt("Nhập số nguyên thứ hai:") * 1) % 2;
  var num3 = (prompt("Nhập số nguyên thứ ba:") * 1) % 2;

  var count = num1 + num2 + num3; //số lẻ
  document.getElementById("soLe").innerHTML = "Số số lẻ là: " + count;
  document.getElementById("soChan").innerHTML = "Số số chẵn là: " + (3 - count);
};
