/* Bài 2:
    Viết chương trình "Chào hỏi" các thành viên trong gia đình với các đặc điểm.

    Đầu tiên máy tính sẽ hỏi ai sử dụng máy. Sau đó dựa vào câu trả lời và đưa ra lời chào phù hợp.

    Giả sử trong gia đình có 4 thành viên: 
        Bố (B), 
        Mẹ (M), 
        anh Trai (A), 
        và em Gái (E)
 */

var logIn = function () {
  var inputText = document.getElementById("user").value;
  if (inputText == "b") {
    document.getElementById("welcome-text").innerHTML = "Chào Ba";
  } else if (inputText == "m") {
    document.getElementById("welcome-text").innerHTML = "Chào Mẹ";
  } else if (inputText == "a") {
    document.getElementById("welcome-text").innerHTML = "Chào Anh";
  } else if (inputText == "e") {
    document.getElementById("welcome-text").innerHTML = "Chào Em";
  }
};
