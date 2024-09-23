let choice= document.querySelectorAll(".box");
let resetbtn= document.querySelectorAll(".reset-btn");
let newbtn=document.querySelector(".newbtn");
let winner=document.querySelector(".winner");
let msgcontainer=document.querySelector(".msgcontainer");

let turnO =true; // player 1 or palyer 2 is decided from here
const winPatterns =[
    [0 ,1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];
choice.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    })

});
const displaywinner=(winner)=>{
    winner.innerText=`Congrats ,Our winner is ${winner}`;
    msgcontainer.classList.remove("hide");

};

const checkWinner = ()=>{
    for (pattern of winPatterns){
        let pos1= choice[pattern[0]].innerText;
        let pos2= choice[pattern[1]].innerText;
        let pos3= choice[pattern[2]].innerText;

        if (pos1!= "" && pos2!="" && pos3!=""){
            if (pos1===pos2 && pos2===pos3){
                displaywinner(pos1);



            }
        }

    }
};
