var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // CLOUD CLASS
    var Fire = (function (_super) {
        __extends(Fire, _super);
        function Fire(x, y) {
            _super.call(this, "fire");
            this.sound = "bullet";
            this.x = x;
            this.y = y;
        }
        Fire.prototype.update = function () {
            this.x -= 5;

            if (this.x < 0) {
                stage.removeChild(this);
            }
        };

        Fire.prototype._reset = function () {
            this.x = 640 + Math.floor(Math.random() * 640);
            this.y = Math.floor(Math.random() * 480);
        };
        Fire.prototype.collide = function () {
            stage.removeChild(this);
        };
        return Fire;
    })(objects.GameObject);
    objects.Fire = Fire;
})(objects || (objects = {}));
//# sourceMappingURL=fire.js.map
