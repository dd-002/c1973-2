const insights = document.getElementById("insights");

const nav1 = document.getElementById('nav-tab-button1');
const nav2 = document.getElementById('nav-tab-button2');
const nav3 = document.getElementById('nav-tab-button3');
const nav4 = document.getElementById('nav-tab-button4');
const nav5 = document.getElementById('nav-tab-button5');
const nav6 = document.getElementById('nav-tab-button6');
const nav7 = document.getElementById('nav-tab-button7');


nav1.addEventListener('click',()=>{
    console.log('clicked')
   window.scroll(0,findPos(insights)-90)
   document.getElementById('1').click();  
})
nav2.addEventListener('click',()=>{
    console.log('clicked')
   window.scroll(0,findPos(insights)-90)
   document.getElementById('2').click();  
})
nav3.addEventListener('click',()=>{
    console.log('clicked')
   window.scroll(0,findPos(insights)-90)
   document.getElementById('3').click();  
})
nav4.addEventListener('click',()=>{
    console.log('clicked')
   window.scroll(0,findPos(insights)-90)
   document.getElementById('4').click();  
})
nav5.addEventListener('click',()=>{
    console.log('clicked')
   window.scroll(0,findPos(insights)-90)
   document.getElementById('5').click();  
})
nav6.addEventListener('click',()=>{
    console.log('clicked')
   window.scroll(0,findPos(insights)-90)
   document.getElementById('6').click();  
})
nav7.addEventListener('click',()=>{
    console.log('clicked')
   window.scroll(0,findPos(insights)-90)
   document.getElementById('7').click();  
})



const findPos = (obj)=>{
    var currentTop= 0;
    if(obj.offsetParent){
        do {
            currentTop+=obj.offsetTop;
        }while((obj=obj.offsetParent));
        return [currentTop];
    }
}