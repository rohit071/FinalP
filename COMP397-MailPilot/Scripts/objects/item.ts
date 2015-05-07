module objects {
    // CLOUD CLASS
    export class item extends objects.GameObject {
        protected _rotationSpeed: number = constants.TUMBLE_ROT_SPEED;
    // CONSTRUCTOR
    constructor() {
        super("item");
        this.sound = "yah";
        this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
        this.y += this._dy;
        this.x -= this._dx;
        this.rotation += this._rotationSpeed;
        this._checkBounds();
        }

        // Reset position of island to the top
        public reset() {
        this.x = constants.SCREEN_WIDTH + this.width;
        this.y = Math.floor(Math.random() * (constants.SCREEN_HEIGHT - this.height));
        this._dy = Math.floor(Math.random() * 4) - 2;
        this._dx = Math.floor(Math.random() * 6) + 3;
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
        // check if the item has left the left-hand side of the screen
        if (this.x < -this.width) {
            this.reset();
        }
    }

    }

}   