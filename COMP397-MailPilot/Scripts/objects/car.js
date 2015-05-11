var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // CLOUD CLASS
    var Car = (function (_super) {
        __extends(Car, _super);
        // CONSTRUCTOR
        function Car() {
            _super.call(this, "car");
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
        Car.prototype.reset = function () {
            this.x = 50;
            this.y = 300;
            //this._dx = Math.floor(Math.random() * 5) + 5;
            //this._dy = Math.floor(Math.random() ) ;
        };

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Car.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.x >= (640 + this.height)) {
                this.reset();
            }
        };
        return Car;
    })(objects.GameObject);
    objects.Car = Car;
})(objects || (objects = {}));
//# sourceMappingURL=car.js.map
