module objects {
    // ISLAND CLASS
    export class Island extends objects.GameObject {

        // CONSTRUCTOR
        constructor() {
            super("island");
            this.sound = "yay";
            this._dx = 5;

            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.x += this._dx;

            this._checkBounds();
        }

        // Reset position of island to the left
        public reset() {
            this.x = -this.height;
            this.y = Math.floor(Math.random() * 300 + 100);
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            // check if island has left the corner of the screen
            if (this.x >= (580 + this.height)) {
                this.reset();
            }
        }

    }

} 