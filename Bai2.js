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
  var welcomeText = null;
  if (inputText == "b") {
    welcomeText = "Chào Ba";
  } else if (inputText == "m") {
    welcomeText = "Chào Mẹ";
  } else if (inputText == "a") {
    welcomeText = "Chào Anh";
  } else if (inputText == "e") {
    welcomeText = "Chào Em";
  }
  document.getElementById("welcome-text").innerHTML = welcomeText;
};
