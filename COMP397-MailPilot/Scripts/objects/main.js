/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="ocean.ts" />
var states;
(function (states) {
    var GamePlay = (function () {
        function GamePlay() {
            // Instantiate Game Container
            this.game = new createjs.Container();

            //Instantiante Road object for scrolling background
            this.road = new objects.Ocean();
            this.game.addChild(this.road);

            //Instantiate Car Object for Player Avatar
            this.car = new objects.Car();
            this.game.addChild(this.car);

            //Instantiate WeedKiller Object for Player Points
            this.weedKiller = new objects.WeedKiller();
            this.game.addChild(this.weedKiller);

            for (var tumbleweed = constants.WEED_NUM; tumbleweed >= 0; tumbleweed--) {
                this.tumbleweeds[tumbleweed] = new objects.Tumbleweed();
                this.game.addChild(this.tumbleweeds[tumbleweed]);
            }

            //Instantiate Scoreboard class object for the game to maintain stage score
            this.scoreboard = new objects.ScoreBoard(this.game);

            // Add Game Container to Stage
            stage.addChild(this.game);
        }
        // DISTANCE CHECKING METHOD
        GamePlay.prototype.distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        };

        // CHECK COLLISION METHOD
        GamePlay.prototype.checkCollision = function (collider) {
            if (this.scoreboard.active) {
                var planePosition = new createjs.Point(this.car.x, this.car.y);
                var objectPosition = new createjs.Point(collider.x, collider.y);
                var theDistance = this.distance(planePosition, objectPosition);
                if (theDistance < ((this.car.height * 0.5) + (collider.height * 0.5))) {
                    if (collider.isColliding != true) {
                        createjs.Sound.play(collider.sound);
                        if (collider.name == "tumbleweed") {
                            this.scoreboard.lives--;
                            collider.reset();
                        }
                        if (collider.name == "weedkiller") {
                            this.scoreboard.score += 100;
                            this.weedKiller.reset();
                        }
                    }
                    collider.isColliding = true;
                } else {
                    collider.isColliding = false;
                }
            }
        };

        GamePlay.prototype.update = function () {
            //Update the Road Object
            this.road.update();

            //Update the Car Object
            this.car.update();

            //Update the WeedKiller Object
            this.weedKiller.update();

            for (var tumbleweed = constants.WEED_NUM; tumbleweed >= 0; tumbleweed--) {
                this.tumbleweeds[tumbleweed].update();

                //Check if the tumbleweed has collided with the car
                this.checkCollision(this.tumbleweeds[tumbleweed]);
            }

            //Check if the Car has collided (picked up) the weed killer
            this.checkCollision(this.weedKiller);

            //Call the Score Update Method to relect score and lives change on the gameplay screen
            this.scoreboard.update();

            stage.update(); // Refreshes our stage
        };
        return GamePlay;
    })();
    states.GamePlay = GamePlay;
})(states || (states = {})); // States Module
//# sourceMappingURL=main.js.map
