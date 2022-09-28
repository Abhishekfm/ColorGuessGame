let allBtn = document.querySelectorAll(".btn");
let screen  =document.querySelector(".screen");
let again  = document.querySelector(".rst");
let num  = document.querySelector(".num");
let tech  = document.querySelector(".tech");
let color;
let val = 0;
let ques = 1;
let down = 1;
let n;



function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    color = `RGB(${r},${g},${b})`;
    screen.innerText = color;
    n = Math.floor(Math.random()*allBtn.length);
    for(let i = 0; i < allBtn.length; i++){
        allBtn[i].addEventListener("click",function(){
            if(i === n){
                n = -1;
                screen.style.backgroundColor = color;
                screen.innerText = "You Got That Right";
                val = val + Number((1/down).toFixed(2));
                val = Number(val.toFixed(2));
                down = 1;
                tech.innerText = val;
                num.innerText = ques;
                return;
            }else if(n >= 0){
                down += 1;
                allBtn[i].style.backgroundColor = "transparent";
                allBtn[i].style.boxShadow = "none";
                allBtn[i].style.border = "0px";
            }
        },false)
        if(i === n){
            allBtn[i].style.backgroundColor = color;
            allBtn[i].style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
            allBtn[i].style.border = "1px solid #000";
            continue;
        }
        let ri = Math.floor(Math.random() * 255);
        let gi = Math.floor(Math.random() * 255);
        let bi = Math.floor(Math.random() * 255);
        let colori = `RGB(${ri},${gi},${bi})`;
        allBtn[i].style.backgroundColor = colori;
        allBtn[i].style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
        allBtn[i].style.border = "1px solid #000";
    }
}

randomColor();

again.addEventListener("click", ()=>{
    screen.innerText = color;
    screen.style.backgroundColor = "#fff";
    down = 1;
    randomColor();
    ques += 1;
})
