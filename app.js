const mod=document.getElementById("modal");
const sub=document.getElementById("subscribe");

sub.onclick=function h() {
    mod.style.visibility="visible"
}
window.onclick=function(event){
    console.log(event.target);
// if(mod){
//     mod.style.visibility="hidden" 
// }

}

console.log("Hello World");
// alert("Hello world")