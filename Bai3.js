/* Bài 3
    Cho 3 số nguyên. Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn
 */

var chanLe = function () {
  var num1 = (document.getElementById("bai3_num1").value * 1) % 2;
  var num2 = (document.getElementById("bai3_num2").value * 1) % 2;
  var num3 = (document.getElementById("bai3_num3").value * 1) % 2;

  var count = num1 + num2 + num3; //số lẻ
  document.getElementById("soLe").innerHTML = "Số số lẻ là: " + count;
  document.getElementById("soChan").innerHTML = "Số số chẵn là: " + (3 - count);
};
