﻿/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />

/// <reference path="../objects/scoreboard.ts" />

module states {
    // MENU STATE CLASS
    export class Menu {
        // Game Objects 
        public game: createjs.Container;
        public ocean: objects.Ocean;
        public car: objects.Car;
        public mailPilotLabel: objects.Label;
        public playButton: objects.Button;
        public play: boolean = false;
        public helpButton: objects.Button;
        public help: boolean = false;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            

            // Instantiate Game Container
            this.game = new createjs.Container();

            //Ocean object
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);

            //ca rbg object
            this.car = new objects.Car();
            this.game.addChild(this.car);

            //Game Over Label
            this.mailPilotLabel = new objects.Label(320, 40, "GO GO GO");
            this.mailPilotLabel.font = "60px Consolas";
            this.mailPilotLabel.regX = this.mailPilotLabel.getMeasuredWidth() * 0.5;
            this.mailPilotLabel.regY = this.mailPilotLabel.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.mailPilotLabel);

           // var bitmap = new createjs.Bitmap(100, 100, "assets/images/car.png");
            
            //Play Button
            this.playButton = new objects.Button(320, 280, "playButton");
            this.playButton.on("click", this.playClicked, this);

            this.game.addChild(this.playButton);

            //Help Button
            this.helpButton = new objects.Button(320, 350, "helpButton");
            this.helpButton.on("click", this.helpClicked, this);

            this.game.addChild(this.helpButton);


            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor

        public playClicked() {
            this.play = true;
        }

        public helpClicked() {
            this.help = true;
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public update() {

            this.ocean.update();

            if (this.play) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.PLAY_STATE;
                stateChanged = true;
            }
            if (this.help) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.HELP_STATE;
                stateChanged = true;
            }


            stage.update(); // Refreshes our stage

        } // Update Method

    } // Menu Class


} // States Module