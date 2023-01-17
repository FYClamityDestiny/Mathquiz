console.log("is it working?")
function addUserNames(){
    NameP1 = document.getElementById("Player1name").value;
    NameP2 = document.getElementById("Player2name").value;
    
    localStorage.setItem("Player1",NameP1);
    console.log("Player 1:" + NameP1);
    
    localStorage.setItem("Player2",NameP2);
    console.log("Player 2:" + NameP2);
    
    window.location = "gamepage.html";
    }