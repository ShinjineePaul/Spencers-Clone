let un=document.querySelector("#cancel");
let uppernav=document.querySelector("#uppernav");
un.onclick=function(){
    console.log("The close icon was clicked.");
    uppernav.style.display="none";
};
let mi=document.querySelector("#menuicon");
let m=document.querySelector("#menu");
let mc=document.querySelector("#menuclose");
let lo=document.querySelector("#logo");
let lowernav=document.querySelector("#lowernav");
m.style.display="none";
mi.onclick=function(){
    console.log("The menu-icon icon was clicked.");
    m.style.display="flex";
    m.style.flexDirection="column";
    mc.style.display="flex";
    mi.style.display="none";
    lo.style.visibility="hidden";
    lowernav.style.justifyContent="right";
};
mc.onclick=function(){
    console.log("The menu-close icon was clicked.");
    m.style.display="none";
    mc.style.display="none";
    mi.style.display="flex";
    lo.style.visibility="visible";
};
