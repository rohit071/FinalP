/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    // MENU STATE CLASS
    var Help = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Help() {
            this.play = false;
            // Instantiate Game Container
            this.game = new createjs.Container();

            //Road object for scrolling background
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);

            //main desription
            this.des = new objects.Label(470, 260, "There are three levels in the game.");
            this.des.font = "20px Consolas";
            this.game.addChild(this.des);

            //place thisimage for bomb image
            this.dbombPic = new objects.Image(40, 60, "cloud");
            this.game.addChild(this.dbombPic);

            //Place picture for cars image
            this.carPic = new objects.Image(40, 220, "plane");
            this.game.addChild(this.carPic);

            //Place label for  game description
            this.bombLabel = new objects.Label(570, 60, "Avoid the Enemies or you will lose lives");
            this.bombLabel.font = "20px Consolas";
            this.game.addChild(this.bombLabel);

            //Place label for  game description
            this.bombLabel1 = new objects.Label(570, 90, "You Will encounter roadblocks at level 2");
            this.bombLabel1.font = "20px Consolas";
            this.game.addChild(this.bombLabel1);

            //Place label for  game description
            this.bombLabel2 = new objects.Label(840, 140, "Roadblocks Cost 2 lives at second level \n\nand 3 at third level.");
            this.bombLabel2.font = "20px Consolas";
            this.game.addChild(this.bombLabel2);

            //Place picture for roablock
            this.roadblock = new objects.Image(80, 120, "roadblock");
            this.game.addChild(this.roadblock);

            //Place picture for gasstation
            this.bombPic = new objects.Image(80, 180, "island");
            this.game.addChild(this.bombPic);

            //Place label for roadblock description
            this.bombKillerLabel = new objects.Label(655, 185, "Collect these GasStation \n\nto score 100 points");
            this.bombKillerLabel.font = "20px Consolas";
            this.game.addChild(this.bombKillerLabel);

            //Place label to describe car
            this.carLabel = new objects.Label(500, 220, "Move your mouse  to move the car");
            this.carLabel.font = "20px Consolas";
            this.game.addChild(this.carLabel);

            //Place label to describe game
            this.gamei = new objects.Label(600, 350, "Player is given 5 lives at start\n\n of each level");
            this.gamei.font = "20px Consolas";
            this.game.addChild(this.gamei);

            //Play Button
            this.playButton = new objects.Button(320, 400, "playButton");
            this.playButton.on("click", this.playClicked, this);

            this.game.addChild(this.playButton);

            // Add Game Container to Stage
            stage.addChild(this.game);
        }
        Help.prototype.playClicked = function () {
            this.play = true;
        };

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Help.prototype.update = function () {
            this.ocean.update();

            if (this.play) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.PLAY_STATE;
                stateChanged = true;
            }

            stage.update(); // Refreshes our stage
        };
        return Help;
    })();
    states.Help = Help;
})(states || (states = {})); // States Module
//# sourceMappingURL=Help.js.map
