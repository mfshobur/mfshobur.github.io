let playerClick = document.querySelectorAll(".player-select");
let compChoose = document.querySelector(".comp-box");
// let resultBox = document.querySelector(".result");





function getCompChoose() {
    let compHTML = Math.random()
    
    if (compHTML < 0.34) {return "Rock"}
    else if (compHTML > 0.67) {return "Scissor"}
    else {return "Paper"}
}

function getResult(player, computer) {
    
    if(player == computer) {
        return "DRAW"
    } else if(player == "Rock") {
        return (computer == "Paper") ? "YOU LOSE" : "YOU WIN"
    } else if(player == "Paper") {
        return (computer == "Rock") ? "YOU WIN" : "YOU LOSE"
    } else if(player == "Scissor") {
        return (computer == "Rock") ? "YOU LOSE" : "YOU WIN"
    }
}

function compRandom() {
    
    const option = ["Rock", "Paper", "Scissor"]
    let i = 0
    const startTime = new Date().getTime();

    setInterval(function(){
        if(new Date().getTime() - startTime > 1000){
            clearInterval;
            return;
        }

        compChoose.innerHTML = `<span>${option[i++]}</span>`;
        if(i == option.length) i = 0;

    }, 100);

}

playerClick.forEach(function(e) {
    
    e.addEventListener("click", function(a){
        let resultBox = document.querySelector(".result");
        
        let playerSpan = e.firstElementChild.innerHTML;

        // randomize computer box for 1000 ms
        compRandom();

        // get the variable of computer selection
        let compChose = getCompChoose();
        let result = getResult(playerSpan, compChose);
        
        playerClick.forEach(function(box){
            box.className = "player-select inactive"
        })
        e.classList.remove("inactive");
        e.classList.add("active");
        resultBox.innerHTML = "";
        resultBox.style.boxShadow = "0px 0px 15px black";




        // show what computer use and the result after 1000 ms
        setTimeout(function(){
            resultBox.innerHTML = result;
            compChoose.firstElementChild.innerHTML = compChose;
            if(result == "DRAW"){
                resultBox.style.boxShadow = "0px 0px 15px black";
            } else if(result == "YOU WIN") {
                resultBox.style.boxShadow = "0px 0px 15px blue";
            } else {
                resultBox.style.boxShadow = "0px 0px 15px red";
            }
        }, 1000);
        
        

    })

    }
);

