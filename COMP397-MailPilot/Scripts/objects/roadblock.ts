module objects {
    // CLOUD CLASS
    export class Roadblock extends objects.GameObject {

        // CONSTRUCTOR
        constructor() {
            super("roadblock");
            this.sound = "thunder";
            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.y += this._dy;
            this.x += this._dx;

            this._checkBounds();
        }

        // Reset position of roadblock to left
        public reset() {
            this.x = -Math.floor((Math.random() * 380) + 100);;
            this.y = Math.floor((Math.random() * 300)+100);
            this._dx =5;
            this._dy = Math.floor(Math.random() ) ;     
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