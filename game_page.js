function sendMathIntegers(){
numerator1 = document.getElementById("Int1").value;
console.log("1st Number:" + numerator1);

numerator2 = document.getElementById("Int2").value;
console.log("2nd Number:" + numerator2);

actual_answer = parseInt(numerator1) * parseInt(numerator2);
console.log(numerator1 + "*" + numerator2 + "=" + actual_answer);

question_div = "<h4>" + numerator1 + "X" + numerator2 + "</h4>";
input_control = "<br> Answer: <input type='text' id='inputcontroller' style='border-radius:6px;'>"
check_button = "<br><br><button onclick='button_check' class='btn btn-primary' style=''>Check</button> "
group_div_selfie = question_div + input_control + check_button;
document.getElementById("output").innerHTML = group_div_selfie;
}