// JavaScript code for displaying and showing car reviews

// const leftFirst = document.getElementsByClassName('sectionleftfirst');
// const leftSecond = document.getElementsByClassName('sectionleftsecond');
var leftSecond;
var leftFirst;
// const leftIcon = document.getElementsByClassName('leftIcon');
// const rightIcon = document.getElementsByClassName('rightIcon');
setTimeout(() => {
    leftSecond = document.getElementsByClassName('sectionleftsecond').item(0)
    // console.log(leftFirst.style.display);
}, 1000);

setTimeout(() => {
    leftFirst = document.getElementsByClassName('sectionleftfirst').item(0)
    // console.log(leftFirst.style.display);
}, 1000);

// console.log(leftFirst.childNodes);
// console.log(leftFirst);
// console.log(leftSecond);
// document.addEventListener("DOMContentLoaded", function(e) {// do stuff
//     console.log(leftFirst)
// })

 const leftClick = ()=>{
    leftFirst.style.display='block';
    leftSecond.style.display = 'none';
    console.log(leftFirst);
            // 
            // leftSecond.style.display = 'none';
            // leftIcon.style.cursor = 'pointer';
            // console.log('leftclick');
            // console.log(leftFirst);  
    
} 
function rightClick(){
    leftSecond.style.display = 'block';
    leftFirst.style.display = 'none';
    console.log('rightclick');
}