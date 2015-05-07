/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
    var GamePlay = (function () {
        function GamePlay() {
            this.clouds = [];
            // Instantiate Game Container
            this.game = new createjs.Container();

            //Road Object
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);

            //Bonus object
            this.island = new objects.Island();
            this.game.addChild(this.island);

            //Car object
            this.plane = new objects.Plane();
            this.game.addChild(this.plane);

            for (var cloud = 2; cloud >= 0; cloud--) {
                this.clouds[cloud] = new objects.Cloud();
                this.game.addChild(this.clouds[cloud]);
            }

            //Level 1 Label
            this.level1Label = new objects.Label(220, 40, "Level 1");
            this.level1Label.font = "60px Consolas";
            this.level1Label.regX = this.level1Label.getMeasuredWidth() * 0.5;
            this.level1Label.regY = this.level1Label.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.level1Label);

            this.level1Label.shadow = new createjs.Shadow("red", 5, 5, 10);

            createjs.Tween.get(this.level1Label, { loop: false }).to({ x: 400 }, 1000, createjs.Ease.getPowInOut(2)).to({ alpha: 0, y: 0 }, 500, createjs.Ease.getPowInOut(2)).to({ alpha: 0, y: 125 }, 100);

            // Instantiate Scoreboard
            this.scoreboard = new objects.ScoreBoard(this.game);

            // Add Game Container to Stage
            stage.addChild(this.game);
            stage.cursor = "none";
        }
        // DISTANCE CHECKING METHOD
        GamePlay.prototype.distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        };

        // CHECK COLLISION METHOD
        GamePlay.prototype.checkCollision = function (collider) {
            if (this.scoreboard.active) {
                var planePosition = new createjs.Point(this.plane.x, this.plane.y);
                var objectPosition = new createjs.Point(collider.x, collider.y);
                var theDistance = this.distance(planePosition, objectPosition);
                if (theDistance < ((this.plane.height * 0.5) + (collider.height * 0.5))) {
                    if (collider.isColliding != true) {
                        createjs.Sound.play(collider.sound);
                        if (collider.name == "cloud") {
                            this.scoreboard.lives--;
                        }
                        if (collider.name == "island") {
                            this.scoreboard.score += 100;
                        }
                    }
                    collider.isColliding = true;
                } else {
                    collider.isColliding = false;
                }
            }
        };

        GamePlay.prototype.update = function () {
            this.ocean.update();

            this.island.update();

            this.plane.update();

            for (var cloud = 2; cloud >= 0; cloud--) {
                this.clouds[cloud].update();

                this.checkCollision(this.clouds[cloud]);
            }

            this.checkCollision(this.island);

            this.scoreboard.update();

            if (this.scoreboard.lives < 1) {
                this.scoreboard.active = false;
                createjs.Sound.stop();
                currentScore = this.scoreboard.score;
                if (currentScore > highScore) {
                    highScore = currentScore;
                }
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            }

            stage.update(); // Refreshes our stage
        };
        return GamePlay;
    })();
    states.GamePlay = GamePlay;
})(states || (states = {})); // States Module
//# sourceMappingURL=gameplay.js.map
