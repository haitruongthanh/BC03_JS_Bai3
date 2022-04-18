/* Bài 4:
    Viết chương trình cho nhập 3 cạnh của tam giác. Hãy cho biết đó làm tam giá gì?

*/

var tamGiac = function () {
  var canh1 = document.getElementById("bai4_canh1").value * 1;
  var canh2 = document.getElementById("bai4_canh2").value * 1;
  var canh3 = document.getElementById("bai4_canh3").value * 1;

  var loaiTamGiac = "";
  if (canh1 == canh2 && canh1 == canh3) {
    loaiTamGiac = "Tam giác đều";
  } else if (canh1 == canh2 || canh1 == canh3 || canh2 == canh3) {
    loaiTamGiac = "Tam giác cân";
  } else if (
    canh1 ** 2 == canh2 ** 2 + canh3 ** 2 ||
    canh2 ** 2 == canh1 ** 2 + canh3 ** 2 ||
    canh3 ** 2 == canh1 ** 2 + canh2 ** 2
  ) {
    loaiTamGiac = "Tam giác vuông";
  } else {
    loaiTamGiac = "Tam giác thường";
  }

  document.getElementById(
    "loaiTamGiac"
  ).innerHTML = `Tam giác có 3 cạnh ${canh1}, ${canh2}, ${canh3} là ${loaiTamGiac}`;
};
