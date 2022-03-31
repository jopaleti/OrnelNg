var leftSecond;
var leftFirst;
var leftIcon;
var rightIcon;
setTimeout(() => {
    leftIcon = document.getElementsByClassName('leftIcon').item(0);
    // console.log(leftFirst.style.display);
}, 1000);
setTimeout(() => {
    rightIcon = document.getElementsByClassName('rightIcon').item(0);
    // console.log(leftFirst.style.display);
}, 2000);

setTimeout(() => {
    leftSecond = document.getElementsByClassName('section2left').item(0)
    // console.log(leftFirst.style.display);
}, 1000);

setTimeout(() => {
    leftFirst = document.getElementsByClassName('sectionleftfirst').item(0)
    // console.log(leftFirst.style.display);
}, 1000);

 const leftClick = ()=>{
    leftFirst.style.display='block';
    leftSecond.style.display = 'none';
    console.log(leftIcon)
    leftIcon.style.color = 'black';
    rightIcon.style.color = 'grey';
    
} 
function rightClick(){
    leftSecond.style.display = 'block';
    leftFirst.style.display = 'none';
    leftIcon.style.color = 'grey';
    rightIcon.style.color = 'black';
}

