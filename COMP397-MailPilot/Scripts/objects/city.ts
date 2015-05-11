module objects {
    // OCEAN CLASS
    export class City extends createjs.Bitmap {
        // PUBLIC INSTANCE VARIABLES
        private _dx: number = 5;

        // CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("city"));

            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.x += this._dx;

            this._checkBounds();
        }

        // Reset position of island to the top
        public reset() {
            this.x = -960
            this.y = 0;
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            // check if island has left the bottom of the screen
            if (this.x === 0) {
                this.reset();
            }
        }

    }

}  