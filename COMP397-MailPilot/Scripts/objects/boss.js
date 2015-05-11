var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // ISLAND CLASS
    var Boss = (function (_super) {
        __extends(Boss, _super);
        // CONSTRUCTOR
        function Boss() {
            _super.call(this, "boss");
            this.sound = "yay";
            this._dx = 5;

            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Boss.prototype.update = function () {
            this.x += this._dx;

            this._checkBounds();
        };

        // Reset position of island to the left
        Boss.prototype.reset = function () {
            this.x = -this.height;
            this.y = Math.floor(Math.random() * 300 + 100);
        };

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Boss.prototype._checkBounds = function () {
            // check if island has left the corner of the screen
            if (this.x >= (580 + this.height)) {
                this.reset();
            }
        };
        return Boss;
    })(objects.GameObject);
    objects.Boss = Boss;
})(objects || (objects = {}));
//# sourceMappingURL=boss.js.map
