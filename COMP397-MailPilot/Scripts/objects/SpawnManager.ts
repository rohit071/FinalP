module objects {
    // CLOUD CLASS
    export class SpawnManager extends objects.GameObject {

        // CONSTRUCTOR
        constructor() {
            super("cloud");
            this.sound = "thunder";
            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.rotation += this._rotation;
            this.x -= this._dx;
            this.scaleX = this._scale;
            this.scaleY = this._scale;
            this._checkBounds();
        }

        // Reset position of island to the top
        public reset() {

            this.y = Math.floor(Math.random() * 450);
            this.x = 660;
            this._dy = Math.floor(Math.random() * 5) + 5;
            this._dx = Math.floor(Math.random() * 4) + 5;
            this._scale = Math.floor(Math.random() * 2) + 1;
            this._rotation = Math.floor(Math.random() * 10) - 5;
            if (this._rotation == 0) {
                this._rotation = Math.floor(Math.random() * 10) - 5;
            }
            if (this._dx == 0) {
                this._dx = Math.floor(Math.random() * 4) + 5;
            }
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            // check if island has left the bottom of the screen
            if (this.x < (0)) {
                this.reset();
            }
        }

    }

}   