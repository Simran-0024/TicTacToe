let choice= document.querySelectorAll(".box");
let resetbtn= document.querySelector(".reset-btn");
let newbtn=document.querySelector(".newbtn");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msgcontainer");
let draw=document.querySelector(".Draw");

let count=0;
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
            count++;
        }
        else{
            box.innerText="X";
            turnO=true;
            count++;
        }
        box.disabled=true;

        checkWinner();
        
    })

});



const disableBoxes= () =>{
    for (cho of choice){
        cho.disabled=true;

    }
}

const enableBoxes= () =>{
    for (cho of choice){
        cho.disabled=false;
        cho.innerText="";
    }
   
}
const displaywinner=(winner)=>{
    msg.innerText=`Congrats ,Our winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
    


};

const checkDraw=()=>{
    if (count===9){
        Draw();
    }
}


const Draw=()=>{
    msg.innerText="Oops! It's a Draw ..No one is the Winner";
    msgcontainer.classList.remove("hide");
    disableBoxes();


 

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
            else{
                checkDraw();
            }
        }
        
        

    }
    
};

const resetGame = ()=>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
    checkWinner();

}

newbtn.addEventListener("click",(resetGame));
resetbtn.addEventListener("click",(resetGame));

