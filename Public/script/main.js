var leftSecond;
var leftFirst;
var leftIcon;
var rightIcon;
setTimeout(() => {
    leftIcon = document.getElementsByClassName('leftIcon').item(0);
    // console.log(leftFirst.style.display);
}, 2000);
setTimeout(() => {
    rightIcon = document.getElementsByClassName('rightIcon').item(0);
    // console.log(leftFirst.style.display);
}, 2000);

setTimeout(() => {
    leftSecond = document.getElementsByClassName('section2left').item(0)
    // console.log(leftFirst.style.display);
}, 2000);

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

// Feature Code

var desc_image;
var img_1;
var img_2;
var img_3;
var sac;

setTimeout(() => {
   desc_image = document.getElementsByClassName('desc-image').item(0);
    // console.log(leftFirst.style.display);
    console.log(desc_image.src)
}, 1000);

// Getting images
setTimeout(()=>{
    img_1 = document.getElementsByClassName('img_1').item(0);
    img_2 = document.getElementsByClassName('img_2').item(0);
    img_3 = document.getElementsByClassName('img_3').item(0);
    sac = document.getElementsByClassName('sac').item(0);

    console.log(img_1, img_2, img_3);
    console.log(sac)
}, 1000);

function show_1(){
    desc_image.src = img_1.src;
    console.log(img_2.src);
}

function show_2() {
    desc_image.src = img_2.src;
}

function show_3() {
    desc_image.src = img_3.src;
}
// console.log(desc_image);

// Random Cars

var randSelector = document.getElementsByClassName('randSelector');
var random = document.getElementsByClassName('random');
var randImage = document.getElementsByClassName('randImage');


for (var i=0; i<randSelector.length; i++){
    randSelector[i].addEventListener('click', () => {
        console.log(randImage[i]);
    })
}

// carImage
// console.log('w============================================w');


// var carImage;

// window.onload = setTimeout(() => {
//     carImage = document.getElementsByClassName('carImage');
//      console.log(carImage.item(0).src)
//     //  for(i of carImage){
//     //      console.log(i)
//     //  }
//  }, 9000);
// console.log('w============================================w');

var arrowUp = document.getElementsByClassName('fa-arrow-up')[0];
var arrowDown = document.getElementsByClassName('fa-arrow-down')[0];
var index = parseInt(window.scrollY);
arrowUp.addEventListener('click', function(){
    if(index > 0){
        index -= 250;
    }
    window.scrollTo(0, index);
});
arrowUp.addEventListener('dblclick', function(){
    window.scrollTo(0, 0);
})

arrowDown.addEventListener('click', function(){
    if(index >= 0){
        index += 250;
    }

    window.scrollTo(0, index);
});
arrowDown.addEventListener('dblclick', function(){
    window.scrollTo(0, 16000);
})

