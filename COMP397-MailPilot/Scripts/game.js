/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="constants.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/cloud.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="states/gameplay.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/level2.ts" />
// Global game Variables
var canvas;
var stage;
var assetLoader;
var stats = new Stats();
var currentScore = 0;
var highScore = 0;
var plane;

//var lives: number = 5;
//var score: number = 0;
var level2Score;

// Game State Variables
var currentState;
var currentStateFunction;
var stateChanged = false;

var gamePlay;
var gameOver;
var menu;
var help;
var level_2;

//var level_3: states.Level3
var manifest = [
    { id: "cloud", src: "assets/images/sideplane.gif" },
    { id: "roadblock", src: "assets/images/island.png" },
    { id: "island", src: "assets/images/bomb.png" },
    { id: "ocean", src: "assets/images/ocean.gif" },
    { id: "plane", src: "assets/images/plane.png" },
    { id: "playButton", src: "assets/images/playButton.png" },
    { id: "tryAgainButton", src: "assets/images/tryAgainButton.png" },
    { id: "helpButton", src: "assets/images/helpButton.png" },
    { id: "engine", src: "assets/audio/engine.ogg" },
    { id: "yay", src: "assets/audio/yay.ogg" },
    { id: "thunder", src: "assets/audio/thunder.ogg" }
];

function Preload() {
    assetLoader = new createjs.LoadQueue(); // create a new preloader
    assetLoader.installPlugin(createjs.Sound); // need plugin for sounds
    assetLoader.on("complete", init, this); // when assets finished preloading - then init function

    assetLoader.loadManifest(manifest);
}

function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events

    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);
    setupStats();

    currentState = constants.MENU_STATE;
    changeState(currentState);
}

function tickHandler(e) {
    stage.update();
}

function setupStats() {
    stats.setMode(0);

    // align top-left
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '440px';

    document.body.appendChild(stats.domElement);
}

function gameLoop() {
    stats.begin();

    if (stateChanged) {
        changeState(currentState);
        stateChanged = false;
    } else {
        currentStateFunction.update();
    }

    stats.end();
}

function changeState(state) {
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            menu = new states.Menu();
            currentStateFunction = menu;
            break;

        case constants.PLAY_STATE:
            // instantiate game play screen
            gamePlay = new states.GamePlay();
            currentStateFunction = gamePlay;
            break;

        case constants.GAME_OVER_STATE:
            // instantiate game over screen
            gameOver = new states.GameOver();
            currentStateFunction = gameOver;
            break;

        case constants.HELP_STATE:
            help = new states.Help();

            currentStateFunction = help;
            break;

        case constants.LEVEL_2:
            level_2 = new states.level2();
            currentStateFunction = level_2;
            break;
    }
}
//# sourceMappingURL=game.js.map
