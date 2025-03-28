let WinArray = 
[
    "", "", "",
    "", "", "",
    "", "", "",
];

let whosTurnHtml = document.getElementById('whosTurn')

let WhosTurn = "x";

function CheckWinX(){
    // Check rows
    if(WinArray[0] === "x" && WinArray[1] === "x" && WinArray[2] === "x"){
        console.log("Player X wins");
    }
    else if(WinArray[3] === "x" && WinArray[4] === "x" && WinArray[5] === "x"){
        console.log("Player X wins");
    }
    else if(WinArray[6] === "x" && WinArray[7] === "x" && WinArray[8] === "x"){
        console.log("Player X wins");
    }


    else if(WinArray[0] === "x" && WinArray[4] === "x" && WinArray[8] === "x"){
        console.log("Player X wins");
    }
    else if(WinArray[2] === "x" && WinArray[4] === "x" && WinArray[6] === "x"){
        console.log("Player X wins");
    }


    else if(WinArray[0] === "x" && WinArray[3] === "x" && WinArray[6] === "x"){
        console.log("Player X wins");
    }
    else if(WinArray[1] === "x" && WinArray[4] === "x" && WinArray[7] === "x"){
        console.log("Player X wins");
    }
    else if(WinArray[2] === "x" && WinArray[5] === "x" && WinArray[8] === "x"){
        console.log("Player X wins");
    }
}

function CheckWinO(){
    // Check rows
    if(WinArray[0] === "o"  && WinArray[1] === "o" && WinArray[2] === "o"){
        console.log("Player O wins");
    }
    else if(WinArray[3] === "o" && WinArray[4] === "o" && WinArray[5] === "o"){
        console.log("Player O wins");
    }
    else if(WinArray[6] === "o" && WinArray[7] === "o" && WinArray[8] === "o"){
        console.log("Player O wins");
    }


    else if(WinArray[0] === "o" && WinArray[4] === "o" && WinArray[8] === "o"){
        console.log("Player O wins");
    }
    else if(WinArray[2] === "o" && WinArray[4] === "o" && WinArray[6] === "o"){
        console.log("Player O wins");
    }


    else if(WinArray[0] === "o" && WinArray[3] === "o" && WinArray[6] === "o"){
        console.log("Player O wins");
    }
    else if(WinArray[1] === "o" && WinArray[4] === "o" && WinArray[7] === "o"){
        console.log("Player O wins");
    }
    else if(WinArray[2] === "o" && WinArray[5] === "o" && WinArray[8] === "o"){
        console.log("Player O wins");
    }
}

function Fill_plain(IndexPlain){
    let plain  = document.querySelector(`#plainId${IndexPlain}`)
    console.log(IndexPlain)
    let NewImg = document.createElement("img");
    NewImg.className = "NewImgCss"
    console.log(WinArray)

    if(WinArray[IndexPlain] !== ""){
        console.log("this plain is also complited");
    }
    else if(WinArray[IndexPlain] == ""){
        if(WhosTurn == "o"){
            NewImg.src = "./imgs/45665.png";
            WhosTurn = "x";
            WinArray[IndexPlain] = "o";
        }
        else if(WhosTurn == "x"){
            NewImg.src = "./imgs/5968a2c8f2ed115d40bbe123.png";
            WhosTurn = "o";
            WinArray[IndexPlain] = "x";
        }

        whosTurnHtml.innerHTML = `${WhosTurn} turn!`

        plain.appendChild(NewImg)
        CheckWinX()
        CheckWinO()
    }
}