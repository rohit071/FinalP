var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // OCEAN CLASS
    var City = (function (_super) {
        __extends(City, _super);
        // CONSTRUCTOR
        function City() {
            _super.call(this, assetLoader.getResult("city"));
            // PUBLIC INSTANCE VARIABLES
            this._dx = 5;

            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        City.prototype.update = function () {
            this.x += this._dx;

            this._checkBounds();
        };

        // Reset position of island to the top
        City.prototype.reset = function () {
            this.x = -960;
            this.y = 0;
        };

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        City.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.x === 0) {
                this.reset();
            }
        };
        return City;
    })(createjs.Bitmap);
    objects.City = City;
})(objects || (objects = {}));
//# sourceMappingURL=city.js.map
