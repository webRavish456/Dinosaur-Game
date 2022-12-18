score=0;
cross=true;
let i;
let j=0;
 audiogo = new Audio('game.mp3');
  setTimeout(()=>
  {
    audiogo.play();
  },1000);
   

document.onkeydown = function(e){
    
    if(e.keyCode==38){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(()=>{
            dino.classList.remove('animateDino')
        }, 800);
         
    }  
 
}

function start()
{

    function position(elemid,property){
        var elem=document.querySelector(elemid);
        return window.getComputedStyle(elem,null).getPropertyValue(property);
    
    } 
    var left = position(".obstacle","left")
    console.log(left);
     i=1;
    gameStart=document.querySelector('.gameStart');
    dino=document.querySelector('.dino');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');

    score=0;
    updateScore(score);
    play();
    gameOver.style.visibility = 'hidden';
    gameStart.style.border='none';
    gameStart.style.visibility='hidden';
   
}

function play(){
    obstacle.style.animationDuration='4s';
    obstacle.classList.add('obstacleAni');
setInterval(()=> {
    
   

    gameStart=document.querySelector('.gameStart');
    dino=document.querySelector('.dino');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');

    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
  
    offsetX =Math.abs(dx-ox);
    offsetY =Math.abs(dy-oy);
    if(offsetX<150 && offsetY<48)
    {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
        dino.classList.remove('animateDino');
        setTimeout(()=>{
            gameStart.style.visibility='visible';
            gameOver.style.visibility = 'hidden';
        }, 3000);
      
    }
    else if(offsetX<100 && cross ){
    
       
           score+=1;
           updateScore(score);
           cross=false;
           setTimeout(()=>{
               cross=true;
           },1000);
          
        
       setTimeout(() => {
            speed();
            
       },300);
      
      
}


               
},10)

          
}


function updateScore(score){
    scoreCount.innerHTML="Your Score: "+score;
   
}


/*setTimeout(()=>{
    aniDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
    newDur = aniDur - 0.1;
    obstacle.style.animationDuration = newDur + 's';
},500);


 
*/
function speed(){
   
let newDur;
if( score>(2*i)){  

 //setTimeout(()=>{
   
  aniDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
  newDur = aniDur - 0.5;

  obstacle.style.animationDuration = newDur + 's';

  console.log(newDur);
 i++;


  

 // },300);
}
}