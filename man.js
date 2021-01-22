class Man{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.x = x;
        this.y = y;
        this.r = 150;

        this.animation = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");

        this.body = Bodies.circle(x,y,200,options) ;
        
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        animation(this.animation, pos.x, pos.y + 90, 300,300);
        
    }
}