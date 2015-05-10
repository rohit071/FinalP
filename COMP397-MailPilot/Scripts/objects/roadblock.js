var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // CLOUD CLASS
    var Roadblock = (function (_super) {
        __extends(Roadblock, _super);
        // CONSTRUCTOR
        function Roadblock() {
            _super.call(this, "roadblock");
            this.sound = "thunder";
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Roadblock.prototype.update = function () {
            this.y += this._dy;
            this.x += this._dx;

            this._checkBounds();
        };

        // Reset position of roadblock to left
        Roadblock.prototype.reset = function () {
            this.x = -Math.floor((Math.random() * 380) + 100);
            ;
            this.y = Math.floor((Math.random() * 300) + 100);
            this._dx = 5;
            this._dy = Math.floor(Math.random());
        };

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Roadblock.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.x >= (640 + this.height)) {
                this.reset();
            }
        };
        return Roadblock;
    })(objects.GameObject);
    objects.Roadblock = Roadblock;
})(objects || (objects = {}));
//# sourceMappingURL=roadblock.js.map
