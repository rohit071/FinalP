/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="ocean.ts" />




module states {

    export class GamePlay {
        // Game Objects 
        public game: createjs.Container;
        public scoreboard: objects.ScoreBoard;
        public road: objects.Ocean;
        public car: objects.Plane;
        
       


        constructor() {
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

            //Instantiate Tumbleweed Objects(Enemies for this game)
            for (var tumbleweed = constants.WEED_NUM; tumbleweed >= 0; tumbleweed--) {
                this.tumbleweeds[tumbleweed] = new objects.Tumbleweed();
                this.game.addChild(this.tumbleweeds[tumbleweed]);
            }

            //Instantiate Scoreboard class object for the game to maintain stage score
            this.scoreboard = new objects.ScoreBoard(this.game);

            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor


        // DISTANCE CHECKING METHOD
        public distance(p1: createjs.Point, p2: createjs.Point): number {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        } //Distance Method

        // CHECK COLLISION METHOD
        public checkCollision(collider: objects.GameObject) {
            if (this.scoreboard.active) {
                var planePosition: createjs.Point = new createjs.Point(this.car.x, this.car.y);
                var objectPosition: createjs.Point = new createjs.Point(collider.x, collider.y);
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
        } // checkCollision Method


        public update() {

            //Update the Road Object
            this.road.update();

            //Update the Car Object
            this.car.update();

            //Update the WeedKiller Object
            this.weedKiller.update();

            //Update the Tumbleweed Objects
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

        } // Update Method

    } // GamePlay Class


} // States Module