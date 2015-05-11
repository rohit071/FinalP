module objects {
    // CLOUD CLASS
    export class Car extends objects.GameObject {

        // CONSTRUCTOR
        constructor() {
            super("car");
            this.sound = "thunder";
            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        //public update() {
        //    this.y = 100;
        //    this.x = 400;

        //    this._checkBounds();
        //}

        // Reset position of island to the top
        public reset() {
            this.x = 50;
            this.y =300;
            //this._dx = Math.floor(Math.random() * 5) + 5;
            //this._dy = Math.floor(Math.random() ) ;
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            // check if island has left the bottom of the screen
            if (this.x >= (640 + this.height)) {
                this.reset();
            }
        }

    }

}  