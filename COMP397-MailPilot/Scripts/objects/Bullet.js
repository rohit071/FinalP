var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // CLOUD CLASS
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        // CONSTRUCTOR
        function Bullet() {
            _super.call(this, "bomb");
            this.sound = "thunder";
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Bullet.prototype.fire = function () {
            this.x = plane.x + 13;
            this.y = plane.y - 20;
        };
        return Bullet;
    })(objects.GameObject);
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=Bullet.js.map
