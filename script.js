let turnO = true;
    let box = document.querySelectorAll(".bxx");
let winn = document.querySelector(".winner");
let msg = document.querySelector(".msg");
let reset = document.querySelector("#reset");
let win = [
    [0,1,2],
    [3,4,5], 
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [6,7,8],
];

const showWinner = (winner) => {
winn.innerHTML = `Congratulations, Winner is ${winner}`;
msg.classList.remove("hidden");
}

box.forEach((bxx) => {
    bxx.addEventListener("click", () => {
        if(turnO){
            bxx.innerHTML = "O";
            turnO = false;
        }
        else{
            bxx.innerHTML = "X";
            turnO = true;
        }
bxx.disabled = true;

winner();
    } ) 
});
const new1 = () => {
turnO = true;
for(let bx of box){
    bx.disabled = false;
    bx.innerHTML = "";
}
msg.classList.add("hidden");
}

const winner = () => {
    for( let pattern of win){
        
        let val1 = box[pattern[0]].innerHTML 
        let val2 = box[pattern[1]].innerHTML 
        let val3 = box[pattern[2]].innerHTML
        if(val1!=""&& val2!=""&& val3!=""){
            if(val1 == val2 && val2 == val3){
                console.log("winner", val1)
                showWinner(val1);
            }
        }
    }

};
reset.addEventListener("click", new1);
