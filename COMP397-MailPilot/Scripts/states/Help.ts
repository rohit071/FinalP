/// <reference path="../constants.ts" />
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
    export class Help {
        // Game Objects 
        public game: createjs.Container;
        public ocean: objects.Ocean;
        public bomb: objects.Label;
        public playButton: objects.Button;
        public play: boolean = false;
        private des: objects.Label;
        private bombPic: objects.Image;
        private dbombPic: objects.Image;
        private bombLabel: objects.Label;
        private bombKillerPic: objects.Image;
        private bombKillerLabel: objects.Label;
        private carPic: objects.Image;
        private carLabel: objects.Label;


        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            

            // Instantiate Game Container
            this.game = new createjs.Container();

            //Road object for scrolling background
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);

          
            //main desription
            this.des = new objects.Label(570, 300, "Move car with mouse. You cant run on grass.");
            this.des.font = "20px Consolas";
            this.game.addChild(this.des);


            //Place label for  game bomb description
            this.bombLabel = new objects.Label(570, 60, "Avoid the bombs or you will lose lives");
            this.bombLabel.font = "20px Consolas";
            this.game.addChild(this.bombLabel);

            //place thisimage for bomb image
            this.dbombPic = new objects.Image(40, 60, "cloud");
            this.game.addChild(this.dbombPic);

            //Place picture for cars image
            this.carPic = new objects.Image(40, 220, "plane");
            this.game.addChild(this.carPic);

            //Place label for  game description
            this.bombLabel = new objects.Label(570, 60, "Avoid the bombs or you will lose lives");
            this.bombLabel.font = "20px Consolas";
            this.game.addChild(this.bombLabel);

            //Place picture for roadblocks
            this.bombPic = new objects.Image(40, 120, "island");
            this.game.addChild(this.bombPic);

            //Place label for roadblock description
            this.bombKillerLabel = new objects.Label(755, 135, "Collect these roadblocks \n\nto score 100 points");
            this.bombKillerLabel.font = "20px Consolas";
            this.game.addChild(this.bombKillerLabel);

            

            //Place label to describe car
            this.carLabel = new objects.Label(690, 250, "Move your mouse  to move the car \n\n    ");
            this.carLabel.font = "20px Consolas";
            this.game.addChild(this.carLabel);


           


            //Play Button
            this.playButton = new objects.Button(320, 400, "playButton");
            this.playButton.on("click", this.playClicked, this);

            this.game.addChild(this.playButton);

            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor

        public playClicked() {
            this.play = true;
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

            stage.update(); // Refreshes our stage

        } // Update Method

    } // Menu Class


} // States Module  