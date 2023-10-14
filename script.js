let box=document.querySelector(".box")
let winwidth=window.innerWidth;
let winheigth=window.innerHeight;
let speak=document.querySelector(".sp");
speak.classList.add("s");
box.addEventListener("mouseover",function(event){
    let boxatt=box.getBoundingClientRect();
    let  pos=newposition(boxatt.width,boxatt.height);
    box.style.top=pos.y+"px";
    box.style.left=pos.x+"px";
    let mouth=document.querySelector(".mouth");
    
    speak.classList.remove("s");
    mouth.classList.add("live");
    speak.classList.add("speak");
    setTimeout(() => {
        mouth.classList.remove("live")
        speak.classList.remove("speak")
    }, 2000);
   
})


function newposition(boxwidth,boxhight){
    let newX=Math.floor(Math.random()*winwidth - boxwidth);
    let newy=Math.floor(Math.random()*winheigth-boxhight);

    if(newX<0){
        newX=0;
    }if(newy<0){
        newy=0;
    }

    return {x:newX, y:newy};
    
}