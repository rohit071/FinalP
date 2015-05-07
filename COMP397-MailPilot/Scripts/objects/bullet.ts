module objects {
    // CLOUD CLASS
    export class Bullet extends objects.GameObject {

        // CONSTRUCTOR
        constructor() {
            super("bomb");
            this.sound = "thunder";
            
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++

    public fire() {
        

        this.x = plane.x + 13;
        this.y = plane.y - 20;

      

        
    } 
      
    }
} 