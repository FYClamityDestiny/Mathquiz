var Name1 = localStorage.getItem("Player1");
var Name2 = localStorage.getItem("Player2");

var Player1Score = 0;
var Player2Score = 0;

document.getElementById("NameP1").innerHTML = Name1 + ":";
document.getElementById("NameP2").innerHTML = Name2 + ":";
document.getElementById("P1SCORE").innerHTML = Player1Score;
document.getElementById("P2SCORE").innerHTML = Player2Score;
document.getElementById("Question").innerHTML = "Question Turn:" +  Name1;
document.getElementById("Answer").innerHTML = "Answer Turn:" + Name2;

function sendMathIntegers()
{
    numerator1 = document.getElementById("Int1").value;
    console.log("1st Number:" + numerator1);

    numerator2 = document.getElementById("Int2").value;
    console.log("2nd Number:" + numerator2);

    actual_answer = parseInt(numerator1) * parseInt(numerator2);
    console.log(numerator1 + "*" + numerator2 + "=" + actual_answer);

    document.getElementById("Int1").value = "";
    document.getElementById("Int2").value = "";

    question_div = "<h4>" + numerator1 + "X" + numerator2 + "</h4>";
    input_control = "<br> Answer: <input type='number' id='inputcontroller' style='border-radius:6px;'>"
    check_button = "<br><br><button onclick='button_check()' class='btn btn-primary' style=''>Check</button> "
    group_div_selfie = question_div + input_control + check_button;
    document.getElementById("output").innerHTML = group_div_selfie;
    document.getElementById("Int1").innerHTML = "";
    document.getElementById("Int2").innerHTML = "";
}

Player1Score = 0;
Player2Score = 0;

var question_turn = "Player1";
var answer_turn = "Player2";

function button_check()
{
    get_answer = document.getElementById("inputcontroller").value;
    console.log("Function check is online and working like the rest!");
    document.getElementById("output").innerHTML = "";
    if(actual_answer == get_answer)
    {
        if(answer_turn == "Player1")
        {
            Player1Score = Player1Score + 1;
            question_turn = "Player2"
            answer_turn - "Player1"
            document.getElementById("Question").innerHTML = "Question Turn:" + Name1;
            document.getElementById("Answer").innerHTML = "Answer Turn" + Name2;
            document.getElementById("P1SCORE").innerHTML = Player1Score;
            console.log(Name1 + " answered it correctly");
            console.log("And now the question turn goes to " + Name1);
            document.getElementById("output").innerHTML = "";
            document.getElementById("Int1").innerHTML = " ";
            document.getElementById("Int2").innerHTML = " ";
        }
        else
        {
            Player2Score = Player2Score + 1;
            question_turn = "Player1";
            answer_turn = "Player2";
            document.getElementById("Question").innerHTML = "Question Turn:" +  Name2;
            document.getElementById("Answer").innerHTML = "Answer Turn:" + Name1;
            console.log(Name2 + " answered it correctly");
            console.log("And now the question turn goes to " + Name2);
            document.getElementById("P2SCORE").innerHTML = Player2Score;
        }
    }
}
