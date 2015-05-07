/// <reference path="../constants.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // IMAGE CLASS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Image = (function (_super) {
        __extends(Image, _super);
        function Image(x, y, buttonIDString) {
            _super.call(this, buttonIDString);
            this.x = x;
            this.y = y;
        }
        return Image;
    })(objects.GameObject);
    objects.Image = Image;
})(objects || (objects = {}));
//# sourceMappingURL=image.js.map
