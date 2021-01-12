class Food{
    constructor(){
     this.image=loadImage(milkImg);
    // this.foodStock=20;
    }   
    
    bedroom(){
        background("Bed Room.png",550,500);
    }
    garden(){
        background("Garden.png",550,500);
    }
    washroom(){
        background("Wash Room.png",550,500);
    }
        
    display(){
        var x=80,y=100;
        
        imageMode(CENTER);
        image(this.image,720,220,70,70);
        if(food!=0){
            for(var i=0;i<food;i++){
                x=80;
                if(i%10==0){
                    x=80;
                    y+=50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }
    }
}