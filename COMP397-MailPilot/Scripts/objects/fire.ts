module objects {
    // CLOUD CLASS
    export class Fire extends objects.GameObject {

        constructor(x: number, y: number) {
            super("fire");
            this.sound = "bullet";
            this.x = x;
            this.y = y;
        } //constructor ends


        public update() {
            this.x -= 5;
           

            if (this.x < 0) {

                stage.removeChild(this);
            } //if ends
        }

        public _reset() {
           
            this.x = 640 + Math.floor(Math.random() * 640);
            this.y = Math.floor(Math.random() * 480);

        }
        public collide(): void {

            stage.removeChild(this);

        } //method collide ends
    }
} //method update end  
