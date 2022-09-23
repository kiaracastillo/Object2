//Kiara Castillo Magallanes
//09/22/2022
////Class #: 24603

let rectL = {
    x:3,
    y:150,
    width:25,
    height:100
    }
    
    let rectR = {
       x:470,
       y:150,
       width:25,
       height:100
      }
    
    function setup() {
       createCanvas(500,400);
       background(224);
    }
    
    
    function rect1(x,y) {
      rect(rectR.x,rectR.y,rectR.width,rectR.height);
    rect(rectL.x,rectL.y,rectL.width,rectL.height);
    
    }
    
    //create draw function
    function draw() {
    
     rect1();
       if (keyIsDown(UP_ARROW)) {
       rectL.y=rectL.y+5;
       rectR.y=rectR.y-5;
       }
    
       if (keyIsDown(DOWN_ARROW)) {
    
           rectR.y=rectR.y+5;
           rectL.y=rectL.y-5;
       }
    }
    
    